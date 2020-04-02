using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AUSMDM.Models;
using Microsoft.AspNetCore.Http;

namespace AUSMDM.Controllers
{
    public class AnalysisSectionController : Controller
    {
        public ActionResult RawData()
        {
            bool isAjax = HttpContext.Request.Headers["X-Requested-With"] == "XMLHttpRequest";
            if (isAjax)
            {
                return PartialView("RawData", RawDataClass.RawData);
            }
            return View(RawDataClass.RawData);
        }
        public ActionResult MonthlyBilling()
        {
            bool isAjax = HttpContext.Request.Headers["X-Requested-With"] == "XMLHttpRequest";
            if (isAjax)
            {
                return PartialView("MonthlyBilling", MonthlyBillingClass.monthlyBillings);
            }
            return View(MonthlyBillingClass.monthlyBillings);
        }
        public ActionResult LoadProfile()
        {
            bool isAjax = HttpContext.Request.Headers["X-Requested-With"] == "XMLHttpRequest";
            if (isAjax)
            {
                return PartialView("LoadProfile", LoadProfileClass.loadProfiles);
            }
            return View(LoadProfileClass.loadProfiles);
        }
        public ActionResult EventAnalysis()
        {
            bool isAjax = HttpContext.Request.Headers["X-Requested-With"] == "XMLHttpRequest";
            if (isAjax)
            {
                return PartialView("EventAnalysis", EventAnalysisClass.eventAnalyses);
            }
            return View(EventAnalysisClass.eventAnalyses);
        }

        public ActionResult Consumption()
        {
            bool isAjax = HttpContext.Request.Headers["X-Requested-With"] == "XMLHttpRequest";
            if (isAjax)
            {
                return PartialView("Consumption", ConsumptionClass.consumptions);
            }
            return View(ConsumptionClass.consumptions);
        }

        // MaxDemand views
        public ActionResult MaxDemand()
        {
            bool isAjax = HttpContext.Request.Headers["X-Requested-With"] == "XMLHttpRequest";
            if (isAjax)
            {
                return PartialView("MaxDemand", MaxDemandClass.maxDemands);
            }
            return View(MaxDemandClass.maxDemands);
        }
        // Online Rate Views
        public ActionResult OnlineRate()
        {
            bool isAjax = HttpContext.Request.Headers["X-Requested-With"] == "XMLHttpRequest";
            if (isAjax)
            {
                return PartialView("OnlineRate", OnlineRateClass.rateClasses);
            }
            return View(OnlineRateClass.rateClasses);
        }
        public ActionResult TaskAnalysis()
        {
            bool isAjax = HttpContext.Request.Headers["X-Requested-With"] == "XMLHttpRequest";
            if (isAjax)
            {
                return PartialView("TaskAnalysis", TaskAnalysisClass.Tasks);
            }
            return View(TaskAnalysisClass.Tasks);
        }

      // LossLine View
        public ActionResult LineLossAnalysis()
        {
            bool isAjax = HttpContext.Request.Headers["X-Requested-With"] == "XMLHttpRequest";
            if (isAjax)
            {
                return PartialView("LineLossAnalysis", LineLossClass.LineLosses);
            }
            return View(LineLossClass.LineLosses);
            
        }

      
    }
}