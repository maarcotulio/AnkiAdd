const { WEB_SITE_URL } = require("../../config/server");
require("express-async-errors");
const express = require("express");
const app = express();
const routes = require("./routes");
const cors = require("cors");
const corsOptions = {
  origin: [WEB_SITE_URL],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(routes);
app.listen(8080, () =>
  console.log("🔥 Server started at http://localhost:8080")
);
