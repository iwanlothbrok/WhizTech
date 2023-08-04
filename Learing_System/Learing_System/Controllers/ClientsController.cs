using Learning_System.Data;
using Learning_System.InputModels;
using Learning_System.Models;
using Learning_System.Services.Clients;
using Learning_System.Services.Courses;
using Microsoft.AspNetCore.Mvc;

namespace Learning_System.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class ClientsController : ControllerBase
	{

		private readonly IClientsService clients;

		public ClientsController(IClientsService clients)
		{
			this.clients = clients;
		}

		// api/clients
		[HttpGet]
		public ActionResult<List<CourseViewModel>> Get()
		{
			List<Student> a = this.clients.GetLatestClients();
			
			
			
			
			
			return Ok(this.clients.GetLatestClients());
		}
	}
}
