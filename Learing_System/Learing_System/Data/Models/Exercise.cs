using System.ComponentModel.DataAnnotations;

namespace Learning_System.Data.Models
{
    public class Exercise
    {
        [Key]
        public int Id { get; set; }
        public string Title { get; set; } = null!;
        public string Description { get; set; } = null!;

        public int ProgrammingLanguageId { get; set; }
        public ProgrammingLanguage? ProgrammingLanguage { get; set; }

        public ICollection<Answer> Answers { get; set; } = new List<Answer>();
    }
}
