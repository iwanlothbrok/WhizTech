using Learing_System.InputModels;

namespace Learing_System.Services.Contact
{
	public interface IContactService
	{
		Task AddAsync(ContactFormModel model);
	}
}
