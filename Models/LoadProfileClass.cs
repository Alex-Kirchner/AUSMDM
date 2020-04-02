using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AUSMDM.Models
{
    public class LoadProfileClass
    {
        public int No { get; set; }
        public int MSNO { get; set; }
        public string CustomerName { get; set; }
        public int POCSN { get; set; }
        public DateTime Date { get; set; }
        public double KW_IMPORT { get; set; }

        static public List<LoadProfileClass> loadProfiles = new List<LoadProfileClass>
        {
            new LoadProfileClass{No=1,MSNO=200,CustomerName="A Name", POCSN=2347194,Date=DateTime.Now,KW_IMPORT=0.54}
        };

        
    }
}
