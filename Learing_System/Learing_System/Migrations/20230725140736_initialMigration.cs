using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Learning_System.Migrations
{
	/// <inheritdoc />
	public partial class initialMigration : Migration
	{
		/// <inheritdoc />
		protected override void Up(MigrationBuilder migrationBuilder)
		{
			migrationBuilder.CreateTable(
				name: "ProgrammingLanguages",
				columns: table => new
				{
					Id = table.Column<int>(type: "int", nullable: false)
						.Annotation("SqlServer:Identity", "1, 1"),
					Name = table.Column<string>(type: "nvarchar(max)", nullable: false)
				},
				constraints: table =>
				{
					table.PrimaryKey("PK_ProgrammingLanguages", x => x.Id);
				});

			migrationBuilder.CreateTable(
				name: "Teachers",
				columns: table => new
				{
					Id = table.Column<int>(type: "int", nullable: false)
						.Annotation("SqlServer:Identity", "1, 1"),
					FirstName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
					LastName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
					Password = table.Column<string>(type: "nvarchar(30)", nullable: false),
					PasswordHasher = table.Column<string>(type: "nvarchar(30)", nullable: false),
					Photo = table.Column<byte[]>(type: "varbinary(max)", nullable: true),
					Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
					Qualified = table.Column<string>(type: "nvarchar(max)", nullable: false),
					YouTubeUrl = table.Column<string>(type: "nvarchar(max)", nullable: true),
					LinkedinUrl = table.Column<string>(type: "nvarchar(max)", nullable: true)
				},
				constraints: table =>
				{
					table.PrimaryKey("PK_Teachers", x => x.Id);
				});

			migrationBuilder.CreateTable(
				name: "Courses",
				columns: table => new
				{
					Id = table.Column<int>(type: "int", nullable: false)
						.Annotation("SqlServer:Identity", "1, 1"),
					LanguageId = table.Column<int>(type: "int", nullable: false),
					TeacherId = table.Column<int>(type: "int", nullable: false),
					Title = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
					Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
					Summary = table.Column<string>(type: "nvarchar(max)", nullable: false),
					VideosCount = table.Column<int>(type: "int", nullable: false),
					ArticlesCount = table.Column<int>(type: "int", nullable: false),
					TotalCourseTime = table.Column<double>(type: "float", nullable: false),
					ExercisesCount = table.Column<int>(type: "int", nullable: false)
				},
				constraints: table =>
				{
					table.PrimaryKey("PK_Courses", x => x.Id);
					table.ForeignKey(
						name: "FK_Courses_ProgrammingLanguages_LanguageId",
						column: x => x.LanguageId,
						principalTable: "ProgrammingLanguages",
						principalColumn: "Id",
						onDelete: ReferentialAction.Cascade);
					table.ForeignKey(
						name: "FK_Courses_Teachers_TeacherId",
						column: x => x.TeacherId,
						principalTable: "Teachers",
						principalColumn: "Id",
						onDelete: ReferentialAction.Cascade);
				});

			migrationBuilder.CreateTable(
				name: "Schedules",
				columns: table => new
				{
					Id = table.Column<int>(type: "int", nullable: false)
						.Annotation("SqlServer:Identity", "1, 1"),
					Title = table.Column<string>(type: "nvarchar(max)", nullable: false),
					Count = table.Column<int>(type: "int", nullable: false),
					CourseId = table.Column<int>(type: "int", nullable: true)
				},
				constraints: table =>
				{
					table.PrimaryKey("PK_Schedules", x => x.Id);
					table.ForeignKey(
						name: "FK_Schedules_Courses_CourseId",
						column: x => x.CourseId,
						principalTable: "Courses",
						principalColumn: "Id");
				});

			migrationBuilder.CreateIndex(
				name: "IX_Courses_LanguageId",
				table: "Courses",
				column: "LanguageId");

			migrationBuilder.CreateIndex(
				name: "IX_Courses_TeacherId",
				table: "Courses",
				column: "TeacherId");

			migrationBuilder.CreateIndex(
				name: "IX_Schedules_CourseId",
				table: "Schedules",
				column: "CourseId");
		}

		/// <inheritdoc />
		protected override void Down(MigrationBuilder migrationBuilder)
		{
			migrationBuilder.DropTable(
				name: "Schedules");

			migrationBuilder.DropTable(
				name: "Courses");

			migrationBuilder.DropTable(
				name: "ProgrammingLanguages");

			migrationBuilder.DropTable(
				name: "Teachers");
		}
	}
}
