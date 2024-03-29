﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using System.Web.Services;

namespace test.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Privacy()
        {
            ViewBag.Message = "Your application privacy page.";

            return View();
        }

        public ActionResult Developers()
        {
            ViewBag.Message = "Your application developers page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult Page()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public new ActionResult Profile()
        {
            return View();
        }

        // POST: /Expression/Detect
        [WebMethod]
        public static string Detect(string data)
        {
            byte[] imgarr = Convert.FromBase64String(data);
            return "No emotion";
        }
    }
}