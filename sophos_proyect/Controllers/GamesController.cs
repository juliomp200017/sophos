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
    public class GamesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public GamesController(AppDbContext context)
        {
            _context = context;
        }


        // GET: api/Games/Director
        [HttpGet]
        [Route("Director")]
        public async Task<ActionResult<IEnumerable<Game>>> GetGamesByDirector()
        {
            return await _context.Games.OrderByDescending(x => x.Director).ToListAsync();
        }

        // GET: api/Games/Protagonist
        [HttpGet]
        [Route("Protagonist")]
        public async Task<ActionResult<IEnumerable<Game>>> GetGamesByProtagonist()
        {
            return await _context.Games.OrderByDescending(x => x.Protagonist).ToListAsync();
        }

        // GET: api/Games/Producer
        [HttpGet]
        [Route("Producer")]
        public async Task<ActionResult<IEnumerable<Game>>> GetGamesByProducer()
        {
            return await _context.Games.OrderByDescending(x => x.Producer).ToListAsync();
        }

        // GET: api/Games/ReleaseDate
        [HttpGet]
        [Route("ReleaseDate")]
        public async Task<ActionResult<IEnumerable<Game>>> GetGamesByReleaseDate()
        {
            return await _context.Games.OrderByDescending(x => x.Releasedate).ToListAsync();
        }

        // GET: api/Games/mostfrequentgame
        [HttpGet]
        [Route("mostfrequentgame")]
        public async Task<IActionResult> mostfrequentgame()
        {
            List<Rental> list = await _context.Rentals.ToListAsync();
            var Frequecy = list.GroupBy(c => c.Idgame).Select(c => new { Game = c.Key, Frequecy = c.Count() }).OrderByDescending(c => c.Frequecy).ToList();
            var gameslist = _context.Games.OrderBy(c => c.Gamename);
            List<Game> frequentgamelist = new List<Game>();
            foreach (var item in Frequecy)
            {
                foreach (var Game in gameslist)
                {
                    if (item.Game == Game.Idgame)
                    {
                        frequentgamelist.Add(Game);
                    }
                }
            }

            return StatusCode(StatusCodes.Status200OK, frequentgamelist.ElementAt(0));
        }



        // PUT: api/Games/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGame(int id, Game game)
        {

            if (id != game.Idgame)
            {
                return BadRequest();
            }

            _context.Entry(game).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GameExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Games
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        [Route("Director")]
        [Route("Producer")]
        [Route("Protagonist")]
        [Route("ReleaseDate")]
        public async Task<ActionResult<Game>> PostGame(Game game)
        {
            _context.Games.Add(game);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetGame", new { id = game.Idgame }, game);
        }


        private bool GameExists(int id)
        {
            return _context.Games.Any(e => e.Idgame == id);
        }
    }
}
