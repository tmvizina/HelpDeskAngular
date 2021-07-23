﻿using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace TicketDeck.Models
{
    public partial class Tickets
    {
        public Tickets()
        {
            Bookmarks = new HashSet<Bookmarks>();
        }

        public int TicketId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public bool? Resolved { get; set; }
        public string Solution { get; set; }
        public string Priority { get; set; }

        public virtual ICollection<Bookmarks> Bookmarks { get; set; }
    }
}
