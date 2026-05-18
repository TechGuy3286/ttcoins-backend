const BASE_URL = "http://localhost:5000";
// GET TOPUPS
export const getTopups = async () => {
  const res = await fetch(`${BASE_URL}/topup/all`);
  return res.json();
};

// APPROVE
export const approveTopup = async (data) => {
  await fetch(`${BASE_URL}/admin/approve`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: "Bearer " + localStorage.getItem("token") },
    body: JSON.stringify(data),
  });
};

// TOGGLE
export const toggleSystem = async (status) => {
  await fetch(`${BASE_URL}/settings/toggle-topup`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: "Bearer " + localStorage.getItem("token") },
    body: JSON.stringify({ status }),
  });
};

// GET STATUS
export const getStatus = async () => {
  const res = await fetch(`${BASE_URL}/settings/status`);
  return res.json();
};