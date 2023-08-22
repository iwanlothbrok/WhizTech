using AutoMapper;
using Learning_System.Data.Models;
using Learning_System.InputModels;
using Learning_System.Services.Contact;
using Learning_System.Data;
using Microsoft.AspNetCore.Mvc;

namespace Learning_System.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class ContactController : ControllerBase
	{
		private readonly IMapper mapper;
		private readonly IContactService contactService;

		public ContactController(IMapper mapper, IContactService contactService)
		{
			this.mapper = mapper;
			this.contactService = contactService;
		}

		[HttpPost]
		public async Task<IActionResult> PostAsync([FromBody] Contact formData)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			ContactFormModel form = mapper.Map<ContactFormModel>(formData);
			await this.contactService.AddAsync(form);

			return Ok();
		}
	}
}
