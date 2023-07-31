using Learing_System.Data;
using Learing_System.Models;

namespace Learing_System.Services.Clients
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
