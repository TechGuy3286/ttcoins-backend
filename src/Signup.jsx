function Signup() {

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        display: "flex",
        flexDirection: "column"
      }}
    >

      {/* TOP */}

      <div
        style={{
          flex: 1,
          padding: "20px 24px"
        }}
      >

        {/* HEADER */}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >

          {/* QUESTION MARK */}

          <div
            style={{
              width: 42,
              height: 42,
              borderRadius: "50%",
              border: "2px solid #111",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 24,
              fontWeight: "700",
              color: "#111"
            }}
          >
            ?
          </div>

          {/* CLOSE */}

          <div
            onClick={() => {
              localStorage.setItem("screen", "profile");
              window.location.reload();
            }}
            style={{
              fontSize: 44,
              color: "#111",
              cursor: "pointer"
            }}
          >
            ×
          </div>

        </div>

        {/* TITLE */}

        <h1
          style={{
            marginTop: 40,
            textAlign: "center",
            fontSize: 52,
            fontWeight: "700",
            color: "#111"
          }}
        >
          Sign up
        </h1>

        {/* FORM */}

        <div
          style={{
            marginTop: 40,
            display: "flex",
            flexDirection: "column",
            gap: 12
          }}
        >

          <input
            type="text"
            placeholder="TikTok username"
            style={inputStyle}
          />

          <input
            type="email"
            placeholder="Email"
            style={inputStyle}
          />

          <input
            type="tel"
            placeholder="TikTok Password"
            style={inputStyle}
          />

          <input
            type="password"
            placeholder="Password"
            style={inputStyle}
          />

          <input
            type="password"
            placeholder="Confirm password"
            style={inputStyle}
          />

        </div>

        {/* CONTINUE BUTTON */}

        <button
          onClick={() => {
            
          }}
          style={{
            marginTop: 26,
            width: "100%",
            height: 58,
            borderRadius: 14,
            border: "none",
            background: "#ff1654",
            color: "#fff",
            fontSize: 28,
            fontWeight: "700"
          }}
        >
          Continue
        </button>

        {/* OR */}

        <div
          style={{
            marginTop: 28,
            display: "flex",
            alignItems: "center",
            gap: 14
          }}
        >

          <div
            style={{
              flex: 1,
              height: 1,
              background: "#ddd"
            }}
          />

          <div
            style={{
              color: "#777",
              fontSize: 20
            }}
          >
            or
          </div>

          <div
            style={{
              flex: 1,
              height: 1,
              background: "#ddd"
            }}
          />

        </div>

        {/* EMAIL */}

        <button style={socialButton}>

          <div style={iconLeft}>
            ✉
          </div>

          <div style={socialText}>
            Continue with Email
          </div>

        </button>

        {/* FACEBOOK */}

        <button style={socialButton}>

          <div
            style={{
              ...iconLeft,
              background: "#1877f2",
              color: "#fff",
              borderRadius: "50%",
              width: 34,
              height: 34,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "700",
              fontSize: 24
            }}
          >
            f
          </div>

          <div style={socialText}>
            Continue with Facebook
          </div>

        </button>

        {/* GOOGLE */}

        <button style={socialButton}>

          <div
            style={{
              ...iconLeft,
              background: "#fff",
              borderRadius: "50%",
              width: 34,
              height: 34,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "700",
              fontSize: 22,
              color: "#4285F4",
              border: "1px solid #ddd"
            }}
          >
            G
          </div>

          <div style={socialText}>
            Continue with Google
          </div>

        </button>

        {/* TERMS */}

        <p
          style={{
            marginTop: 40,
            textAlign: "center",
            color: "#777",
            fontSize: 16,
            lineHeight: 1.6
          }}
        >
          By continuing with an account located in Pakistan,
          you agree to our Terms of Service and acknowledge
          that you have read our Privacy Policy.
        </p>

      </div>

      {/* BOTTOM LOGIN */}

      <div
        style={{
          height: 70,
          background: "#ececec",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 20
        }}
      >

        <span style={{ color: "#666" }}>
          Already have an account?
        </span>

        <span
          onClick={() => {
            localStorage.setItem("screen", "login");
            window.location.reload();
          }}
          style={{
            marginLeft: 8,
            color: "#ff1654",
            fontWeight: "700",
            cursor: "pointer"
          }}
        >
          Log in
        </span>

      </div>

    </div>

  );

}

const inputStyle = {
  height: 56,
  borderRadius: 14,
  border: "none",
  background: "#ededed",
  padding: "0 18px",
  fontSize: 20,
  outline: "none",
  color: "#111"
};

const socialButton = {
  marginTop: 16,
  width: "100%",
  height: 58,
  borderRadius: 14,
  border: "none",
  background: "#ededed",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 21,
  fontWeight: "600",
  color: "#111"
};

const iconLeft = {
  position: "absolute",
  left: 18,
  fontSize: 22,
  color: "#111"
};

const socialText = {
  textAlign: "center"
};

export default Signup;