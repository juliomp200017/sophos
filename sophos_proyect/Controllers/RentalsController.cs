using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using sophos_proyect.DBContext;
using sophos_proyect.Models;

namespace sophos_proyect.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RentalsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public RentalsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Rentals
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Rental>>> GetRentals()
        {
            return await _context.Rentals.ToListAsync();
        }




        // GET: api/Rentals/rentalsbyday
        [HttpGet]
        [Route("RentalsByDay")]
        public async Task<IActionResult> rentalsbyday()
        {
            DateTime date = DateTime.Now.Date;
            
            List<Rental> lista = await _context.Rentals.Where(c => c.Rentaldate >= date && c.Rentaldate <= date.AddDays(1) ).ToListAsync();
            return StatusCode(StatusCodes.Status200OK, lista);
        }

        // POST: api/Rentals
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Rental>> PostRental(Rental rental)
        {
            _context.Rentals.Add(rental);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRental", new { id = rental.Idrental }, rental);
        }



        private bool RentalExists(int id)
        {
            return _context.Rentals.Any(e => e.Idrental == id);
        }
    }
}
