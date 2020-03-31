using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using AUSMDM.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace AUSMDM.Controllers
{
    public class ReportSectionController : Controller
    {
        private readonly ILogger<ReportSectionController> _logger;

        public ReportSectionController(ILogger<ReportSectionController> logger)
        {
            _logger = logger;
        }

        public IActionResult CollectionReport()
        {
            return View();
            
        }
        public IActionResult ArchiveReport()
        {
            return View();

        }
        public IActionResult PrePayReport()
        {
          return View();

        }

        public IActionResult _MeterStatus()
        {
            return View();

        }

        public IActionResult _MaintenanceReport()
        {
            return View();

        }

        public IActionResult _InstallationReport()
        {
            return View();

        }
        public IActionResult _ReplacementReport()
        {
            return View();

        }

        public IActionResult _OnlineAnalysis()
        {
            return View();

        }

        public IActionResult _MonthlyConsumption()
        {
            return View();

        }

        public IActionResult _MonthlyConsumptionFail()
        {
            return View();

        }
        
        public IActionResult _Non_LowPurchase()
        {
            return View();

        }

        public IActionResult _SalesReport()
        {
            return View();

        }

        public IActionResult _PurchaseReport()
        {
            return View();

        }

        public IActionResult _ReversalReport()
        {
            return View();

        }

        public IActionResult _TariffReport()
        {
            return View();

        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

    }
}