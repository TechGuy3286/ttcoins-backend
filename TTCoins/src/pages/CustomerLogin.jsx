import { useNavigate } from "react-router-dom";

function CustomerLogin() {

  const navigate = useNavigate();

  const inputStyle = {
    width: "100%",
    height: 58,
    border: "none",
    borderRadius: 14,
    background: "#f1f1f1",
    paddingLeft: 18,
    fontSize: 18,
    outline: "none",
    marginTop: 14
  };

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#fff",
        fontFamily: "sans-serif",
        display: "flex",
        flexDirection: "column"
      }}
    >

      {/* TOP */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "22px 20px"
        }}
      >

        {/* BACK */}

        <div
          onClick={() => navigate("/profile")}
          style={{
            fontSize: 34,
            cursor: "pointer"
          }}
        >
          ←
        </div>

        {/* CLOSE */}

        <div
          style={{
            fontSize: 34,
            cursor: "pointer"
          }}
          onClick={() => navigate("/")}
        >
          ×
        </div>

      </div>

      {/* TITLE */}

      <h1
        style={{
          textAlign: "center",
          fontSize: 52,
          marginTop: 20,
          marginBottom: 30
        }}
      >
        Log in
      </h1>

      {/* FORM */}

      <div
        style={{
          padding: "0 22px"
        }}
      >

        <input
          placeholder="Email or Phone Number"
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Password"
          style={inputStyle}
        />

        {/* FORGOT */}

        <div
          style={{
            marginTop: 14,
            textAlign: "right",
            color: "#666",
            fontSize: 16,
            cursor: "pointer"
          }}
        >
          Forgot password?
        </div>

        {/* LOGIN */}

        <button
          style={{
            width: "100%",
            height: 60,
            border: "none",
            borderRadius: 14,
            background: "#ff1654",
            color: "#fff",
            fontSize: 24,
            fontWeight: 700,
            marginTop: 22,
            cursor: "pointer"
          }}
        >
          Login
        </button>

        {/* OR */}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: 34
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
              margin: "0 20px",
              color: "#888",
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

        <div
          style={{
            height: 62,
            background: "#f5f5f5",
            borderRadius: 14,
            display: "flex",
            alignItems: "center",
            position: "relative",
            marginTop: 26,
            fontWeight: 700,
            fontSize: 20,
            cursor: "pointer"
          }}
        >

          <div
            style={{
              position: "absolute",
              left: 24,
              fontSize: 24
            }}
          >
            ✉
          </div>

          <div
            style={{
              width: "100%",
              textAlign: "center"
            }}
          >
            Continue with Email
          </div>

        </div>

        {/* FACEBOOK */}

        <div
          style={{
            height: 62,
            background: "#f5f5f5",
            borderRadius: 14,
            display: "flex",
            alignItems: "center",
            position: "relative",
            marginTop: 18,
            fontWeight: 700,
            fontSize: 20
          }}
        >

          <div
            style={{
              position: "absolute",
              left: 18,
              width: 34,
              height: 34,
              borderRadius: "50%",
              background: "#1877f2",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: 700,
              fontSize: 24
            }}
          >
            f
          </div>

          <div
            style={{
              width: "100%",
              textAlign: "center"
            }}
          >
            Continue with Facebook
          </div>

        </div>

        {/* GOOGLE */}

        <div
          style={{
            height: 62,
            background: "#f5f5f5",
            borderRadius: 14,
            display: "flex",
            alignItems: "center",
            position: "relative",
            marginTop: 18,
            fontWeight: 700,
            fontSize: 20
          }}
        >

          <div
            style={{
              position: "absolute",
              left: 18,
              width: 34,
              height: 34,
              borderRadius: "50%",
              background: "#fff",
              border: "1px solid #ddd",
              color: "#4285f4",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: 700,
              fontSize: 24
            }}
          >
            G
          </div>

          <div
            style={{
              width: "100%",
              textAlign: "center"
            }}
          >
            Continue with Google
          </div>

        </div>

      </div>

      {/* FOOTER */}

      <div
        style={{
          marginTop: "auto",
          borderTop: "1px solid #eee",
          padding: 24,
          textAlign: "center",
          fontSize: 22
        }}
      >

        Don’t have an account?

        <span
          onClick={() => navigate("/signup")}
          style={{
            color: "#ff1654",
            marginLeft: 10,
            fontWeight: 700,
            cursor: "pointer"
          }}
        >
          Sign up
        </span>

      </div>

    </div>

  );

}

export default CustomerLogin;