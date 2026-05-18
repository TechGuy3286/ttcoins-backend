import BottomNav from "../components/BottomNav";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function RechargePage() {

  const navigate = useNavigate();

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

  const [selectedBundle, setSelectedBundle] =
    useState(bundles[0]);

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
          borderRadius: 20,
          padding: 20,
          marginTop: 120
        }}
      >

        <h1
          style={{
            fontSize: 28,
            margin: 0,
            fontWeight: 800
          }}
        >
          Recharge offer
        </h1>

        <p
          style={{
            color: "#666",
            marginTop: 10,
            fontSize: 18,
            lineHeight: 1.4
          }}
        >
          Rewards are only available with
          cash recharge. Offer ends in 1 day.
        </p>

        {/* OFFER BOX */}

        <div
          style={{
            background: "#f7f7f7",
            borderRadius: 18,
            padding: 18,
            marginTop: 18
          }}
        >

          {/* FLOWER */}

          <div
            style={{
              display: "flex",
              marginBottom: 20
            }}
          >

            <div
              style={{
                fontSize: 42,
                marginRight: 16
              }}
            >
              🌹
            </div>

            <div>

              <div
                style={{
                  fontWeight: 700,
                  fontSize: 22
                }}
              >
                Get Rose ×3 in your Backpack
              </div>

              <div
                style={{
                  color: "#666",
                  marginTop: 6,
                  fontSize: 17,
                  lineHeight: 1.4
                }}
              >
                Get 1 now and the rest after
                24 hours each available for
                7 days
              </div>

            </div>

          </div>

          {/* COINS */}

          <div
            style={{
              display: "flex"
            }}
          >

            <div
              style={{
                fontSize: 42,
                marginRight: 16
              }}
            >
              🪙
            </div>

            <div>

              <div
                style={{
                  fontWeight: 700,
                  fontSize: 22
                }}
              >
                Get bonus Coins
              </div>

              <div
                style={{
                  color: "#666",
                  marginTop: 6,
                  fontSize: 17
                }}
              >
                Use Coins on virtual items
                such as Gifts
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* CARD 2 */}

      <div
        style={{
          background: "#fff",
          borderRadius: 20,
          padding: 20,
          marginTop: 20
        }}
      >

        <h2
          style={{
            margin: 0,
            fontSize: 28
          }}
        >
          Get Coins
          <span
            style={{
              color: "#ff1654",
              marginLeft: 10,
              fontSize: 18
            }}
          >
            (50% OFF)
          </span>
        </h2>

        <p
          style={{
            color: "#666",
            fontSize: 18,
            marginTop: 10
          }}
        >
          Recharge to get Gifts and
          bonus Coins.
        </p>

        {/* BUNDLES */}

        <div
          style={{
            display: "flex",
            gap: 12,
            marginTop: 20,
            overflowX: "auto"
          }}
        >

          {bundles.map((bundle, index) => (

            <div
              key={index}
              onClick={() => setSelectedBundle(bundle)}
              style={{
                minWidth: 120,
                borderRadius: 16,
                padding: 18,
                border:
                  selectedBundle.coins ===
                  bundle.coins
                    ? "3px solid #ff1654"
                    : "1px solid #ddd",
                background: "#fff",
                cursor: "pointer"
              }}
            >

              <div
                style={{
                  fontWeight: 700,
                  fontSize: 26
                }}
              >
                🪙 {bundle.coins}

                {bundle.bonus > 0 && (
                  <span
                    style={{
                      color: "#ff1654",
                      fontSize: 22
                    }}
                  >
                    +{bundle.bonus}
                  </span>
                )}

              </div>

              <div
                style={{
                  marginTop: 10,
                  color: "#666",
                  fontSize: 20
                }}
              >
                Rs {bundle.price}
              </div>

            </div>

          ))}

        </div>

      </div>

      {/* CARD 3 */}

      <div
        style={{
          marginTop: 28,
          color: "#666",
          fontSize: 18,
          lineHeight: 1.6,
          padding: "0 4px"
        }}
      >

        By continuing, you agree to the
        <b> Virtual Items Policy</b>. You
        will also lose the extra bonus if
        you withdraw from this purchase.

      </div>

      {/* CTA */}

      <button
        onClick={() => navigate("/profile")}
        style={{
          width: "100%",
          marginTop: 24,
          height: 60,
          border: "none",
          borderRadius: 18,
          background: "#ff1654",
          color: "#fff",
          fontSize: 24,
          fontWeight: 700
        }}
      >
        Get 🪙 {selectedBundle.coins}
        (Rs {selectedBundle.price})
      </button>

    <BottomNav />

  </div>
);

export default RechargePage;