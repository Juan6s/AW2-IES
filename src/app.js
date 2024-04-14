import express from "express";
import bodyParser from "body-parser";
import rutaHospedaje from "./routes/hospedaje.route.js";

const app = express();

const port = 3000;

app.listen(port, () => {
  console.log(`Api a la escucha en el puerto: ${port}`);
});

app.get("/", function (request, response) {
  response.send(`JFCarrizo API ${process.env.npm_package_version}`);
});

app.use(express.json());
app.use("/hospedaje", rutaHospedaje);
