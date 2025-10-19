import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import authRoutes from "./modules/auth/auth.route.js";
import errorHandler from "./middleware/error.middleware.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/auth", authRoutes);
app.get("/api/health", (_, res) => res.json({ status: "ok" }));

app.use(errorHandler);

export default app;
