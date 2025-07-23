using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LibraryController : ControllerBase
    {
        public Context Context { get; }
        public LibraryController(Context context)
        {
            Context = context;
        }

        [HttpPost("register")]
        public async Task<ActionResult> Register(User user)
        {
            try
            {
                user.AccountStatus = AccountStatus.UNAPROOVED;
                user.UserType = UserType.STUDENT;
                user.CreatedOn = DateTime.Now;

                Context.Users.Add(user);
                var result = await Context.SaveChangesAsync();

                if (result > 0)
                {
                    return Ok(@"Thank you for registering.
                    Your account has been sent for approval.
                    Once it is approved, you will get an email" );
                }
                else
                {
                    return BadRequest(new { error = "Failed to register user." });
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { error = "An error occurred.", details = ex.Message });
            }
        }

    }
}
