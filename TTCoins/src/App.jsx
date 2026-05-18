import Wallet from "./pages/Wallet";
import Transactions from "./pages/Transactions";
import { Routes, Route } from "react-router-dom";

import RechargePage from "./pages/RechargePage";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import CustomerLogin from "./pages/CustomerLogin";

function App() {

  return (

    <div
      style={{
        background: "#111",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center"
      }}
    >

      {/* MOBILE CONTAINER */}

      <div
        style={{
          width: "100%",
          maxWidth: 430,
          minHeight: "100vh",
          background: "#fff",
          overflowX: "hidden",
          overflowY: "auto"
        }}
      >

        <Routes>
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/transactions" element={<Transactions />} />
          
          <Route
            path="/"
            element={<RechargePage />}
          />

          <Route
            path="/profile"
            element={<Profile />}
          />

          <Route
            path="/signup"
            element={<Signup />}
          />

          <Route
            path="/customer-login"
            element={<CustomerLogin />}
          />

        </Routes>

      </div>

    </div>

  );

}

export default App;