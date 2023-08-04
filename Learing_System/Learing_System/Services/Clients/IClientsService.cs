using Learning_System.Models;

namespace Learning_System.Services.Clients
{
	public interface IClientsService
	{
		List<Student> GetLatestClients();
	}
}
