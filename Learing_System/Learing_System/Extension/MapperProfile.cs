using AutoMapper;
using Learning_System.Data.Models;
using Learning_System.InputModels;

namespace Learning_System.Extension
{
	public class MapperProfile : Profile
	{
		public MapperProfile()
		{

			//Mapping for contact 
			this.CreateMap<Contact, ContactFormModel>();
			this.CreateMap<ContactFormModel, Contact>();

			//Mapping for exercises
			this.CreateMap<Exercise, ExerciseViewModel>();
			this.CreateMap<ExerciseViewModel, Exercise>();
		}
	}
}
