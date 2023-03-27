using Google.Cloud.Firestore;

namespace streglisteangular
{
    [FirestoreData]
    public class User
    {
        [FirestoreProperty("navn")]
        public string? Name { get; set; }

        [FirestoreProperty("streger")]
        public long Lines { get; set; }
    }
}
