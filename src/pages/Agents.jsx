import { useEffect, useState } from "react";

function Agents() {

  const [agents, setAgents] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // load agents
  const loadAgents = async () => {

    try {

      const res = await fetch("http://localhost:5000/agents/all");

      const data = await res.json();

      setAgents(data);

    } catch (err) {
      console.error(err);
    }

  };

  // create agent
  const createAgent = async () => {

    if (!username || !password) {
      alert("Enter username and password");
      return;
    }

    try {

      const res = await fetch(
        "http://localhost:5000/agents/create",
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

      alert(data.message);

      setUsername("");
      setPassword("");

      loadAgents();

    } catch (err) {
      console.error(err);
    }

  };

  // toggle status
  const toggleStatus = async (agent) => {

    const newStatus =
      agent.status === "active"
        ? "disabled"
        : "active";

    try {

      const res = await fetch(
        "http://localhost:5000/agents/toggle-status",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            agentId: agent.id,
            status: newStatus
          })
        }
      );

      const data = await res.json();

      alert(data.message);

      loadAgents();

    } catch (err) {
      console.error(err);
    }

  };

  useEffect(() => {
    loadAgents();
  }, []);

const updateBalance = async (agentId, amount, type) => {

  await fetch("http://localhost:5000/agents/update-balance", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      agentId,
      amount,
      type
    })
  });

  loadAgents();

};


  return (

    <div style={{ padding: 20 }}>

      <h2>Agent Management</h2>

      {/* CREATE AGENT */}

      <div style={{
        marginBottom: 20,
        display: "flex",
        gap: 10
      }}>

        <input
          placeholder="Username"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button onClick={createAgent}>
          Create Agent
        </button>

      </div>

      {/* AGENT LIST */}

      <table
        border="1"
        cellPadding="10"
        style={{
          width: "100%",
          borderCollapse: "collapse"
        }}
      >

        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Status</th>
            <th>Balance</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {agents.map((agent) => (

            <tr key={agent.id}>

              <td>{agent.id}</td>

              <td>{agent.username}</td>

              <td>{agent.status}</td>

              <td>{agent.balance}</td>

              <td>

  <button
    onClick={() =>
      toggleStatus(agent)
    }
  >
    {agent.status === "active"
      ? "Disable"
      : "Enable"}
  </button>

  <button
    onClick={() =>
      updateBalance(agent.id, 100, "add")
    }
    style={{ marginLeft: 10 }}
  >
    +100
  </button>

  <button
    onClick={() =>
      updateBalance(agent.id, 100, "deduct")
    }
    style={{ marginLeft: 10 }}
  >
    -100
  </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default Agents;