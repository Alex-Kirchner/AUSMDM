using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AUSMDM.Models
{
    public class EventAnalysisClass
    {
        public int No { get; set; }
        public int DeviceNo { get; set; }
        public string DeviceType { get; set; }
        public DateTime EventTime { get; set; }
        public string EventName { get; set; }
        public string Description { get; set; }

        static public List<EventAnalysisClass> eventAnalyses = new List<EventAnalysisClass>
        {
            new EventAnalysisClass{No=21,DeviceNo=12321,DeviceType="Meter",EventTime=DateTime.Now,EventName="Balance Alarm",Description=""}
        };

    }
}
