using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace TicketDeck.Models
{
    public partial class Bookmarks
    {
        public int BookmarkId { get; set; }
        public int? PersonId { get; set; }
        public int? TicketId { get; set; }

        public virtual Users Person { get; set; }
        public virtual Tickets Ticket { get; set; }
    }
}
