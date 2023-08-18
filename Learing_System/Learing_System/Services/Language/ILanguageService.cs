using System.Text.Json.Serialization.Metadata;

namespace Learning_System.Services.Language
{
	public interface ILanguageService
	{
		int GetIdByName(string name);
	}
}
