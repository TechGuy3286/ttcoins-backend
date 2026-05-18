import Header from "../components/Header";
import BottomNav from "../components/BottomNav";

function Wallet() {

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
        title="Wallet"
      />

      {/* CONTENT */}

      <div
        style={{
          padding: 18
        }}
      >

        {/* BALANCE CARD */}

        <div
          style={{
            background: "#ff1654",
            borderRadius: 22,
            padding: 24,
            color: "#fff",
            boxShadow:
              "0 6px 20px rgba(255,22,84,0.25)"
          }}
        >

          <div
            style={{
              fontSize: 18,
              opacity: 0.9
            }}
          >
            Available Coins
          </div>

          <div
            style={{
              marginTop: 14,
              fontSize: 42,
              fontWeight: "700"
            }}
          >
            🪙 0
          </div>

        </div>

        {/* HISTORY */}

        <div
          style={{
            marginTop: 28,
            fontSize: 24,
            fontWeight: "700",
            color: "#111"
          }}
        >
          Wallet History
        </div>

        {/* EMPTY STATE */}

        <div
          style={{
            marginTop: 24,
            background: "#fff",
            borderRadius: 18,
            padding: 30,
            textAlign: "center",
            color: "#777",
            boxShadow:
              "0 2px 8px rgba(0,0,0,0.04)"
          }}
        >

          <div
            style={{
              fontSize: 48
            }}
          >
            💼
          </div>

          <div
            style={{
              marginTop: 14,
              fontSize: 18
            }}
          >
            No wallet activity yet
          </div>

        </div>

      </div>

      {/* BOTTOM NAV */}

      <BottomNav />

    </div>

  );

}

export default Wallet;