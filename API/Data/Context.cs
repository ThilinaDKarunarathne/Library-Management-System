using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class Context(DbContextOptions option) : DbContext(option)
    {
        public DbSet<User> Users { get; set; }
        public DbSet<BookCategory> BookCategories { get; set; }
        public DbSet<Book> Books { get; set; }
        public DbSet<Order> Orders { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().HasData(new User()
            {
                UserId = 1,
                FirstName = "Admin",
                LastName = "",
                Email = "admin@gmail.com",
                MobileNumber = "1234567890",
                AccountStatus = AccountStatus.ACTIVE,
                UserType = UserType.ADMIN,
                Password = "admin2001",
                CreatedOn = new DateTime(2025, 07, 23, 08, 53, 00)
            });
        }

        protected override void ConfigureConventions(ModelConfigurationBuilder configurationBuilder)
        {
            configurationBuilder.Properties<UserType>().HaveConversion<string>();
            configurationBuilder.Properties<AccountStatus>().HaveConversion<string>();

        }
    }
}
