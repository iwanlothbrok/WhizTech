namespace Learing_System.Services.Courses
{
	using AutoMapper;
	using Learing_System.Data;
	using Learing_System.InputModels;
	using Learing_System.Models;

	public class CourseService : ICourseService
	{
		private readonly ApplicationDbContext data;
		private readonly IMapper mapper;
		public CourseService(ApplicationDbContext data, IMapper mapper)
		{
			this.data = data;
			this.mapper = mapper;
		}

		public async Task<bool> AddAsync(CourseViewModel course)
		{
			Course newestCourse = mapper.Map<Course>(course);

			await this.data.AddAsync(newestCourse);
			await this.data.SaveChangesAsync();

			return true;
		}

		public async Task<bool> DeleteAsync(int id)
		{
			Course? course = await this.data.Courses.FindAsync(id);

			if (course is null)
			{
				return false;
			}
			this.data.Remove(course);
			await this.data.SaveChangesAsync();

			return true;
		}

		public async Task<bool> EditAsync(int id,CourseViewModel course)
		{
			Course? existingCourse = await data.Courses.FindAsync(id);

			if (existingCourse is null)
			{
				return false;
			}

			this.mapper.Map(course, existingCourse);
			this.data.SaveChanges();

			return true;
		}

		public List<CourseViewModel> Get()
		{
			List<Course> courses = this.data.Courses.ToList();
			return (this.mapper.Map<List<CourseViewModel>>(courses));
		}

		public CourseViewModel? GetById(int id)
		=> (this.mapper.Map<CourseViewModel>(this.data.Courses.Find(id)));
	}
}
