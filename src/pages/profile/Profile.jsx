import { auth } from "../../firebase-config";

const Profile = () => {
  console.log(auth.currentUser);
  const user = auth.currentUser;
  return (
    <div>
      <h1>Profile page</h1>
      <form action="">
        <input
          type="text"
          value={user.displayName ? user.displayName : "Username"}
          placeholder="Name surname"
        />
        <input
          type="text"
          value={user.email ? user.email : "Email"}
          placeholder="Email"
        />
        <input
          type="text"
          value={user.photoURL ? user.photoURL : "Fotoğraf"}
          placeholder="Email"
        />
      </form>
    </div>
  );
};

export default Profile;
