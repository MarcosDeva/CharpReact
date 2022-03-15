using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebTesteReact.Model
{
    [Table("Ingrediente")]
    public class Ingrediente
    {
        [Column("Id")]
        public int Id { get; set; }

        [Column("Nome")]
        public string Nome { get; set; }

        [Column("Valor")]
        public double Valor { get; set; }
    }
}
