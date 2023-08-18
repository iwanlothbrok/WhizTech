using Learning_System.Data;

namespace Learning_System.Services.Language
{
	public class LanguageService : ILanguageService
	{
		private readonly ApplicationDbContext data;

		public LanguageService(ApplicationDbContext data)
		{
			this.data = data;
		}

		public int GetIdByName(string name)
		=> this.data.ProgrammingLanguages
			.Where(data => data.Name == name.ToLower()).
			Select(c => c.Id).FirstOrDefault();
	}
}
