using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Json;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace EncoreProject.Data
{
    public class ZmanimRepository
    {
        public async Task<ZmanimTime> ZmanimForDate(DateTime date, string zipCode)
        {
            using HttpClient client = new HttpClient();
            HttpResponseMessage response = await client.GetAsync($"https://www.hebcal.com/zmanim?cfg=json&zip={zipCode}&date=" +
                $"{date.ToString("yyyy-MM-dd")}");
            //HttpResponseMessage response = await client.GetAsync($"https://www.hebcal.com/zmanim?cfg=json&geonameid=3448439&date={date.ToString("yyyy-MM-dd")}");
            //HttpResponseMessage response = await client.GetAsync("https://www.hebcal.com/zmanim?cfg=json&geonameid=3448439&date=2021-03-23");
            if (response.IsSuccessStatusCode)
            {
                var responseBody = await response.Content.ReadAsStringAsync();
                var zmanim = JsonConvert.DeserializeObject<Zmanim>(responseBody);
                return zmanim.Times;
            }
            return null;
        }
    }
}
