var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();
//builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo { Title = "AspReactSampleWork", Version = "v1" });
});
builder.Services.AddSwaggerDocument();
var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

//app.UseHttpsRedirection();
//app.Urls.Add("http://0.0.0.0:5000");
app.UseStaticFiles();
app.UseRouting();

//app.UseSwagger();
//app.UseSwaggerUI(c =>
//{
//    c.SwaggerEndpoint("/swagger/v1/swagger.json", "v1");
//    c.RoutePrefix=String.Empty;
//});
//app.UseEndpoints(endpoints =>
//{
//    endpoints.MapControllerRoute(name:"default",pattern: "{controller=Home}/{action=Index}/{id?}");
//});

app.UseOpenApi();
app.UseSwaggerUi3();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");;

app.Run();
