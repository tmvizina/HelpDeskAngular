using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TicketDeck.Models;

namespace TicketDeck.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookmarksController : ControllerBase
    {
        private readonly HelpDeskContext _context;

        public BookmarksController(HelpDeskContext context)
        {
            _context = context;
        }

        // GET: api/Bookmarks
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Bookmarks>>> GetBookmarks()
        {
            return await _context.Bookmarks.ToListAsync();
        }

        // GET: api/Bookmarks/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Bookmarks>> GetBookmarks(int id)
        {
            var bookmarks = await _context.Bookmarks.FindAsync(id);

            if (bookmarks == null)
            {
                return NotFound();
            }

            return bookmarks;
        }

        // PUT: api/Bookmarks/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBookmarks(int id, Bookmarks bookmarks)
        {
            if (id != bookmarks.BookmarkId)
            {
                return BadRequest();
            }

            _context.Entry(bookmarks).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BookmarksExists(id))
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

        // POST: api/Bookmarks
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Bookmarks>> PostBookmarks(Bookmarks bookmarks)
        {
            _context.Bookmarks.Add(bookmarks);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBookmarks", new { id = bookmarks.BookmarkId }, bookmarks);
        }

        // DELETE: api/Bookmarks/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Bookmarks>> DeleteBookmarks(int id)
        {
            var bookmarks = await _context.Bookmarks.FindAsync(id);
            if (bookmarks == null)
            {
                return NotFound();
            }

            _context.Bookmarks.Remove(bookmarks);
            await _context.SaveChangesAsync();

            return bookmarks;
        }

        private bool BookmarksExists(int id)
        {
            return _context.Bookmarks.Any(e => e.BookmarkId == id);
        }
    }
}
