const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api/planes", async (req, res) => {
  try {
    const { data } = await axios.get("https://opensky-network.org/api/states/all");
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch flight data" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
