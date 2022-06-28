namespace AspReactSampleWork;

public class WeatherForecast
{
    public DateTime Date { get; set; }

    public int TemperatureC { get; set; }

    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);

    public string? Summary { get; set; }
}

public class TemporaryForecastData
{
    public string? Date { get; set; }
    public string? TemperatureC { get; set; }
    public string? TemperatureF { get; set; }
    public string? Summary { get; set; }
}

public class PL
{
    public string? A { get; set; }
    public string? B { get; set; }
}
