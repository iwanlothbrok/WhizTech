using Learning_System.Data;
using Learning_System.Models;
using Microsoft.AspNetCore.Mvc;

namespace Learning_System.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class ContactController : ControllerBase
	{
		private readonly ApplicationDbContext data;

		public ContactController(ApplicationDbContext data)
		{
			this.data = data;
		}

		[HttpPost]
		public async Task<IActionResult> Add([FromBody] Contact info)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			this.data.Add(info);
			await data.SaveChangesAsync();

			return Ok();
		}
	}
}
