using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EncoreProject.Data
{
    public class Location
    {
        public decimal Latitude { get; set; }
        public decimal Longitude { get; set; }
        public bool Il { get; set; }
        public string Tzid { get; set; }
        public string Name { get; set; }
        public string Cc { get; set; }
        public int GeoId { get; set; }
        public string Geo { get; set; }
        public int GeoNameId { get; set; }
        public string AsciiName { get; set; }
        public string Admin1 { get; set; }
        public int Population { get; set; }
    }
}
