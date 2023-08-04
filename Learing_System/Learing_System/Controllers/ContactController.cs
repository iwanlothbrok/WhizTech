using Learing_System.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Learing_System.Controllers
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

		//[HttpPost]
		//public async Task<IActionResult> Add([FromBody] DataModel data)
		//{
		//	if (!ModelState.IsValid)
		//	{
		//		return BadRequest(ModelState);
		//	}

		//	_context.Data.Add(data);
		//	await _context.SaveChangesAsync();

		//	return Ok();
		//}
	}
}
