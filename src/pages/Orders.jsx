import DashboardLayout from "../components/DashboardLayout";
import { useEffect, useState } from "react";

function Orders() {

  const [orders, setOrders] = useState([]);
  const [loadingId, setLoadingId] = useState(null);

  useEffect(() => {
    loadOrders();
  }, []);

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
            agentId: 1
          })
        }
      );

      const data = await res.json();

      alert(data.message || data.error);

      loadOrders();

    } catch (err) {

      console.error(err);

      alert("Server error");

    } finally {

      setLoadingId(null);

    }

  };

    return (

    <DashboardLayout>

    <div className="page-container">

      <div style={{ marginTop: 30 }}>

        <h2>Customer Orders</h2>

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
              <th>Date</th>
              <th>Action</th>
            </tr>

          </thead>

          <tbody>

            {orders.map((item) => (

              <tr key={item.id}>

                <td>{item.id}</td>

                <td>{item.username}</td>

                <td>{item.bucket_amount}</td>

                <td>
                  {item.status || "pending"}
                </td>

                <td>
                  {new Date(item.created_at)
                    .toLocaleString()}
                </td>

                <td>

                  {item.status === "completed" ? (

                    <button
                      disabled
                      className="disabled-btn"
                    >
                      Completed
                    </button>

                  ) : (

                    <button className="primary-btn"
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


    </div>

  </DashboardLayout>

);

}

export default Orders;