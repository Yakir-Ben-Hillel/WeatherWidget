using System;
namespace WeatherWidget.Services.Infra
{
    public class WeatherOptions
    {
        public const string Weather = "Weather";

        public string ApiURL { get; set; } = String.Empty;
        public string AppID { get; set; } = String.Empty;
        public string Units { get; set; } = String.Empty;
    }
}

