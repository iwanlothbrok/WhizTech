﻿using AutoMapper;
using Learing_System.InputModels;
using Learing_System.Services.Contact;
using Learning_System.Data;
using Learning_System.Models;
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
		public IActionResult Post([FromBody] Contact formData)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			ContactFormModel form = mapper.Map<ContactFormModel>(formData);
			this.contactService.AddAsync(form);

			return Ok();
		}
	}
}