import { useState } from "react";

function AgentLogin() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    try {

      const res = await fetch(
        "http://localhost:5000/agents/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username,
            password
          })
        }
      );

      const data = await res.json();

      if (res.ok) {

        localStorage.setItem(
          "agent",
          JSON.stringify(data.agent)
        );

        alert("Login successful");

        window.location.href = "/agent-dashboard";

      } else {

        alert(data.error);

      }

    } catch (err) {

      console.error(err);

      alert("Server error");

    }

  };

  return (

    <div
      style={{
        width: 400,
        margin: "100px auto",
        padding: 30,
        border: "1px solid #ccc"
      }}
    >

      <h2>Agent Login</h2>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) =>
          setUsername(e.target.value)
        }
        style={{
          width: "100%",
          marginBottom: 15,
          padding: 10
        }}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
        style={{
          width: "100%",
          marginBottom: 15,
          padding: 10
        }}
      />

      <button
        onClick={handleLogin}
        style={{
          width: "100%",
          padding: 10
        }}
      >
        Login
      </button>

    </div>

  );

}

export default AgentLogin;