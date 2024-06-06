import express from "express";
import { engine } from "express-handlebars";
import path from 'path';
import { fileURLToPath } from 'url';

import mainRouter from "./routers/mainRouter.js";

const app = express();

const port = 3000;

// Construct __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set up Handlebars
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    defaultLayout: 'index',
    layoutsDir: __dirname + "/views/layouts/",
    partialsDir: __dirname + "/views/partials/",
  })
);
app.set("view engine", "hbs");
app.set("views", "./views");

app.use("/", mainRouter);

// Makes the app to listen port
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
