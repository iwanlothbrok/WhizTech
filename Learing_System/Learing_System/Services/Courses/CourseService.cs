using AutoMapper;
using Humanizer;
using Learing_System.Data;
using Learing_System.Extension;
using Learing_System.InputModels;
using Learing_System.Models;

namespace Learing_System.Services.Courses
{
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
			List<Course> courses = this.data.Courses.ToList();

			return (this.mapper.Map<List<CourseViewModel>>(courses));
		}

		public CourseViewModel? GetById(int id)
		=> (this.mapper.Map<CourseViewModel>(this.data.Courses.Find(id)));
	}
}
