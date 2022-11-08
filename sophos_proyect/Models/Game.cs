using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace sophos_proyect.Models
{
    [Table("game")]
    public partial class Game
    {
        public Game()
        {
            Rentals = new HashSet<Rental>();
        }

        [Key]
        [Column("idgame")]
        public int Idgame { get; set; }
        [Column("gamename")]
        [StringLength(50)]
        [Unicode(false)]
        public string? Gamename { get; set; }
        [Column("protagonist")]
        [StringLength(50)]
        [Unicode(false)]
        public string? Protagonist { get; set; }
        [Column("director")]
        [StringLength(50)]
        [Unicode(false)]
        public string? Director { get; set; }
        [Column("producer")]
        [StringLength(50)]
        [Unicode(false)]
        public string? Producer { get; set; }
        [Column("gameplatform")]
        [StringLength(50)]
        [Unicode(false)]
        public string? Gameplatform { get; set; }
        [Column("releasedate", TypeName = "date")]
        public DateTime? Releasedate { get; set; }
        [Column("gamerental")]
        public double? Gamerental { get; set; }

        [InverseProperty("IdgameNavigation")]
        public virtual ICollection<Rental> Rentals { get; set; }
    }
}
