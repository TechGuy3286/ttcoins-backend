import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import BottomNav from "../components/BottomNav";

function Profile() {

  const navigate = useNavigate();

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        paddingBottom: 100,
        fontFamily: "sans-serif"
      }}
    >

      {/* HEADER */}

      <Header
        title="Profile"
        rightIcon="☰"
      />

      {/* CONTENT */}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: 40
        }}
      >

        {/* AVATAR */}

        <div
          style={{
            width: 110,
            height: 110,
            borderRadius: "50%",
            background: "#e5e5e5",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 52
          }}
        >
          👤
        </div>

        {/* TEXT */}

        <div
          style={{
            marginTop: 20,
            fontSize: 20,
            color: "#666"
          }}
        >
          Log into existing account
        </div>

        {/* LOGIN BUTTON */}

        <button
          onClick={() => navigate("/customer-login")}
          style={{
            width: "86%",
            height: 56,
            marginTop: 30,
            border: "none",
            borderRadius: 999,
            background: "#ff1654",
            color: "#fff",
            fontSize: 22,
            fontWeight: "700",
            cursor: "pointer"
          }}
        >
          Login
        </button>

        {/* SIGNUP BUTTON */}

        <button
          onClick={() => navigate("/signup")}
          style={{
            width: "86%",
            height: 56,
            marginTop: 16,
            borderRadius: 999,
            border: "2px solid #ff1654",
            background: "#fff",
            color: "#ff1654",
            fontSize: 22,
            fontWeight: "700",
            cursor: "pointer"
          }}
        >
          Sign Up
        </button>

      </div>

      {/* BOTTOM NAV */}

      <BottomNav />

    </div>

  );

}

export default Profile;