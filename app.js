const express = require("express");
const { getStoredItems } = require("./data/items");

const app = express();

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

// Export app for Vercel
module.exports = app;
