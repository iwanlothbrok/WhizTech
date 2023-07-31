namespace Learing_System.Controllers
{
	using Learing_System.Data;
	using Learing_System.InputModels;
	using Learing_System.Services.Courses;
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

		// GET api/courses/5
		[HttpGet("{id}")]
		public ActionResult<CourseViewModel> Get(int id)
		{
			CourseViewModel? course = this.courseService.GetById(id);

			if (course is null)
			{
				return BadRequest();
			}

			return Ok(course);
		}

		// POST api/courses
		[HttpPost]
		public async Task<ActionResult> PostAsync([FromBody] CourseViewModel course)
		{
			await this.courseService.AddAsync(course);

			return Ok();
		}

		//// PUT api/courses/5
		[HttpPut("{id}")]
		public async Task<IActionResult> EditAsync(int id, [FromBody] CourseViewModel course)
		{
			var isValid = await this.courseService.EditAsync(id, course);

			if (isValid == false)
			{
				return BadRequest();
			}

			return Ok();
		}

		// DELETE api/courses/5
		[HttpDelete("{id}")]
		public async Task<IActionResult> DeleteAsync(int id)
		{
			bool isValid = await this.courseService.DeleteAsync(id);

			if (isValid == false)
			{
				return BadRequest();
			}

			return Ok();
		}
	}
}
