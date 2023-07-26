using Learing_System.InputModels;
using Learing_System.Models;

namespace Learing_System.Services.Courses
{
	public interface ICourseService
	{
		List<CourseViewModel> Get();
		CourseViewModel? GetById(int id);
		Task<bool> AddAsync(CourseViewModel course);
		bool Edit(CourseViewModel course);
		bool Delete(int id);
	}
}
