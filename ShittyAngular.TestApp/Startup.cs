using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(ShittyAngular.TestApp.Startup))]

namespace ShittyAngular.TestApp
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
        }
    }
}
