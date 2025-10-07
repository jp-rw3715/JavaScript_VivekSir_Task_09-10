const dt = new Date();
const formatted = `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(
  2,
  "0"
)}-${String(dt.getDate()).padStart(2, "0")}`;
console.log(formatted); // e.g., 2025-10-07
