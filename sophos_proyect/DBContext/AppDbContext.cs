using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using sophos_proyect.Models;

namespace sophos_proyect.DBContext
{
    public partial class AppDbContext : DbContext
    {
        public AppDbContext()
        {
        }

        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Client> Clients { get; set; } = null!;
        public virtual DbSet<Game> Games { get; set; } = null!;
        public virtual DbSet<Rental> Rentals { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=DESKTOP-6QMPC7J\\SQLEXPRESS;Initial Catalog=GamesRental;Integrated Security=True");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Client>(entity =>
            {
                entity.HasKey(e => e.Idclient)
                    .HasName("PK__client__131FFA559AFB092D");
            });

            modelBuilder.Entity<Game>(entity =>
            {
                entity.HasKey(e => e.Idgame)
                    .HasName("PK__game__1F4C2EBD024690CE");
            });

            modelBuilder.Entity<Rental>(entity =>
            {
                entity.HasKey(e => e.Idrental)
                    .HasName("PK__rentals__264C5174088FD856");

                entity.HasOne(d => d.IdclientNavigation)
                    .WithMany(p => p.Rentals)
                    .HasForeignKey(d => d.Idclient)
                    .HasConstraintName("FK__rentals__price__403A8C7D");

                entity.HasOne(d => d.IdgameNavigation)
                    .WithMany(p => p.Rentals)
                    .HasForeignKey(d => d.Idgame)
                    .HasConstraintName("FK__rentals__idgame__412EB0B6");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
