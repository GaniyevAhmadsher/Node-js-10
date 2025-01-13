import express from "express";
import AllRoutes from "./routes/routes.js";

const app = express();

app.use(express.json());
app.use("/api", ...AllRoutes());

const _port_ = 4040;
app.listen(_port_, () => {
  console.log(`Server is running http://localhost:${_port_}`);
});
