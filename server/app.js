import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import dbConfig from "./config/db.js";

import employeeAuthRouter from "./modules/auth/routes/employeeRoutes.js";
import employerAuthRouter from "./modules/auth/routes/employerRoutes.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: "GET,POST,PATCH,DELETE",
    credentials: true,
  })
);

app.use("/auth", employeeAuthRouter);
app.use("/auth", employerAuthRouter);

// Makes the app to listen port
dbConfig().then(() => {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});
