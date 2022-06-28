using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace AspReactSampleWork.Controllers;

[ApiController]
[Route("[controller]")]
public class WeatherForecastController : ControllerBase
{
    private static readonly string[] Summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    private readonly ILogger<WeatherForecastController>? _logger;
    public static List<WeatherForecast>? WeatherForecastsDatas { get; set; }
    public WeatherForecastController(ILogger<WeatherForecastController> logger)
    {
        _logger = logger;
    }
    
    [HttpGet]
    public IEnumerable<WeatherForecast> Get()
    {
        IEnumerable < WeatherForecast > weatherData = Enumerable.Range(1, 5).Select(index => new WeatherForecast
        {
            Date = DateTime.Now.AddDays(index),
            TemperatureC = Random.Shared.Next(-20, 55),
            Summary = Summaries[Random.Shared.Next(Summaries.Length)]
        });
        //_logger?.Log(LogLevel.Information, $"RandomData={WeatherForecastsDatas.ToArray()}");
        WeatherForecastsDatas=weatherData.ToList();
        return weatherData.ToArray();
    }
    [HttpPost("data")]
    public IEnumerable<WeatherForecast>? PostData([FromBody]string weatherString)
    {
        try
        {
            if (weatherString == null)
                return WeatherForecastsDatas?.ToArray();
            //TemporaryForecastData tempData= JsonConvert.DeserializeObject<TemporaryForecastData>(weatherString);
            WeatherForecast weather = JsonConvert.DeserializeObject<WeatherForecast>(weatherString);
            weather.Date = DateTime.Now;
            WeatherForecastsDatas?.Add(weather);
        }
        catch(Exception ex)
        {
            Console.Write(ex.ToString());
        }
        return WeatherForecastsDatas?.ToArray();
    }
    [HttpPost("test")]
    public IActionResult PostTest([FromBody]string testString)
    {
        //if(testString == null)
        //    return NotFound();
        PL plObj = new()
        {
            A = "1",
            B = "2"
        };
        try
        {
            PL testObj = JsonConvert.DeserializeObject<PL>(testString);
            string strTest = JsonConvert.SerializeObject(plObj);
        }
        catch(Exception ex)
        {
            Console.Write(ex.ToString());
        }
        
        return Ok(plObj);
    }
    [HttpDelete]
    public void ResetData()
    {

    }
}
