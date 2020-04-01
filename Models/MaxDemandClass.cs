using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AUSMDM.Models
{
    public class MaxDemandClass
    {
        public int No { get; set; }
        public int MSNO { get; set; }
        public string CustomerName { get; set; }
        public int POCSN { get; set; }
        public string Tariff { get; set; }
        public DateTime CollectTime { get; set; }
        public double KW_DEMAND_IMPORT { get; set; }
        public DateTime KW_DEMAND_IMPORT_TIME { get; set; }

     public static List<MaxDemandClass> maxDemands = new List<MaxDemandClass>
        {
            new MaxDemandClass{No=1,MSNO=23123312,CustomerName="DB",POCSN=1231234,Tariff="Total",CollectTime=DateTime.Now,KW_DEMAND_IMPORT=0.3,KW_DEMAND_IMPORT_TIME=DateTime.Now}
        };
    }
}
