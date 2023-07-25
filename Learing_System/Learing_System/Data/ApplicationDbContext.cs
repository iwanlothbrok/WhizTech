using Learing_System.Models;
using Microsoft.EntityFrameworkCore;

namespace Learing_System.Data
{
	public class ApplicationDbContext : DbContext
	{	
		protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
		{
			string connectionString = "Server=.;Database=Learingn_System;Trusted_Connection=True;Encrypt=False;TrustServerCertificate=True;";
			optionsBuilder.UseSqlServer(connectionString);

		}

		public DbSet<Course> Courses { get; set; }
		public DbSet<Teacher> Teachers { get; set; }
		public DbSet<ProgrammingLanguage> ProgrammingLanguages { get; set; }
		public DbSet<Schedule> Schedules { get; set; }
	}
}
