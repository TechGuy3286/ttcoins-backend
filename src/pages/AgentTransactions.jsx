import { useEffect, useState } from "react";

function AgentTransactions() {

  const [transactions, setTransactions] = useState([]);

  const agent = JSON.parse(
    localStorage.getItem("agent")
  );

  useEffect(() => {

    loadTransactions();

  }, []);

  const loadTransactions = async () => {

    try {

      const res = await fetch(
        `http://localhost:5000/agents/transactions/${agent.id}`
      );

      const data = await res.json();

      setTransactions(data);

    } catch (err) {

      console.error(err);

    }

  };

  return (

    <div style={{ marginTop: 30 }}>

      <h2>My Transactions</h2>

      <table border="1" cellPadding="10">

        <thead>
  <tr>
    <th>Date & Time</th>
    <th>Type</th>
    <th>Amount</th>
    </tr>
</thead>

        <tbody>

          {transactions.map((item) => (

            <tr key={item.id}>
              <td>
              {new Date(item.created_at).toLocaleString()}
              </td>
              <td>{item.type}</td>
              <td>{item.amount}</td>
                </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default AgentTransactions;