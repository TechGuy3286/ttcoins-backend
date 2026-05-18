function Signup() {

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        padding: 24,
        display: "flex",
        flexDirection: "column"
      }}
    >

      {/* Header */}

      <div
        style={{
          textAlign: "center",
          marginTop: 30,
          marginBottom: 40
        }}
      >

        <h1
          style={{
            margin: 0,
            fontSize: 40,
            fontWeight: "700"
          }}
        >
          Sign Up
        </h1>

      </div>

      {/* Form */}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 18
        }}
      >

        <input
          type="text"
          placeholder="Enter exact username"
          style={inputStyle}
        />

        <input
          type="email"
          placeholder="Enter email"
          style={inputStyle}
        />

        <input
          type="tel"
          placeholder="Enter phone number"
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Enter password"
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Confirm password"
          style={inputStyle}
        />

      </div>

      {/* Signup Button */}

      <button
        onClick={() => {
          window.location.href = "/customer-login";
        }}
        style={{
          marginTop: 40,
          height: 58,
          borderRadius: 999,
          border: "none",
          background: "#ff1654",
          color: "#fff",
          fontSize: 24,
          fontWeight: "700"
        }}
      >
        Create Account
      </button>

      {/* Login Redirect */}

      <button
        onClick={() => {
          window.location.href = "/customer-login";
        }}
        style={{
          marginTop: 18,
          background: "transparent",
          border: "none",
          color: "#666",
          fontSize: 18
        }}
      >
        Already have an account? Login
      </button>

    </div>

  );

}

const inputStyle = {
  height: 58,
  borderRadius: 14,
  border: "1px solid #ddd",
  padding: "0 18px",
  fontSize: 18,
  background: "#fff",
  outline: "none"
};

export default Signup;