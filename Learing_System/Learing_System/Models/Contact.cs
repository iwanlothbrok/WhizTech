using System.ComponentModel.DataAnnotations;
using System.Reflection.Metadata.Ecma335;

namespace Learing_System.Models
{
	public class Contact
	{
		public int Id { get; set; }

		[Required]
		[StringLength(150)]
		public string FullName { get; set; } = null!;
		[Required]
		[StringLength(15)]
		public string PhoneNumber { get; set; } = null!;

		[EmailAddress]
		public string Email { get; set; } = null!;

		[Required]
		public string Description { get; set; } = null!;
	}
}
