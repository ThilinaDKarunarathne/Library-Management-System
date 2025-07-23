using API.Entities;

namespace API.Entities
{
    public class BookCategory
    {
        public int BookCategoryId { get; set; }
        public required string Category { get; set; }
        public required string SubCategory { get; set; }
    }
}
