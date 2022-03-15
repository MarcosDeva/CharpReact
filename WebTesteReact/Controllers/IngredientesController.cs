using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebTesteReact.Configuracao;
using WebTesteReact.Model;

namespace WebTesteReact.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IngredientesController : ControllerBase
    {
        private readonly Contexto _context;

        public IngredientesController(Contexto context)
        {
            _context = context;
        }

        // GET: api/Produtos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Ingrediente>>> GetIngrediente()
        {
            return await _context.Ingrediente.ToListAsync();
        }
        
        // GET: api/Produtos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Ingrediente>> GetIngrediente(int id)
        {
            var ingrediente = await _context.Ingrediente.FindAsync(id);

            if (ingrediente == null)
            {
                return NotFound();
            }

            return ingrediente;
        }

        // PUT: api/Produtos/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutIngrediente(int id,[FromForm] Ingrediente ingrediente)
        {
            if (id != ingrediente.Id)
            {
                return BadRequest();
            }

            _context.Entry(ingrediente).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!IngredienteExists(id))
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

        // POST: api/Produtos
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Ingrediente>> PostIngrediente([FromForm] Ingrediente ingrediente)
        {
            _context.Ingrediente.Add(ingrediente);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetIngrediente", new { id = ingrediente.Id }, ingrediente);
        }

        // DELETE: api/Produtos/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteIngrediente(int id)
        {
            var ingrediente = await _context.Ingrediente.FindAsync(id);
            if (ingrediente == null)
            {
                return NotFound();
            }

            _context.Ingrediente.Remove(ingrediente);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool IngredienteExists(int id)
        {
            return _context.Produto.Any(e => e.Id == id);
        }
    }
}
