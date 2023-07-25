using Learing_System.Data;
using Learing_System.InputModels;

namespace Learing_System.Services.Courses
{
	public class CourseService : ICourseService
	{
		private readonly ApplicationDbContext data;

		public CourseService(ApplicationDbContext data)
		{
			this.data = data;
		}

		public bool Add(CourseViewModel course)
		{
			throw new NotImplementedException();
		}

		public bool Delete(int id)
		{
			throw new NotImplementedException();
		}

		public bool Edit(CourseViewModel course)
		{
			throw new NotImplementedException();
		}

		public List<CourseViewModel> Get()
		{
			return this.data.Courses.Select(c => new CourseViewModel
			{
				LanguageId = c.LanguageId,
				TeacherId = c.TeacherId,
				Title = c.Title,
				Description = c.Description,
				Summary = c.Summary,
				VideosCount = c.VideosCount,
				ArticlesCount = c.ArticlesCount,
				TotalCourseTime = c.TotalCourseTime,
				ExercisesCount = c.ExercisesCount,
				ScheduleProgram = c.ScheduleProgram.ToList() // Assuming ScheduleProgram is a collection navigation property
			}).ToList();
		}
	}
}
