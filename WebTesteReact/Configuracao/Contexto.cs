using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebTesteReact.Model;

namespace WebTesteReact.Configuracao
{
    public class Contexto : DbContext
    {
        public Contexto(DbContextOptions<Contexto> options) : base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<Produto> Produto { get; set; }
        public DbSet<Ingrediente> Ingrediente { get; set; }

    }
}
