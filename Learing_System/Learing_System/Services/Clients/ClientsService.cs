using Learning_System.Data;
using Learning_System.Models;

namespace Learning_System.Services.Clients
{
	public class ClientsService : IClientsService
	{
		private readonly ApplicationDbContext data;

		public ClientsService(ApplicationDbContext data)
		{
			this.data = data;
		}

		public List<Student> GetLatestClients()
		=> this.data.Students.Take(3).ToList();

	}
}
