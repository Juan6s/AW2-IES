import express from "express";
import cors from "cors";
import rutaHospedaje from "./routes/hospedaje/hospedaje.route.js";
import rutaInquilinos from "./routes/inquilinos/inquilinos.route.js";
import rutaReserva from "./routes/reserva/reserva.route.js";
import "dotenv/config.js";
import { connectDB } from "./config/database.js";

const app = express();

const port = process.env.PORT;

connectDB(process.env.MONGO_URI);

app.listen(port, () => {
  console.log(`Api a la escucha en el puerto: ${port}`);
});

app.get("/", function (request, response) {
  response.send(`JFCarrizo API ${process.env.npm_package_version}`);
});

app.use(express.json());
app.use(cors());

app.use("/hospedaje", rutaHospedaje);
app.use("/inquilinos", rutaInquilinos);
app.use("/reserva", rutaReserva);
