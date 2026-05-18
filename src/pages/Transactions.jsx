import { useEffect, useState } from "react";

function Transactions() {

  const [transactions, setTransactions] = useState([]);

  const loadTransactions = async () => {

    try {

      const res = await fetch(
        "http://localhost:5000/agents/transactions/1"
      );

      const data = await res.json();

      setTransactions(data);

    } catch (err) {
      console.error(err);
    }

  };

  useEffect(() => {
    loadTransactions();
  }, []);

  return (

    <div style={{ marginTop: 40 }}>

      <h2>Agent Transactions</h2>

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
            <th>Agent ID</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>

          {transactions.map((item) => (

            <tr key={item.id}>

              <td>{item.id}</td>

              <td>{item.agent_id}</td>

              <td>{item.type}</td>

              <td>{item.amount}</td>

              <td>
                {new Date(item.created_at).toLocaleString()}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default Transactions;