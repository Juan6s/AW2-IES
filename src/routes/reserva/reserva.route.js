import { Router } from "express";
import { obtenerReservas } from "../../reserva/obtenerReserva.js";
import { crearReserva } from "../../reserva/crearReserva.js";
import { editarFechasReserva } from "../../reserva/editarReserva.js";
import { eliminarReserva } from "../../reserva/elimarReserva.js";
import { Booking } from "../../models/booking.js";

const rutaReserva = Router();

rutaReserva.get("/", async (request, response) => {
  try {
    response.json(await Booking.find({}));
  } catch {
    response.sendStatus(500);
  }
});

rutaReserva.post("/", async (request, response) => {
  try {
    await Booking.create(request.body);
    response.status(201).send("Reserva añadido correctamente");
  } catch (e) {
    console.log(e);
    response.sendStatus(400);
  }
});

rutaReserva.put("/:id", async (request, response) => {
  try {
    await Booking.findByIdAndUpdate(request.params.id, request.body);
    response.status(201).send("Reserva editada correctamente");
  } catch (error) {
    response.status(400).send(error);
  }
});

rutaReserva.delete("/:id", async (request, response) => {
  try {
    await Booking.findByIdAndDelete(request.params.id);
    response.status(200).send("Reserva eliminada");
  } catch (error) {
    console.log(error);
    response.status(400).send(error);
  }
});

export default rutaReserva;
