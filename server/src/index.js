require("express-async-errors");
const express = require("express");
const app = express();
const routes = require("./routes");
const cors = require("./app/middlewares/cors");

app.use(cors);
app.use(express.json());
app.use(routes);
app.listen(8080, () =>
  console.log("🔥 Server started at http://localhost:8080")
);
