import express from "express";
import bodyParser from "body-parser";
// import path = require("path");

const app = express();

const PORT = "8000";

app.get("/", (req, res) => res.send("This is just the beginning..."));

app.listen(PORT, console.log(`Listening on PORT: ${PORT}`));
