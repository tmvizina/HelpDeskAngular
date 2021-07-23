using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

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
        public virtual DbSet<Users> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=.\\SQLExpress;Database=HelpDesk;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Bookmarks>(entity =>
            {
                entity.HasKey(e => e.BookmarkId)

                    .HasName("PK__Bookmark__541A3A91FCDB9F8E");

                entity.Property(e => e.BookmarkId).HasColumnName("BookmarkID");

                entity.Property(e => e.PersonId).HasColumnName("PersonID");

                entity.Property(e => e.TicketId).HasColumnName("TicketID");

                entity.HasOne(d => d.Person)
                    .WithMany(p => p.Bookmarks)
                    .HasForeignKey(d => d.PersonId)

                    .HasConstraintName("FK__Bookmarks__Perso__49C3F6B7");


                entity.HasOne(d => d.Ticket)
                    .WithMany(p => p.Bookmarks)
                    .HasForeignKey(d => d.TicketId)

                    .HasConstraintName("FK__Bookmarks__Ticke__4AB81AF0");

            });

            modelBuilder.Entity<Tickets>(entity =>
            {
                entity.HasKey(e => e.TicketId);

                entity.Property(e => e.TicketId).HasColumnName("TicketID");

                entity.Property(e => e.Description)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Priority)
                    .HasMaxLength(225)
                    .IsUnicode(false);

                entity.Property(e => e.Solution)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Title)
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Users>(entity =>
            {
                entity.HasKey(e => e.UserId);

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
