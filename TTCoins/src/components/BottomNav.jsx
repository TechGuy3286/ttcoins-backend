import { useNavigate, useLocation } from "react-router-dom";

function BottomNav() {

  const navigate = useNavigate();
  const location = useLocation();

  const activeColor = "#ff1654";
  const inactiveColor = "#777";

  const itemStyle = (path) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 11,
    color:
      location.pathname === path
        ? activeColor
        : inactiveColor,
    cursor: "pointer",
    fontWeight:
      location.pathname === path
        ? "700"
        : "500"
  });

  return (

    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: 72,
        background: "#fff",
        borderTop: "1px solid #e8e8e8",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        zIndex: 9999,
        paddingBottom: 4
      }}
    >

      {/* HOME */}

      <div
        onClick={() => navigate("/")}
        style={itemStyle("/")}
      >

        <div style={{ fontSize: 22 }}>
          🏠
        </div>

        Recharge

      </div>

      {/* TRANSACTIONS */}

      <div
        onClick={() => navigate("/transactions")}
        style={itemStyle("/transactions")}
      >

        <div style={{ fontSize: 22 }}>
          📄
        </div>

        Transactions

      </div>

      {/* CENTER BUTTON */}

      <div
        style={{
          width: 58,
          height: 58,
          borderRadius: "50%",
          background: "#ff1654",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: 34,
          marginTop: -24,
          boxShadow:
            "0 6px 16px rgba(255,22,84,0.35)"
        }}
      >
        +
      </div>

      {/* WALLET */}

      <div
        onClick={() => navigate("/wallet")}
        style={itemStyle("/wallet")}
      >

        <div style={{ fontSize: 22 }}>
          💼
        </div>

        Wallet

      </div>

      {/* PROFILE */}

      <div
        onClick={() => navigate("/profile")}
        style={itemStyle("/profile")}
      >

        <div style={{ fontSize: 22 }}>
          👤
        </div>

        Profile

      </div>

    </div>

  );

}

export default BottomNav;