using AutoMapper;
using Learing_System.InputModels;
using Learning_System.Data;

namespace Learing_System.Services.Contact
{
	public class ContactService : IContactService
	{
		private readonly IMapper mapper;
		private readonly ApplicationDbContext data;


		public ContactService(IMapper mapper, ApplicationDbContext data)
		{
			this.mapper = mapper;
			this.data = data;
		}

		public async Task AddAsync(ContactFormModel model)
		{
			var contact = this.mapper.Map<Learning_System.Models.Contact>(model);

			await this.data.AddAsync(contact);
			await this.data.SaveChangesAsync();
		}
	}
}
