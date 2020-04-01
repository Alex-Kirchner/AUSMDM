using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AUSMDM.Models
{
    public class OnlineRateClass
    {
        public int No { get; set; }
        public int DeviceNo { get; set; }
        public string DeviceType { get; set; }
        public DateTime Date { get; set; }
        public string LatestCom { get; set; }
        public int OnlineTimes { get; set; }
        public int OfflineTimes { get; set; }
        public int OnlineMinutes { get; set; }
        public double OnlineRate { get; set; }

        public static List<OnlineRateClass> rateClasses = new List<OnlineRateClass>
        {
            new OnlineRateClass{No=1,DeviceNo=2123,DeviceType="Meter",Date=DateTime.Now,LatestCom="123",OnlineTimes=2,
            OfflineTimes=2,OnlineMinutes=255,OnlineRate=10}
        };
    }
}
