﻿using System.Web;
using System.Web.Optimization;

namespace test
{
    public class BundleConfig
    {
        // Para obtener más información sobre Bundles, visite http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js",
                        "~/Scripts/Custom/img_render.js",
                        "~/Scripts/Custom/general.js"
                        ));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Utilice la versión de desarrollo de Modernizr para desarrollar y obtener información. De este modo, estará
            // preparado para la producción y podrá utilizar la herramienta de compilación disponible en http://modernizr.com para seleccionar solo las pruebas que necesite.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

            bundles.Add(new ScriptBundle("~/bundles/custom").Include(
                        "~/Scripts/Custom/account.js",
                        "~/Scripts/Custom/landingPage.js"
                        ));

            bundles.Add(new ScriptBundle("~/bundles/landingPage").Include(
                        "~/Scripts/Custom/landingPage.js"
                        ));
            /*
            bundles.Add(new ScriptBundle("~/bundles/updatedjquery").Include(
                        "~/Scripts/Custom/jquery-1.11.3.min.js",
                        "~/Scripts/Custom/jquery.mobile-1.4.5.min.js"
                        ));
                        */
        }
    }
}
