import DashboardLayout from "../components/DashboardLayout";
import { useEffect, useState } from "react";

function CustomerDashboard() {

  const customer = JSON.parse(
    localStorage.getItem("customer")
  );

  if (!customer) {

    window.location.href = "/customer-login";

    return null;

  }

  const [coins, setCoins] = useState(0);
  const [bucketAmount, setBucketAmount] = useState("");
  const [orders, setOrders] = useState([]);

  useEffect(() => {

    loadCustomer();
    loadOrders();

  }, []);

  const loadCustomer = async () => {

    try {

      const res = await fetch(
        `http://localhost:5000/customers/${customer.id}`
      );

      const data = await res.json();

      setCoins(data.coins);

    } catch (err) {

      console.error(err);

    }

  };

  const loadOrders = async () => {

    try {

      const res = await fetch(
        `http://localhost:5000/customers/orders/${customer.id}`
      );

      const data = await res.json();

      setOrders(data);

    } catch (err) {

      console.error(err);

    }

  };

  const createOrder = async () => {

    if (!bucketAmount) {

      alert("Enter bucket amount");

      return;

    }

    try {

      const res = await fetch(
        "http://localhost:5000/agents/create-order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            customerId: customer.id,
            bucketAmount
          })
        }
      );

      const data = await res.json();

      alert(data.message);

      setBucketAmount("");

      loadOrders();

    } catch (err) {

      console.error(err);

    }

  };

  return (

    <DashboardLayout>

    <div className="page-container">

      <div style={{
        padding: 40
      }}>

        <h1>Customer Dashboard</h1>

        <h3>
          Welcome, {customer.username}
        </h3>

        <h2>
          Coins: {coins}
        </h2>

        <div
  style={{
    display: "flex",
    gap: 20,
    marginTop: 30,
    marginBottom: 30
  }}
>

  <div className="card-box">

    <h3>Total Coins</h3>

    <h1>{coins}</h1>

  </div>

  <div className="card-box">

    <h3>Total Orders</h3>

    <h1>{orders.length}</h1>

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

        <div style={{
          marginTop: 30
        }}>

          <h3>Create Bucket Order</h3>

          <input
            type="number"
            placeholder="Bucket amount"
            value={bucketAmount}
            onChange={(e) =>
              setBucketAmount(e.target.value)
            }
            style={{
              padding: 10,
              marginRight: 10
            }}
          />

          <button
            className="primary-btn"
            onClick={createOrder}
          >
            Submit Order
          </button>

        </div>

        <div style={{
          marginTop: 40
        }}>

          <h3>My Orders</h3>

          <table
            border="1"
            cellPadding="10"
          >

            <thead>

              <tr>
                <th>ID</th>
                <th>Bucket</th>
                <th>Status</th>
                <th>Date</th>
              </tr>

            </thead>

            <tbody>

              {orders.map((item) => (

                <tr key={item.id}>

                  <td>{item.id}</td>

                  <td>{item.bucket_amount}</td>

                  <td>{item.status}</td>

                  <td>
                    {new Date(item.created_at)
                      .toLocaleString()}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

    </div>


    </div>

    </DashboardLayout>

  );

}

export default CustomerDashboard;