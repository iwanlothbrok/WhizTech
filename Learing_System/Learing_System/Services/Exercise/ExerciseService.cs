using AutoMapper;
using Learning_System.InputModels;
using Learning_System.Services.Language;
using Learning_System.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.SqlServer.Server;

namespace Learning_System.Services.Exercise
{
	public class ExerciseService : IExerciseService
	{
		private readonly ApplicationDbContext data;
		private readonly ILanguageService languageService;
		private readonly IMapper mapper;

		public ExerciseService(ApplicationDbContext data, ILanguageService languageService, IMapper mapper)
		{
			this.data = data;
			this.languageService = languageService;
			this.mapper = mapper;
		}

		public async Task<List<ExerciseViewModel>> GetExercisesForLang(string lang)
		{
			if (lang == "csharp")
			{
				lang = "C#";
			}
			else if (lang == "cplus")
			{
				lang = "C++";
			}

			int id = this.languageService.GetIdByName(lang);

			var exercises = await data.Exercises
									  .Include(c => c.Answers)
									  .Where(e => e.ProgrammingLanguage.Id == id)
									  .ToListAsync();

			var result = exercises.Select(e => new ExerciseViewModel
			{
				Id = e.Id,
				Title = e.Title,
				Description = e.Description,
				Answers = e.Answers.Select(a => a.AnswerText).ToList() // Extract answer names
			}).ToList();


			return result;
		}
	}
}
