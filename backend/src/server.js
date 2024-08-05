import express from "express";
import cookieParser from "cookie-parser";
import compress from "compression";
import cors from "cors";
import helmet from "helmet";
import { connectToDB } from "./connect_to_db.js";
import config from "./config/config.js";
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(compress());
app.use(cors());
app.use(helmet());
const PORT = config.port;
connectToDB();
app.get("/", (req, res) => res.json({ message: "Hello from backend" }));
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
