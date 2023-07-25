namespace Learing_System.Controllers
{
	using Learing_System.Data;
	using Learing_System.Models;
	using Microsoft.AspNetCore.Mvc;
	using Microsoft.EntityFrameworkCore;
	using System.Collections.Generic;

	[Route("api/[controller]")]
	[ApiController]
	public class CoursesController : ControllerBase
	{
		private readonly ApplicationDbContext _dbContext;

		public CoursesController(ApplicationDbContext dbContext)
		{
			_dbContext = dbContext;
		}

		// GET api/courses
		[HttpGet]
		public IEnumerable<Course> Get()
		{
			return _dbContext.Courses;
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

		// POST api/courses
		[HttpPost]
		public ActionResult<Course> Post([FromBody] Course course)
		{
			_dbContext.Courses.Add(course);
			_dbContext.SaveChanges();
			return CreatedAtAction(nameof(Get), new { id = course.CourseId }, course);
		}

		// PUT api/courses/5
		[HttpPut("{id}")]
		public IActionResult Put(int id, [FromBody] Course course)
		{
			if (id != course.CourseId)
			{
				return BadRequest();
			}

			_dbContext.Entry(course).State = EntityState.Modified;
			_dbContext.SaveChanges();

			return NoContent();
		}

		// DELETE api/courses/5
		[HttpDelete("{id}")]
		public IActionResult Delete(int id)
		{
			var course = _dbContext.Courses.Find(id);
			if (course == null)
			{
				return NotFound();
			}

			_dbContext.Courses.Remove(course);
			_dbContext.SaveChanges();

			return NoContent();
		}
	}

}
