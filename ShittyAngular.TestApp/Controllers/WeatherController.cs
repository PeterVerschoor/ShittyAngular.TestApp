using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using Newtonsoft.Json.Linq;

namespace ShittyAngular.TestApp.Controllers
{
    public class WeatherController : ApiController
    {
        private const string apiKey = "1188c41f932a15956e024f0c9d41bf9b";
        private const string apiUrl = "http://api.openweathermap.org/data/2.5/weather?q={0}&appid={1}";

        // GET api/weather
//        public async Task<JObject> Get()
//        {
//            using (var client = new HttpClient())
//            {
//                var weatherJson = await client.GetStringAsync(string.Format(apiUrl, "Schiphol", apiKey));
//                return JObject.Parse(weatherJson);
//            }
//        }

        // GET api/weather/5
        public async Task<JObject> Get(string city)
        {
            using (var client = new HttpClient())
            {
                var weatherJson = await client.GetStringAsync(string.Format(apiUrl, city, apiKey));
                return JObject.Parse(weatherJson);
            }
        }
    }
}