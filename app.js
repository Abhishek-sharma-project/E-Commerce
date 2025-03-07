const express = require("express");
const cors = require("cors"); // Import CORS
const { getStoredItems } = require("./data/items");

const app = express();

app.use(cors());

app.get("/items", async (req, res) => {
  try {
    const items = await getStoredItems();
    res.json({ items });
  } catch (error) {
    res.status(500).json({ error: "Failed to load items" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
