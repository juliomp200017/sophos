using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NuGet.Versioning;
using sophos_proyect.DBContext;
using sophos_proyect.Models;

namespace sophos_proyect.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ClientsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Clients
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Client>>> GetClients()
        {
            return await _context.Clients.Include(x => x.Rentals).ToListAsync();
        }

        // GET: api/Clients/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Client>> GetClient(int id)
        {
            var client = await _context.Clients.Include(x => x.Rentals).FirstOrDefaultAsync(y => y.Idclient.Equals(id));


            if (client == null)
            {
                return NotFound();
            }

            return client;
        }


        // GET: api/Clients/mostfrequentclient
        [HttpGet]
        [Route("mostfrequentclient")]
        public async Task<IActionResult> mostfrequentclient()
        {
            List<Rental> list = await _context.Rentals.ToListAsync();
            var Frequency = list.GroupBy(c => c.Idclient).Select(c => new { Client = c.Key, Frequency = c.Count() }).OrderByDescending(c => c.Frequency).ToList();
            var clientlist = _context.Clients.OrderBy(c => c.Idclient);
            List<Client> frequentclientlist = new List<Client>();
            foreach (var item in Frequency)
            {
                foreach (var client in clientlist)
                {
                    if (item.Client == client.Idclient)
                    {
                        frequentclientlist.Add(client);
                    }
                }
            }
            return StatusCode(StatusCodes.Status200OK, frequentclientlist.ElementAt(0));
        }

        // POST: api/Clients
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Client>> PostClient(Client client)
        {
            _context.Clients.Add(client);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetClient", new { id = client.Idclient }, client);
        }


        private bool ClientExists(int id)
        {
            return _context.Clients.Any(e => e.Idclient == id);
        }
    }
}
