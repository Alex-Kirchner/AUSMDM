using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AUSMDM.Models
{
    public class LineLossClass
    {
        public int No { get; set; }

        public string Name { get; set; }
        public string GatewayMeter{ get; set; }

        public DateTime Date { get; set; }
        public int KWHGatewayMeter { get; set; }
        public float KWHSUMCUSMET { get; set; }
        public double LineLossRate { get; set; }
        public int NumOfMeters { get; set; }

        public int NumbMeterDataCollected { get; set; }

        public static List<LineLossClass> LineLosses = new List<LineLossClass>
        {
            new LineLossClass {No=1,Name="Meter",GatewayMeter="GatewayMeter",Date=DateTime.Now,KWHGatewayMeter=20,KWHSUMCUSMET=20,LineLossRate=10,NumOfMeters=100,NumbMeterDataCollected=20 }    };

    }
}
