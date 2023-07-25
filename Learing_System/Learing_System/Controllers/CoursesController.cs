namespace Learing_System.Controllers
{
	using Learing_System.Data;
	using Learing_System.InputModels;
	using Learing_System.Models;
	using Learing_System.Services.Courses;
	using Microsoft.AspNetCore.Mvc;
	using Microsoft.EntityFrameworkCore;
	using System.Collections.Generic;

	[Route("api/[controller]")]
	[ApiController]
	public class CoursesController : ControllerBase
	{
		private readonly ApplicationDbContext _dbContext;
		private readonly ICourseService courseService;

		public CoursesController(ApplicationDbContext dbContext, ICourseService courseService)
		{
			_dbContext = dbContext;
			this.courseService = courseService;
		}

		// GET api/courses
		[HttpGet]
		public List<CourseViewModel> Get()
		{
			return courseService.Get();
		}

		// GET api/courses/5
		[HttpGet("{id}")]
		public ActionResult<Course> Get(int id)
		{
			var course = _dbContext.Courses.Find(id);
			if (course == null)
			{
				return NotFound();
			}
			return course;
		}

		//// POST api/courses
		//[HttpPost]
		//public ActionResult<Course> Post([FromBody] Course course)
		//{
		//	_dbContext.Courses.Add(course);
		//	_dbContext.SaveChanges();
		//	return CreatedAtAction(nameof(Get), new { id = course.CourseId }, course);
		//}

		//// PUT api/courses/5
		//[HttpPut("{id}")]
		//public IActionResult Put(int id, [FromBody] Course course)
		//{
		//	if (id != course.CourseId)
		//	{
		//		return BadRequest();
		//	}

		//	_dbContext.Entry(course).State = EntityState.Modified;
		//	_dbContext.SaveChanges();

		//	return NoContent();
		//}

		//// DELETE api/courses/5
		//[HttpDelete("{id}")]
		//public IActionResult Delete(int id)
		//{
		//	var course = _dbContext.Courses.Find(id);
		//	if (course == null)
		//	{
		//		return NotFound();
		//	}

		//	_dbContext.Courses.Remove(course);
		//	_dbContext.SaveChanges();

		//	return NoContent();
		//}
	}

}
