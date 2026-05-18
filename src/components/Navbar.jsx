export default function Navbar() {
  return (
    <div
      style={{
        height: "60px",
        background: "#111827",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
      }}
    >
      <h2>Coin Wallet</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <span>Home</span>
        <span>Wallet</span>
        <span>Bundles</span>
        <span>Settings</span>
      </div>
    </div>
  );
}