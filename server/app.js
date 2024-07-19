import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import dbConfig from "./config/db.js";

import userRouter from "./modules/user/routes/user.routes.js";
import userAuthRouter from "./modules/auth/routes/auth.routes.js";
import messageRouter from "./modules/jobmessages/routes/message.routes.js";

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

app.use("/user", userRouter);
app.use("/auth", userAuthRouter);
app.use("/user/message", messageRouter);

// Makes the app to listen port
dbConfig().then(() => {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});
