using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Learing_System.Migrations
{
    /// <inheritdoc />
    public partial class CoursePhotoAdded : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<byte[]>(
                name: "Photo",
                table: "Courses",
                type: "varbinary(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Photo",
                table: "Courses");
        }
    }
}
