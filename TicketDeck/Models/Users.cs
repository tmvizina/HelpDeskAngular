using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace TicketDeck.Models
{
    public partial class Users
    {
        public Users()
        {
            Bookmarks = new HashSet<Bookmarks>();
        }

        public int UserId { get; set; }
        public string Name { get; set; }

        public virtual ICollection<Bookmarks> Bookmarks { get; set; }
    }
}
