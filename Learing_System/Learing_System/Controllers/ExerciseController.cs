using Learning_System.Data;
using Learning_System.InputModels;
using Learning_System.Services.Exercise;
using Microsoft.AspNetCore.Mvc;

namespace Learning_System.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class ExerciseController : ControllerBase
	{
		private readonly ApplicationDbContext context;
		private readonly IExerciseService exercise;

		public ExerciseController(ApplicationDbContext context, IExerciseService exercise)
		{
			this.context = context;
			this.exercise = exercise;
		}

		[HttpGet]
		public async Task<ActionResult<List<ExerciseViewModel>>> Get([FromHeader] string lang)
		{
			var res = await this.exercise.GetExercisesForLang(lang.ToLower());
 
			return Ok(res);
		}
	}
}
