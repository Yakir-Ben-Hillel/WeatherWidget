using System;
using WeatherWidget.Services.Models;

namespace WeatherWidget.Services.Infra
{
    public interface IWeatherService
    {
        public Task<WeatherResponse> GetWeather(Coordination coordination, CancellationToken cancellationToken);
    }
}

