import express from "express";
import cookieParser from "cookie-parser";
import compress from "compression";
import cors from "cors";
import helmet from "helmet";
import { connectToDB } from "./connect_to_db.js";
import config from "./config/config.js";
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors({ origin: "*" }));
const PORT = config.port;
connectToDB();
app.get("/", (req, res) => res.json({ message: "Hello from backend" }));
app.use("/", userRoutes);
app.use("/", authRoutes);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// authorization middleware
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError")
    res.status(401).json({ error: err.name + ": " + err.message });
  else if (err) {
    res.status(400).json({ error: err.name + ": " + err.message });
    console.log(err);
  }

  next();
});
