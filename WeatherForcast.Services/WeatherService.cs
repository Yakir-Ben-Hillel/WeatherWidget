using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.WebUtilities;
using WeatherWidget.Services.Infra;
using WeatherWidget.Services.Models;
using Newtonsoft.Json;

namespace WeatherWidget.Services;

public class WeatherService : IWeatherService
{
    private IConfiguration Configuration { get; }

    public WeatherService(IConfiguration configuration)
    {
        Configuration = configuration;
    }
    public async Task<WeatherResponse> GetWeather(Coordination coordination, CancellationToken cancellationToken)
    {
        var weatherOptions = new WeatherOptions();
        Configuration.GetSection(WeatherOptions.Weather).Bind(weatherOptions);
        var queryParams = new Dictionary<string, string>()
        {
            {"lat", coordination.Latitude.ToString()},
            {"lon", coordination.Longitude.ToString()},
            {"units",weatherOptions.Units },
            {"appid", weatherOptions.AppID}
        };
        var uri = QueryHelpers.AddQueryString(weatherOptions.ApiURL, queryParams);
        using var httpClient = new HttpClient();
        var res = await httpClient.GetAsync(uri, cancellationToken);
        var jsonString = await res.Content.ReadAsStringAsync(cancellationToken);
        var apiResponse = JsonConvert.DeserializeObject<WeatherApiResponse>(jsonString);
        var weatherResponse = new WeatherResponse()
        {
            StatusCode = (int)res.StatusCode
        };

        if (!res.IsSuccessStatusCode)
        {
            weatherResponse.Error = apiResponse.Message;
        }
        else
        {
            var country = ISO3166.Country.List
                .Where((country) =>
                country.TwoLetterCode == apiResponse.Sys.Country).FirstOrDefault();
            weatherResponse.Country = country.Name;
            weatherResponse.City = apiResponse.City;
            weatherResponse.Temperature = apiResponse.Main.Temperature;
        }
        return weatherResponse;
    }
}

