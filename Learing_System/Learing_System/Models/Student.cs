using Learing_System.Controllers;
using System.ComponentModel.DataAnnotations;
using System.Reflection.Metadata.Ecma335;

namespace Learing_System.Models
{
	public class Student
	{
		[Key]
		public int Id { get; set; }

		[Required]
		[StringLength(50)]
		public string FirstName { get; set; } = null!;
		[Required]
		[StringLength(50)]
		public string LastName { get; set; } = null!;

		public int Age { get; set; }

		[StringLength(150)]
		[Required]
		public string Address { get; set; } = null!;

		[StringLength(30)]
		[Required]
		public string City { get; set; } = null!;

		[EmailAddress]
		[Required]
		public string Email { get; set; } = null!;

		[StringLength(20)]
		[Required]
		public string Phone { get; set; } = null!;

		public bool IsStudent { get; set; }
		public bool IsForLessons { get; set; }
		public bool IsForCourse { get; set; }

		public Genders Gender { get; set; }

		public int? CourseId { get; set; }
		public Course Course { get; set; }
		public List<Course> Courses { get; set; } = new List<Course>();

		public enum Genders
		{
			Male,
			Female,
			Other
		}
	}
}
