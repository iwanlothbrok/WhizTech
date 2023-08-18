using Learning_System.InputModels;

namespace Learning_System.Services.Contact
{
	public interface IContactService
	{
		Task AddAsync(ContactFormModel model);
	}
}
