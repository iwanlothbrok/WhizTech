﻿using System.ComponentModel.DataAnnotations;

namespace Learning_System.Models
{
	public class ProgrammingLanguage
	{
		public int Id { get; set; }
		[StringLength(50)]
		public string Name { get; set; } = null!;
	}
}