import { Router } from "express";
import { addReserva, getReservas } from "../../proveedorInformacion.js";

const rutaReserva = Router();

rutaReserva.get("/", async (request, response) => {
  try {
    response.json(await getReservas());
  } catch {
    response.sendStatus(500);
  }
});

rutaReserva.post("/", async (request, response) => {
  try {
    await addReserva(request.body);
    response.status(201).send("Hospedaje añadido correctamente");
  } catch (e) {
    console.log(e);
    response.sendStatus(400);
  }
});

export default rutaReserva;
