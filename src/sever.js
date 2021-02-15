import express from "express";
import path from "path";

const app = express();
const PORT = 3000;

app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "/assets")));

app.get("/", (rep, res) => {
  res.render("layouts/main");
});

app.listen(PORT, () => {
  console.log(`${PORT} SERVER START!>< `);
});
