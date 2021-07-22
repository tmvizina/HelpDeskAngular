using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace TicketDeck.Models
{
    public partial class Tickets
    {
        [Key]
        public int TicketId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public bool? Resolved { get; set; }
        public string Solution { get; set; }
        public string Priotity { get; set; }
    }
}
