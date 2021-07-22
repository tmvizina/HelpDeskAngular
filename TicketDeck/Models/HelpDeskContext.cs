using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace TicketDeck.Models
{
    public partial class HelpDeskContext : DbContext
    {
        public HelpDeskContext()
        {
        }

        public HelpDeskContext(DbContextOptions<HelpDeskContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Bookmarks> Bookmarks { get; set; }
        public virtual DbSet<Tickets> Tickets { get; set; }
        public virtual DbSet<User> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=.\\MSSQLSERVER01;Database=HelpDesk;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Bookmarks>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.PersonId).HasColumnName("PersonID");

                entity.Property(e => e.TicketId).HasColumnName("TicketID");

                entity.HasOne(d => d.Person)
                    .WithMany()
                    .HasForeignKey(d => d.PersonId)
                    .HasConstraintName("FK__Bookmarks__Perso__2B3F6F97");

                entity.HasOne(d => d.Ticket)
                    .WithMany()
                    .HasForeignKey(d => d.TicketId)
                    .HasConstraintName("FK__Bookmarks__Ticke__2C3393D0");
            });

            modelBuilder.Entity<Tickets>(entity =>
            {
                entity.Property(e => e.TicketId).HasColumnName("TicketID");

                entity.Property(e => e.Description)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Priotity)
                    .HasMaxLength(225)
                    .IsUnicode(false);

                entity.Property(e => e.Solution)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Title)
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
