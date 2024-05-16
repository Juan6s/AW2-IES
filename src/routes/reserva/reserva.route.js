import { Router } from "express";
import { obtenerReservas } from "../../reserva/obtenerReserva.js";
import { crearReserva } from "../../reserva/crearReserva.js";

const rutaReserva = Router();

rutaReserva.get("/", async (request, response) => {
  try {
    response.json(await obtenerReservas());
  } catch {
    response.sendStatus(500);
  }
});

rutaReserva.post("/", async (request, response) => {
  try {
    await crearReserva(request.body);
    response.status(201).send("Hospedaje añadido correctamente");
  } catch (e) {
    console.log(e);
    response.sendStatus(400);
  }
});

export default rutaReserva;
