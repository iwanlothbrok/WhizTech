using Learing_System.Data;
using Learing_System.InputModels;
using Learing_System.Models;
using Learing_System.Services.Clients;
using Learing_System.Services.Courses;
using Microsoft.AspNetCore.Mvc;

namespace Learing_System.Controllers
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
