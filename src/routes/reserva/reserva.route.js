import { Router } from "express";
import { obtenerReservas } from "../../reserva/obtenerReserva.js";
import { crearReserva } from "../../reserva/crearReserva.js";
import { editarFechasReserva } from "../../reserva/editarReserva.js";
import { eliminarReserva } from "../../reserva/elimarReserva.js";

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
    response.status(201).send("Reserva añadido correctamente");
  } catch (e) {
    console.log(e);
    response.sendStatus(400);
  }
});

rutaReserva.put("/:id", async (request, response) => {
  try {
    await editarFechasReserva(Number(request.params.id), request.body);
    response.status(201).send("Reserva editada correctamente");
  } catch (e) {
    console.log(e);
    response.sendStatus(400);
  }
});

rutaReserva.delete("/:id", async (request, response) => {
  try {
    await eliminarReserva(request.params.id);
    response.status(200).send("Reserva eliminada");
  } catch (e) {
    console.log(e);
    response.sendStatus(400);
  }
});

export default rutaReserva;
