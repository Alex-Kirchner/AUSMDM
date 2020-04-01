using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AUSMDM.Models
{
    public class ConsumptionClass
    {
        public int No { get; set; }
        public int MSNO { get; set; }
        public string CustomerName { get; set; }

        public string POCSN { get; set; }
        public DateTime Date { get; set; }
        public string Tariff { get; set; }
        public string KWH_IMPORT { get; set; }

        static public List<ConsumptionClass> consumptions = new List<ConsumptionClass>
        {
            new ConsumptionClass{No=1,MSNO=20,CustomerName="Name",POCSN="@Placeholder",Date=DateTime.Now,Tariff="@"
            ,KWH_IMPORT="200"}
        };
    }
}
