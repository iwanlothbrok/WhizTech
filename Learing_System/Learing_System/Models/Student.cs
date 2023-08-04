using Learning_System.Controllers;
using System.ComponentModel.DataAnnotations;
using System.Reflection.Metadata.Ecma335;

namespace Learning_System.Models
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

		[EmailAddress]
		[Required]
		public string Email { get; set; } = null!;

		[StringLength(20)]
		[Required]
		public string Phone { get; set; } = null!;

		// for visualize the response 
		public string? PhotoUrl { get; set; }

		public string? Information { get; set; }

		public bool IsStudent { get; set; }
	}
}
