import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CustomerLogin() {

  const navigate = useNavigate();

  const [selectedBundle, setSelectedBundle] = useState({
    coins: 5,
    price: 20,
    bonus: 0
  });

  const bundles = [
    {
      coins: 5,
      price: 20,
      bonus: 0
    },
    {
      coins: 70,
      price: 280,
      bonus: 47
    },
    {
      coins: 350,
      price: 1400,
      bonus: 350
    }
  ];

  const proceedToLogin = () => {
  window.location.href = "/";
};

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f6f6f6",
        padding: "20px 14px 40px",
        fontFamily: "sans-serif"
      }}
    >

      {/* CARD 1 */}

      <div
        style={{
          background: "#fff",
          borderRadius: 22,
          padding: 22,
          marginTop: 30,
          boxShadow: "0 2px 10px rgba(0,0,0,0.04)"
        }}
      >

        <h1
          style={{
            margin: 0,
            fontSize: 34,
            fontWeight: 800
          }}
        >
          Recharge offer
        </h1>

        <p
          style={{
            color: "#666",
            fontSize: 18,
            lineHeight: 1.5,
            marginTop: 10
          }}
        >
          Rewards are only available with cash recharge.
          Offer ends in 1 day.
        </p>

        <div
          style={{
            background: "#fafafa",
            borderRadius: 20,
            padding: 20,
            marginTop: 25
          }}
        >

          {/* FLOWER */}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: 28
            }}
          >

            <div style={{ fontSize: 62 }}>
              🌹
            </div>

            <div style={{ marginLeft: 18 }}>
              <div
                style={{
                  fontSize: 18,
                  fontWeight: 700
                }}
              >
                Get Rose ×3 in your Backpack
              </div>

              <div
                style={{
                  color: "#666",
                  marginTop: 8,
                  lineHeight: 1.4
                }}
              >
                Get 1 now and the rest after 24 hours,
                each available for 7 days
              </div>
            </div>

          </div>

          {/* COIN */}

          <div
            style={{
              display: "flex",
              alignItems: "center"
            }}
          >

            <div style={{ fontSize: 58 }}>
              🪙
            </div>

            <div style={{ marginLeft: 18 }}>
              <div
                style={{
                  fontSize: 18,
                  fontWeight: 700
                }}
              >
                Get bonus Coins
              </div>

              <div
                style={{
                  color: "#666",
                  marginTop: 8
                }}
              >
                Use Coins on virtual items such as Gifts
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* CARD 2 */}

      <div
        style={{
          background: "#fff",
          borderRadius: 22,
          padding: 22,
          marginTop: 22,
          boxShadow: "0 2px 10px rgba(0,0,0,0.04)"
        }}
      >

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10
          }}
        >

          <h2
            style={{
              margin: 0,
              fontSize: 28,
              fontWeight: 800
            }}
          >
            Recharge offer
          </h2>

          <span
            style={{
              color: "#ff2d6f",
              fontWeight: 800,
              fontSize: 24
            }}
          >
            (50% OFF)
          </span>

        </div>

        <p
          style={{
            color: "#666",
            fontSize: 18,
            marginTop: 10
          }}
        >
          Recharge to get Gifts and bonus Coins.
        </p>

        <div
          style={{
            display: "flex",
            gap: 14,
            marginTop: 20,
            overflowX: "auto"
          }}
        >

          {bundles.map((bundle, index) => {

            const active =
              selectedBundle.coins === bundle.coins;

            return (
              <div
                key={index}
                onClick={() =>
                  setSelectedBundle(bundle)
                }
                style={{
                  minWidth: 120,
                  padding: 22,
                  borderRadius: 18,
                  background: active
                    ? "#fff1f5"
                    : "#fff",
                  border: active
                    ? "2px solid #ff2d6f"
                    : "1px solid #ddd",
                  cursor: "pointer",
                  textAlign: "center"
                }}
              >

                <div
                  style={{
                    fontSize: 18,
                    fontWeight: 700
                  }}
                >
                  🪙 {bundle.coins}

                  {bundle.bonus > 0 && (
                    <span
                      style={{
                        color: "#ff2d6f"
                      }}
                    >
                      +{bundle.bonus}
                    </span>
                  )}
                </div>

                <div
                  style={{
                    marginTop: 12,
                    color: "#666",
                    fontSize: 18
                  }}
                >
                  Rs {bundle.price}
                </div>

              </div>
            );

          })}

        </div>

      </div>

      {/* CARD 3 */}

      <div
        style={{
          background: "#fff",
          borderRadius: 22,
          padding: 22,
          marginTop: 22,
          boxShadow: "0 2px 10px rgba(0,0,0,0.04)"
        }}
      >

        <p
          style={{
            color: "#555",
            fontSize: 18,
            lineHeight: 1.6,
            marginBottom: 26
          }}
        >
          By continuing, you agree to the{" "}
          <strong>
            Virtual Items Policy
          </strong>.
          You will also lose the extra bonus if you
          withdraw from this purchase.
        </p>

        <button
          onClick={proceedToLogin}
          style={{
            width: "100%",
            background: "#ff2d6f",
            color: "#fff",
            border: "none",
            borderRadius: 16,
            padding: "18px 14px",
            fontSize: 22,
            fontWeight: 700,
            cursor: "pointer"
          }}
        >
          Get 🪙 {selectedBundle.coins}

          {selectedBundle.bonus > 0 &&
            `+${selectedBundle.bonus}`}

          {" "} (Rs {selectedBundle.price})
        </button>

      </div>

    </div>
  );

}

export default CustomerLogin;