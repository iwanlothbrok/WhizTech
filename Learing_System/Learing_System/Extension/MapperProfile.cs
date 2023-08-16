using AutoMapper;
using Learing_System.InputModels;
using Learning_System.Models;

namespace Learning_System.Extension
{
	public class MapperProfile : Profile
	{
		public MapperProfile()
		{
	
			//Mapping for contact 
			this.CreateMap<Contact, ContactFormModel>();
			this.CreateMap<ContactFormModel, Contact>();
		}
	}
}
