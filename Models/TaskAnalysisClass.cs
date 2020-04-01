using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AUSMDM.Models
{
    public class TaskAnalysisClass

    {
        public int No { get; set; }
        public int DeviceNum { get; set; }
        public string DeviceType { get; set; }
        public string TaskType { get; set; }
        public string TaskName { get; set; }
        public DateTime ExecuteTime { get; set; }
        public DateTime FinishTime { get; set; }
        public int ElapsedTimeMS { get; set; }
        public string Result { get; set; }
        public int Times { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }

        public static List<TaskAnalysisClass> Tasks = new List<TaskAnalysisClass>
        {
            new TaskAnalysisClass{No=1,DeviceNum=255,DeviceType="Meter",TaskType="00007FF78006",TaskName="Power Quality Event",
            ExecuteTime=DateTime.Now,FinishTime=DateTime.Now,ElapsedTimeMS=2222,Result="Success",Times=1,
            StartTime=DateTime.Now,EndTime=DateTime.Now}
        };
    }
}
