import express from "express";
import { connectToDB } from "./connect_to_db.js";
const app = express();

const PORT = process.env.PORT || 3000;

connectToDB();
app.get("/", (req, res) => res.json({ message: "Hello from backend" }));
app.listen(4000, () => console.log("Welcome from backend"));
