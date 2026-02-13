// app.js
const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => res.send("iMatter API is live ✅"));
app.get("/health", (req, res) => res.json({ ok: true, ts: Date.now() }));

const PORT = process.env.PORT || 3000; // cPanel provides PORT automatically
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
