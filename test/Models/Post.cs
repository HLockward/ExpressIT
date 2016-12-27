using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace test.Models
{
    public class Post
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public DateTime CreatedAt { get; set; }
        public string Context { get; set; }
        public int MyProperty { get; set; }
        public int FatherPostId { get; set; }

    }
}