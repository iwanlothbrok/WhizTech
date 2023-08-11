using Learing_System.InputModels;

namespace Learing_System.Services.Contact
{
	public interface IContactService
	{
		void AddAsync(ContactFormModel model);
	}
}
