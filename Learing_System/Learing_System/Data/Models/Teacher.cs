namespace Learning_System.Data.Models
{

    using System.ComponentModel.DataAnnotations;
    public class Teacher
    {
        public int Id { get; set; }

        [Required]
        [StringLength(50)]
        public string FirstName { get; set; } = null!;

        [Required]
        [StringLength(50)]
        public string LastName { get; set; } = null!;

        [Required]
        public string Password { get; set; }
        [Required]
        public string PasswordHasher { get; set; }

        public byte[]? Photo { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; } = null!;

        public string Qualified { get; set; } = null!;

        public string? YouTubeUrl { get; set; }

        public string? LinkedinUrl { get; set; }
    }
}
