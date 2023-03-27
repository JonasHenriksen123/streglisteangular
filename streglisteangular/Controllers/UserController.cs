using Google.Cloud.Firestore;
using Microsoft.AspNetCore.Mvc;

namespace streglisteangular.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {

        [HttpGet]
        public async Task<IEnumerable<User>> Get()
        {
            var db = FirestoreDb.Create("sukkeregern-stregliste-277311");
            return (await db.Collection("users").GetSnapshotAsync()).Documents.Select(user =>
            {
                return new User { Name = user.GetValue<string>("navn"), Lines = user.GetValue<long>("streger") };
            });
        }

        [HttpPut]
        public async Task<User> Put(User user)
        {
            var db = FirestoreDb.Create("sukkeregern-stregliste-277311");
            await db.Collection("users").Document(user.Name!).UpdateAsync("streger", user.Lines);
            return user;
        }

        [HttpPost]
        public async Task<User> Post(User user)
        {
            var db = FirestoreDb.Create("sukkeregern-stregliste-277311");
            await db.Collection("users").Document(user.Name).SetAsync(user);
            return user;
        }
    }
}
