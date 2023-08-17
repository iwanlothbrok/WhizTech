using Learning_System.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Runtime.CompilerServices;

namespace Learing_System.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class ExerciseController : ControllerBase
	{
		private readonly ApplicationDbContext context;

		public ExerciseController(ApplicationDbContext context)
		{
			this.context = context;
		}

		[HttpGet]
		public Task Get(string lang)
		{
			//make service which get the id of this LANG
			//then change the where to be PL.Id == gettedId

			return context.Exercises
					.Include(c => c.Answers)
					// that should not work properly 
					.Where(e => e.ProgrammingLanguage.Name == "C#")
					.ToListAsync();
		}
	}
}
