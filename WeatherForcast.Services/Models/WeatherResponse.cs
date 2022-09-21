using System;
namespace WeatherWidget.Services.Models
{
    public class WeatherResponse
    {
        public string Country { get; set; } = string.Empty;
        public string City { get; set; } = string.Empty;
        public double Tempature { get; set; }
        public string? Error { get; set; } = null;
        public int StatusCode { get; set; }
    }
}

