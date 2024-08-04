import express from "express";
const app = express();
app.get("/", (req, res)=>res.json({message: "Hello from backend"}))
app.listen(4000, () => console.log("Socialize running on port 4000!"));
