using System;
using System.Collections.Generic;

#nullable disable

namespace TicketDeck.Models
{
    public partial class Bookmarks
    {
        public int? PersonId { get; set; }
        public int? TicketId { get; set; }

        public virtual User Person { get; set; }
        public virtual Tickets Ticket { get; set; }
    }
}
