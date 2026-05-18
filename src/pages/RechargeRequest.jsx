import { useState } from "react";

function RechargeRequest() {

  const [amount, setAmount] = useState("");

  const agent = JSON.parse(
    localStorage.getItem("agent")
  );

  const submitRequest = async () => {

  if (!amount || Number(amount) <= 0) {

    alert("Enter valid amount");

    return;

  }

  try {

    const res = await fetch(
      "http://localhost:5000/agents/request-recharge",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          agentId: agent.id,
          amount
        })
      }
    );

    const data = await res.json();

    alert(data.message);

    setAmount("");

  } catch (err) {

    console.error(err);

    alert("Server error");

  }

};

  return (

    <div style={{ marginTop: 30 }}>

      <h2>Recharge Request</h2>

      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) =>
          setAmount(e.target.value)
        }
        style={{
          padding: 10,
          marginRight: 10
        }}
      />

      <button onClick={submitRequest}>
        Submit Request
      </button>

    </div>

  );

}

export default RechargeRequest;