require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 7000;
const connectToDB = require("./DB/connection.js");
connectToDB();
const history = require("./Schemas/history.schema.js");

app.get("/", (req, res) => {
    res.send("Welcome to Aurore✨!");
});

app.get("/history", async(req, res) => {
    try {
      const spaceHistory = await history.findOne();
      if (!spaceHistory) {
        throw new Error("No history found.");
      }
      res.send(spaceHistory.history);
    } catch (error) {
      console.error("Error : ", error.message);
      res.status(500).send("Internal Server Error");
    }   
  });

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
