using AutoMapper;
using Learing_System.InputModels;
using Learning_System.InputModels;
using Learning_System.Models;

namespace Learning_System.Extension
{
	public class MapperProfile : Profile
	{
		public MapperProfile()
		{
			//Mappin for courses
			this.CreateMap<CourseViewModel, Course>();
			this.CreateMap<Course, CourseViewModel>();

			//Mapping for contact 
			this.CreateMap<Contact, ContactFormModel>();
			this.CreateMap<ContactFormModel, Contact>();
		}
	}
}
