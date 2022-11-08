using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace sophos_proyect.Models
{
    [Table("rentals")]
    public partial class Rental
    {
        [Key]
        [Column("idrental")]
        public int Idrental { get; set; }
        [Column("idclient")]
        public int? Idclient { get; set; }
        [Column("idgame")]
        public int? Idgame { get; set; }
        [Column("rentaldate", TypeName = "date")]
        public DateTime? Rentaldate { get; set; }
        [Column("rentaldelivery", TypeName = "date")]
        public DateTime? Rentaldelivery { get; set; }
        [Column("price")]
        public double? Price { get; set; }

        [ForeignKey("Idclient")]
        [InverseProperty("Rentals")]
        public virtual Client? IdclientNavigation { get; set; }
        [ForeignKey("Idgame")]
        [InverseProperty("Rentals")]
        public virtual Game? IdgameNavigation { get; set; }
    }
}
