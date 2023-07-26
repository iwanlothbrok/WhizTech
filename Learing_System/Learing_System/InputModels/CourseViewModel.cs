using Learing_System.Models;
using System.ComponentModel.DataAnnotations;

namespace Learing_System.InputModels
{
	public class CourseViewModel
	{
		public int Id { get; set; }
		public int LanguageId { get; set; }
		public int TeacherId { get; set; }
		public string Title { get; set; } = null!;
		public string Description { get; set; } = null!;
		public string Summary { get; set; } = null!;
		public int VideosCount { get; set; }
		public int ArticlesCount { get; set; }
		public double TotalCourseTime { get; set; }
		public int ExercisesCount { get; set; }

		public List<Schedule> ScheduleProgram { get; set; } = new List<Schedule>();
	}
}
