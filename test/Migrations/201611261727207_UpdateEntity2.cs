namespace test.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UpdateEntity2 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.AspNetUsers", "ImgPath", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.AspNetUsers", "ImgPath");
        }
    }
}
