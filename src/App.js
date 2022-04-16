import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { createNewUser } from "./functions/user";
import {
  GoogleAuthProvider,
  signInWithPopup,
} from "@firebase/auth";
import {auth} from "./firebase";
function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlSubmit = () => {
    createNewUser(username, email);
  };
 // Google signin
 const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then(async (result) => {
      const idTokenResult = (await result.user.getIdTokenResult()).token;
      console.log("AUTHTOKEN==>>", idTokenResult);
      console.log("RESPONSE_EMAIL=>", result);
    })
    .catch((e) => console.log(e.message));
};

  return (
    <div className="App">
      <div>
        {/* my username is : {username}
        <br />
        my email is: {email}
        <br /> */}
        <input
          onChange={handleChangeUsername}
          type="text"
          placeholder="Username"
        />
        <input onChange={handleChangeEmail} type="text" placeholder="Email" />
        <button type="submit" onClick={handlSubmit}>
          Create User{" "}
        </button>
      </div>
      <button onClick={signInWithGoogle}>Login with google</button>
    </div>
  );
}

export default App;
