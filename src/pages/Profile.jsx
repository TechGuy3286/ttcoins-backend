function Profile({ openLogin, openSignup }) {

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        display: "flex",
        flexDirection: "column"
      }}
    >

      <div
        style={{
          height: 60,
          background: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderBottom: "1px solid #e5e5e5"
        }}
      >

        <h2
          style={{
            margin: 0,
            fontWeight: "700"
          }}
        >
          Profile
        </h2>

      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column"
        }}
      >

        <div style={{ fontSize: 90 }}>
          👤
        </div>

        <p
          style={{
            fontSize: 20,
            color: "#666",
            marginTop: 20
          }}
        >
          Log into existing account
        </p>

        {/* LOGIN */}

        <button
          onClick={openLogin}
          style={{
            marginTop: 30,
            width: "70%",
            height: 56,
            borderRadius: 999,
            border: "none",
            background: "#ff1654",
            color: "#fff",
            fontSize: 24,
            fontWeight: "700"
          }}
        >
          Login
        </button>

        {/* SIGNUP */}

        <button
          onClick={openSignup}
          style={{
            marginTop: 16,
            width: "70%",
            height: 56,
            borderRadius: 999,
            border: "2px solid #ff1654",
            background: "#fff",
            color: "#ff1654",
            fontSize: 22,
            fontWeight: "700"
          }}
        >
          Sign Up
        </button>

      </div>

    </div>

  );

}

export default Profile;