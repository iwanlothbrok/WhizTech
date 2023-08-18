using System.ComponentModel.DataAnnotations;

namespace Learning_System.Data.Models
{
    public class Answer
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(150)]
        public string AnswerText { get; set; } = null!;

        public int ExerciseId { get; set; }
        public Exercise Exercise { get; set; }
    }
}
