using Learning_System.Data.Models;
using System.Text.Json.Serialization;

namespace Learning_System.InputModels
{
	public class ExerciseViewModel
	{
		public int Id { get; set; }
		public string Title { get; set; } = null!;
		public string Description { get; set; } = null!;
		public List<string> Answers { get; set; } = new List<string>();
	}
}
