import { Router } from "express";
import { Housing } from "../../models/housing.js";
import { checkTokenMiddleware } from "../../middleware/auth.middleware.js";

const rutaHospedaje = Router();

rutaHospedaje.use(checkTokenMiddleware);

rutaHospedaje.get("/", async (request, response) => {
  try {
    response.json(await Housing.find({}));
  } catch (error) {
    console.log(error);
    response.status(500).json(error.toString());
  }
});

rutaHospedaje.post("/", async (request, response) => {
  try {
    await Housing.create(request.body);
    response.status(201).send("Hospedaje añadido correctamente");
  } catch (error) {
    response.status(400).send(error);
  }
});

rutaHospedaje.get("/:id", async (request, response) => {
  try {
    response.json(await Housing.findById(request.params.id));
  } catch {
    response.sendStatus(500);
  }
});

rutaHospedaje.put("/:id", async (request, response) => {
  try {
    await Housing.findByIdAndUpdate(request.params.id, request.body);
    response.status(201).send("Hospedaje editado correctamente");
  } catch (error) {
    console.log(error);
    response.status(400).send(error);
  }
});

export default rutaHospedaje;
