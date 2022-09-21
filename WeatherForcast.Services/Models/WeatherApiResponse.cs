using Newtonsoft.Json;

namespace WeatherWidget.Services.Models
{
    public class WeatherApiResponse
    {
        [JsonProperty("name")]
        public string City { get; set; } = String.Empty;

        public Main? Main { get; set; }
        public Sys? Sys { get; set; }

        public string Message { get; set; } = String.Empty;

        public int StatusCode { get; set; }
    }
}

