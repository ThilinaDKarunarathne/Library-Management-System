namespace API.Entities
{
    public class Order
    {
        public int OrderId { get; set; }
        public int UserId { get; set; }
        public int BookId { get; set; }
        public DateTime OderDate { get; set; }
        public required bool Returned { get; set; }
        public DateTime? ReturnDate { get; set; }
        public int FinePaid { get; set; }

        public User? User { get; set; }
        public Book? Book { get; set; }
    }
}
