using Microsoft.AspNetCore.Mvc;
using WeatherWidget.Services;
using WeatherWidget.Services.Infra;
using WeatherWidget.Services.Models;

namespace WeatherWidget.Controllers;

[ApiController]
[Route("[controller]")]
public class WeatherController : ControllerBase
{
    private IWeatherService WeatherService { get; }
    public WeatherController(IWeatherService weatherService)
    {
        WeatherService = weatherService;
    }

    [HttpGet]
    public async Task<IActionResult> Get([FromQuery]Coordination coordination)
    {
        var res = await WeatherService.GetWeather(coordination, default);
        if (res.StatusCode != 200)
        {
            return BadRequest(res);
        }
        return Ok(res);
    }
}

