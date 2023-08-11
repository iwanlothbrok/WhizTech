using System.ComponentModel.DataAnnotations;

namespace Learing_System.InputModels
{
	public class ContactFormModel
	{
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
