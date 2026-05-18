import { useState } from "react";

function CustomerLogin() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 24
      }}
    >

      <div
        style={{
          width: "100%",
          background: "#fff",
          padding: 24,
          borderRadius: 16
        }}
      >

        <h1
          style={{
            textAlign: "center",
            marginBottom: 30
          }}
        >
          Customer Login
        </h1>

        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />

        <button
          style={buttonStyle}
          onClick={() => {
            alert("Login Clicked");
          }}
        >
          Login
        </button>

      </div>

    </div>

  );

}

const inputStyle = {
  width: "100%",
  height: 56,
  borderRadius: 12,
  border: "1px solid #ddd",
  padding: "0 16px",
  marginBottom: 16,
  fontSize: 18,
  boxSizing: "border-box"
};

const buttonStyle = {
  width: "100%",
  height: 56,
  borderRadius: 12,
  border: "none",
  background: "#ff1654",
  color: "#fff",
  fontSize: 22,
  fontWeight: "700"
};

export default CustomerLogin;