namespace API.Entities
{
    public class Book
    {
        public int BookId { get; set; }
        public required string Title { get; set; }
        public required string Author { get; set; }
        public required float Price { get; set; }
        public required bool Ordered { get; set; }
        public int BookCategoryId { get; set; }
        public BookCategory? BookCategory { get; set; }
    }
}
