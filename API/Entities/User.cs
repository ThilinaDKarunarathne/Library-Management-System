namespace API.Entities
{
    public class User
    {
        public int UserId { get; set; }
        public required string FirstName { get; set; }
        public required string LastName { get; set; }
        public required string Email { get; set; }
        public required string Password { get; set; }
        public required string MobileNumber { get; set; }
        public DateTime CreatedOn { get; set; } = DateTime.Now;
        public UserType UserType { get; set; } = UserType.NONE;
        public AccountStatus AccountStatus { get; set; } = AccountStatus.UNAPROOVED;

    }

}