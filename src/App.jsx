import { useState } from "react";

import Profile from "./pages/Profile";
import Signup from "./Signup";
import CustomerLogin from "./pages/CustomerLogin";

function App() {

  const [screen, setScreen] = useState("profile");

  // PROFILE

  if (screen === "profile") {
    return (
      <Profile
        openLogin={() => setScreen("login")}
        openSignup={() => setScreen("signup")}
      />
    );
  }

  // LOGIN

  if (screen === "login") {
    return (
      <CustomerLogin
        goBack={() => setScreen("profile")}
      />
    );
  }

  // SIGNUP

  if (screen === "signup") {
    return (
      <Signup
        openLogin={() => setScreen("login")}
        goBack={() => setScreen("profile")}
      />
    );
  }

  return null;

}

export default App;