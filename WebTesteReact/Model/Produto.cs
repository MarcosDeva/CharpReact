using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebTesteReact.Model
{
    [Table("Produto")]
    public class Produto
    {
        [Column("Id")]
        public int Id { get; set; }

        [Column("Descricao")]
        public string Descricao { get; set; }

        [Column("Nome")]
        public string Nome { get; set; }
    }
}
