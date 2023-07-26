namespace Learing_System.Services.Courses
{
	using Learing_System.InputModels;
	public interface ICourseService
	{
		List<CourseViewModel> Get();
		CourseViewModel? GetById(int id);
		Task<bool> AddAsync(CourseViewModel course);
		Task<bool> EditAsync(int id, CourseViewModel course);
		Task<bool> DeleteAsync(int id);
	}
}
