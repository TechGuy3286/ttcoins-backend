import Header from "../components/Header";
import BottomNav from "../components/BottomNav";

function Transactions() {

  const transactions = [
    {
      id: 1,
      coins: 70,
      amount: 280,
      status: "Pending"
    },
    {
      id: 2,
      coins: 350,
      amount: 1400,
      status: "Approved"
    },
    {
      id: 3,
      coins: 5,
      amount: 20,
      status: "Rejected"
    }
  ];

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        paddingBottom: 100,
        fontFamily: "sans-serif"
      }}
    >

      {/* HEADER */}

      <Header
        title="Transactions"
      />

      {/* TRANSACTIONS */}

      <div
        style={{
          padding: 16
        }}
      >

        {transactions.map((item) => (

          <div
            key={item.id}
            style={{
              background: "#fff",
              borderRadius: 18,
              padding: 18,
              marginBottom: 14,
              boxShadow:
                "0 2px 8px rgba(0,0,0,0.04)"
            }}
          >

            {/* TOP */}

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >

              <div
                style={{
                  fontSize: 22,
                  fontWeight: "700"
                }}
              >
                🪙 {item.coins}
              </div>

              <div
                style={{
                  padding: "6px 14px",
                  borderRadius: 999,
                  fontSize: 13,
                  fontWeight: "700",
                  background:
                    item.status === "Approved"
                      ? "#d8f8df"
                      : item.status === "Rejected"
                      ? "#ffe0e0"
                      : "#fff2cc",
                  color:
                    item.status === "Approved"
                      ? "#15803d"
                      : item.status === "Rejected"
                      ? "#b91c1c"
                      : "#a16207"
                }}
              >
                {item.status}
              </div>

            </div>

            {/* PRICE */}

            <div
              style={{
                marginTop: 12,
                color: "#666",
                fontSize: 17
              }}
            >
              Amount: Rs {item.amount}
            </div>

          </div>

        ))}

      </div>

      {/* BOTTOM NAV */}

      <BottomNav />

    </div>

  );

}

export default Transactions;