namespace Learning_System.Models
{
	public class ProgrammingLanguage
	{
		public int Id { get; set; }
		public string Name { get; set; } = null!;
		public List<Course> Courses { get; set; } = new List<Course>();
	}
}