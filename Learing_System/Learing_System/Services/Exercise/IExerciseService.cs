namespace Learning_System.Services.Exercise
{
	using Learning_System.InputModels;
	public interface IExerciseService
	{
		Task<List<ExerciseViewModel>> GetExercisesForLang(string lang);
	}
}
