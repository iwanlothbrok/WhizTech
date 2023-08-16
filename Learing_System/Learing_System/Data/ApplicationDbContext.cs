using Learing_System.Models;
using Learning_System.Models;
using Microsoft.EntityFrameworkCore;

namespace Learning_System.Data
{
	public class ApplicationDbContext : DbContext
	{

		public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
		{

		}
		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			modelBuilder.Entity<Answer>()
						.HasOne(a => a.Exercise)
						.WithMany(e => e.Answers)
						.HasForeignKey(a => a.ExerciseId);

			modelBuilder.Entity<Exercise>()
						.HasOne(e => e.ProgrammingLanguage)
						.WithMany()
						.HasForeignKey(e => e.ProgrammingLanguageId);

		}
		public DbSet<Teacher> Teachers { get; set; }
		public DbSet<ProgrammingLanguage> ProgrammingLanguages { get; set; }
		public DbSet<Contact> Contacts { get; set; }
		public DbSet<Exercise> Exercises { get; set; }
		public DbSet<Answer> Answers { get; set; }
	}
}
