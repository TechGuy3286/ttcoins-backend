import { useEffect, useState } from "react";
import RechargeRequest from "./RechargeRequest";
import AgentTransactions from "./AgentTransactions";

function AgentDashboard() {

  const [agent, setAgent] = useState(
    JSON.parse(localStorage.getItem("agent"))
  );

  const [orders, setOrders] = useState([]);
  const [loadingId, setLoadingId] = useState(null);

  // PROTECT PAGE
  useEffect(() => {

    if (!agent) {
      window.location.href = "/agent-login";
    }

  }, []);

  // LOAD DATA
  useEffect(() => {

    if (!agent) {
      return;
    }

    loadAgent();
    loadOrders();

    const interval = setInterval(() => {

      loadAgent();
      loadOrders();

    }, 5000);

    return () => clearInterval(interval);

  }, []);

  const loadAgent = async () => {

    try {

      const res = await fetch(
        "http://localhost:5000/agents/all"
      );

      const data = await res.json();

      const updatedAgent = data.find(
        (a) => a.id === agent.id
      );

      if (updatedAgent) {

        setAgent(updatedAgent);

        localStorage.setItem(
          "agent",
          JSON.stringify(updatedAgent)
        );

      }

    } catch (err) {

      console.error(err);

    }

  };

  const loadOrders = async () => {

    try {

      const res = await fetch(
        "http://localhost:5000/agents/customer-orders"
      );

      const data = await res.json();

      setOrders(data);

    } catch (err) {

      console.error(err);

    }

  };

  const completeOrder = async (orderId) => {

    try {

      setLoadingId(orderId);

      const res = await fetch(
        "http://localhost:5000/agents/complete-order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            orderId,
            agentId: agent.id
          })
        }
      );

      const data = await res.json();

      alert(data.message || data.error);

      loadOrders();
      loadAgent();

    } catch (err) {

      console.error(err);

      alert("Server error");

    } finally {

      setLoadingId(null);

    }

  };

  // LOGOUT
  const logout = () => {

    localStorage.removeItem("agent");

    window.location.href = "/agent-login";

  };

  return (

    <div className="page-container">

      <h1>Agent Dashboard</h1>

      <button
        className="primary-btn"
        onClick={logout}
        style={{
          marginTop: 20,
          marginBottom: 20
        }}
      >
        Logout
      </button>

      <p>
        Welcome: {agent?.username}
      </p>

      <p>
        Balance: {agent?.balance}
      </p>

      {/* DASHBOARD CARDS */}

      <div
        style={{
          display: "flex",
          gap: 20,
          marginTop: 30,
          marginBottom: 30
        }}
      >

        <div className="card-box">

          <h3>Current Balance</h3>

          <h1>{agent?.balance}</h1>

        </div>

        <div className="card-box">

          <h3>Pending Orders</h3>

          <h1>
            {
              orders.filter(
                (item) =>
                  item.status !== "completed"
              ).length
            }
          </h1>

        </div>

        <div className="card-box">

          <h3>Completed Orders</h3>

          <h1>
            {
              orders.filter(
                (item) =>
                  item.status === "completed"
              ).length
            }
          </h1>

        </div>

      </div>

      {/* ORDERS TABLE */}

      <div style={{ marginTop: 40 }}>

        <h2>Pending Orders</h2>

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
              <th>Customer</th>
              <th>Bucket Amount</th>
              <th>Status</th>
              <th>Action</th>
            </tr>

          </thead>

          <tbody>

            {orders.map((item) => (

              <tr key={item.id}>

                <td>{item.id}</td>

                <td>{item.username}</td>

                <td>{item.bucket_amount}</td>

                <td>{item.status}</td>

                <td>

                  {item.status === "completed" ? (

                    <button disabled>
                      Completed
                    </button>

                  ) : (

                    <button
                      className="primary-btn"
                      onClick={() =>
                        completeOrder(item.id)
                      }
                      disabled={
                        loadingId === item.id
                      }
                    >
                      {
                        loadingId === item.id
                          ? "Processing..."
                          : "Complete Order"
                      }
                    </button>

                  )}

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      <AgentTransactions />

      <RechargeRequest />

    </div>

  );

}

export default AgentDashboard;