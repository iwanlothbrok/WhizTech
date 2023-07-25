using Learing_System.Models;
using Microsoft.EntityFrameworkCore;

namespace Learing_System.Data
{
	public class ApplicationDbContext : DbContext
	{

		public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
		{
		}
		public DbSet<Course> Courses { get; set; }
		public DbSet<Teacher> Teachers { get; set; }
		public DbSet<ProgrammingLanguage> ProgrammingLanguages { get; set; }
		public DbSet<Schedule> Schedules { get; set; }
	}
}
