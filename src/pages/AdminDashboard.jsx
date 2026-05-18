import { useEffect, useState } from "react";

function AdminDashboard() {

  const [stats, setStats] = useState({
    totalCustomers: 0,
    totalAgents: 0,
    pendingOrders: 0,
    completedOrders: 0,
    rechargeRequests: 0
  });

  useEffect(() => {

    loadStats();

  }, []);

  const loadStats = async () => {

    try {

      const res = await fetch(
        "http://localhost:5000/admin/stats"
      );

      const data = await res.json();

      setStats(data);

    } catch (err) {

      console.log(err);

    }

  };

  return (

    <div style={{
      padding: 40
    }}>

      <h1>Admin Dashboard</h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 20,
        marginTop: 30
      }}>

        <div style={{
          border: "1px solid #ccc",
          padding: 20
        }}>
          <h3>Total Customers</h3>
          <h2>{stats.totalCustomers}</h2>
        </div>

        <div style={{
          border: "1px solid #ccc",
          padding: 20
        }}>
          <h3>Total Agents</h3>
          <h2>{stats.totalAgents}</h2>
        </div>

        <div style={{
          border: "1px solid #ccc",
          padding: 20
        }}>
          <h3>Pending Orders</h3>
          <h2>{stats.pendingOrders}</h2>
        </div>

        <div style={{
          border: "1px solid #ccc",
          padding: 20
        }}>
          <h3>Completed Orders</h3>
          <h2>{stats.completedOrders}</h2>
        </div>

        <div style={{
          border: "1px solid #ccc",
          padding: 20
        }}>
          <h3>Recharge Requests</h3>
          <h2>{stats.rechargeRequests}</h2>
        </div>

      </div>

    </div>

  );

}

export default AdminDashboard;