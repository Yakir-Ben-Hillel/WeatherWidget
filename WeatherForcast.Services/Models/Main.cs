using System;
using Newtonsoft.Json;

namespace WeatherWidget.Services.Models
{
    public class Main
    {
        [JsonProperty("temp")]
        public double Temperature { get; set; }
    }
}

