namespace test.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UpdateEntity1 : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.AspNetUsers", "Country_CountryId", "dbo.Countries");
            DropIndex("dbo.AspNetUsers", new[] { "Country_CountryId" });
            RenameColumn(table: "dbo.AspNetUsers", name: "Country_CountryId", newName: "CountryId");
            AlterColumn("dbo.AspNetUsers", "CountryId", c => c.Int(nullable: false));
            CreateIndex("dbo.AspNetUsers", "CountryId");
            AddForeignKey("dbo.AspNetUsers", "CountryId", "dbo.Countries", "CountryId", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.AspNetUsers", "CountryId", "dbo.Countries");
            DropIndex("dbo.AspNetUsers", new[] { "CountryId" });
            AlterColumn("dbo.AspNetUsers", "CountryId", c => c.Int());
            RenameColumn(table: "dbo.AspNetUsers", name: "CountryId", newName: "Country_CountryId");
            CreateIndex("dbo.AspNetUsers", "Country_CountryId");
            AddForeignKey("dbo.AspNetUsers", "Country_CountryId", "dbo.Countries", "CountryId");
        }
    }
}
