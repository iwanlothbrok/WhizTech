using Learing_System.Data;
using Learing_System.Services.Courses;
using Microsoft.EntityFrameworkCore;
using System;

var builder = WebApplication.CreateBuilder(args);

// Configuration
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

builder.Services.AddCors(options =>
{
	options.AddPolicy("AllowReactApp",
		builder =>
		{
			builder.WithOrigins("https://localhost:44429")
				   .AllowAnyMethod()
				   .AllowAnyHeader();
		});
});
// Add services
builder.Services.AddControllersWithViews();
builder.Services.AddDbContext<ApplicationDbContext>(options =>
	options.UseSqlServer(connectionString));
builder.Services.AddTransient<ICourseService, CourseService>();
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
	app.UseDeveloperExceptionPage();
}
else
{
	// The default HSTS value is 30 days. You may want to change this for production scenarios.
	app.UseHsts();
}

// Enable CORS
app.UseCors("AllowAllOrigins");
app.UseCors("AllowReactApp");

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.MapControllerRoute(
	name: "default",
	pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");

app.Run();
