namespace Learning_System.Controllers
{
	using Learning_System.Data;
	using Learning_System.InputModels;
	using Learning_System.Services.Courses;
	using Microsoft.AspNetCore.Mvc;
	using System.Collections.Generic;

	[Route("api/[controller]")]
	[ApiController]
	public class CoursesController : ControllerBase
	{
		private readonly ICourseService courseService;

		public CoursesController(ICourseService courseService)
		{
			this.courseService = courseService;
		}

		// GET api/courses	
		[HttpGet]
		public ActionResult<List<CourseViewModel>> Get()
		{
			return Ok(this.courseService.Get());
		}
	}
}
