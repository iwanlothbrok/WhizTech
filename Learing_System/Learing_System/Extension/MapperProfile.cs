using AutoMapper;
using Learing_System.InputModels;
using Learing_System.Models;

namespace Learing_System.Extension
{
	public class MapperProfile : Profile
	{
		public MapperProfile()
		{
			//Mappin for courses
			this.CreateMap<CourseViewModel, Course>();
			this.CreateMap<Course, CourseViewModel>();
		}
	}
}
