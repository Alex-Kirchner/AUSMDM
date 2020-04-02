using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AUSMDM.Models
{
    public class MonthlyBillingClass
    {
        public int No { get; set; }
        public int MSNO { get; set; }
        public string CustomerName { get; set; }
        public int POCSN { get; set; }
        public DateTime CollectTime { get; set; }
        public string Tariff { get; set; }
        public double KWH_IMPORT { get; set; }

        static public List<MonthlyBillingClass> monthlyBillings = new List<MonthlyBillingClass>
        {
            new MonthlyBillingClass{No=1,MSNO=123213,CustomerName="Name",POCSN=1221,CollectTime=DateTime.Now,Tariff="12",KWH_IMPORT=0.21}
        };
    }
}
