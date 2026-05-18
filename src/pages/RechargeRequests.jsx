import { useEffect, useState } from "react";

function RechargeRequests() {

  const [requests, setRequests] = useState([]);

  useEffect(() => {
    loadRequests();
  }, []);

  const loadRequests = async () => {

    try {

      const res = await fetch(
        "http://localhost:5000/agents/recharge-requests"
      );

      const data = await res.json();

      setRequests(data);

    } catch (err) {

      console.error(err);

    }

  };

const approveRequest = async (item) => {

  try {

    // ADD BALANCE

    await fetch(
      "http://localhost:5000/agents/update-balance",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          agentId: item.agent_id,
          amount: item.amount,
          type: "add"
        })
      }
    );

    // UPDATE REQUEST STATUS

    await fetch(
      "http://localhost:5000/agents/approve-recharge",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          requestId: item.id
        })
      }
    );

    alert("Balance added");

    loadRequests();

  } catch (err) {

    console.error(err);

  }

};

  return (

    <div style={{ marginTop: 30 }}>

      <h2>Recharge Requests</h2>

      <table border="1" cellPadding="10">

        <thead>
          <tr>
            <th>ID</th>
            <th>Agent ID</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {requests.map((item) => (

            <tr key={item.id}>

              <td>{item.id}</td>

              <td>{item.agent_id}</td>

              <td>{item.amount}</td>

              <td>{item.status}</td>

              <td>

  <button
    onClick={() =>
      approveRequest(item)
    }
  >
    Approve
  </button>

</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default RechargeRequests;