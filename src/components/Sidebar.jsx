import { Link, useLocation } from "react-router-dom";

function Sidebar() {

  const location = useLocation();

  const menus = [
    {
      name: "Orders",
      path: "/orders"
    },
    {
      name: "Agent Dashboard",
      path: "/agent-dashboard"
    },
    {
      name: "Customer Dashboard",
      path: "/customer-dashboard"
    }
  ];

  return (

    <div
      style={{
        width: 250,
        background: "#111827",
        color: "white",
        minHeight: "100vh",
        padding: 20
      }}
    >

      <h2 style={{
        marginBottom: 30
      }}>
        Coin Wallet
      </h2>

      {menus.map((menu) => (

        <Link
          key={menu.path}
          to={menu.path}
          style={{
            display: "block",
            padding: 12,
            marginBottom: 10,
            borderRadius: 8,
            background:
              location.pathname === menu.path
                ? "#2563eb"
                : "transparent",
            color: "white"
          }}
        >

          {menu.name}

        </Link>

      ))}

    </div>

  );

}

export default Sidebar;