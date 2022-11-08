using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace sophos_proyect.Models
{
    [Table("client")]
    public partial class Client
    {
        public Client()
        {
            Rentals = new HashSet<Rental>();
        }

        [Key]
        [Column("idclient")]
        public int Idclient { get; set; }
        [Column("clientname")]
        [StringLength(50)]
        [Unicode(false)]
        public string? Clientname { get; set; }
        [Column("telephone")]
        public int? Telephone { get; set; }
        [Column("email")]
        [StringLength(50)]
        [Unicode(false)]
        public string? Email { get; set; }
        [Column("age")]
        public int? Age { get; set; }
        [Column("clientaddress")]
        [StringLength(50)]
        [Unicode(false)]
        public string? Clientaddress { get; set; }
        [Column("indentificationcard")]
        public int? Indentificationcard { get; set; }

        [InverseProperty("IdclientNavigation")]
        public virtual ICollection<Rental> Rentals { get; set; }
    }
}
