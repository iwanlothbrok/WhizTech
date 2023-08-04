using System.ComponentModel.DataAnnotations;

namespace Learning_System.Models
{
	public class Course
	{
		[Key]
		public int Id { get; set; }

		public int LanguageId { get; set; }
		public ProgrammingLanguage? Language { get; set; }

		public int TeacherId { get; set; }
		public Teacher? Teacher { get; set; }

		[Required]
		[StringLength(100)]
		public string Title { get; set; } = null!;

		public byte[]? Photo { get; set; }

		[Required]
		public string Description { get; set; } = null!;

		public string Summary { get; set; } = null!;

		public decimal Price { get; set; }

		public int VideosCount { get; set; }
		public int ArticlesCount { get; set; }
		public double TotalCourseTime { get; set; }
		public int ExercisesCount { get; set; }
		public int StudentsCount { get; set; }

		public List<Schedule> ScheduleProgram { get; set; } = new List<Schedule>();
	}
}