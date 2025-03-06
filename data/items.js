const path = require("path");
const fs = require("fs").promises;

const filePath = path.join(__dirname, "items.json");

async function getStoredItems() {
  try {
    const rawFileContent = await fs.readFile(filePath, { encoding: "utf-8" });
    const data = JSON.parse(rawFileContent);
    return data.items ?? [];
  } catch (error) {
    console.error("Error reading items.json:", error);
    return [];
  }
}

exports.getStoredItems = getStoredItems;
