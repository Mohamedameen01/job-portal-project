import express from "express";
import { engine } from "express-handlebars";
import path from "path";
import { fileURLToPath } from "url";

import mainRouter from "./modules/user/routes/mainRouter.js";

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
    defaultLayout: "index",
    layoutsDir: path.join(__dirname, "modules/user/views/layouts/"),
    partialsDir: path.join(__dirname, "modules/user/views/partials/"),
    helpers: {
      uppercase: function (str) {
        return str.toUpperCase();
      },
    },
  })
);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "modules/user/views/"));

app.use(express.json());
app.use("/", mainRouter);

// Makes the app to listen port
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
