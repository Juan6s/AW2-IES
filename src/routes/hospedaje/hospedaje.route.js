import { Router } from "express";
import { crearHospedaje } from "../../hospedaje/crearHospedaje.js";
import { obtenerHospedajes } from "../../hospedaje/obtenerHospedajes.js";

const rutaHospedaje = Router();

rutaHospedaje.get("/", async (request, response) => {
  try {
    response.json(await obtenerHospedajes());
  } catch (error) {
    console.log(error);
    response.sendStatus(500);
  }
});

rutaHospedaje.post("/", async (request, response) => {
  try {
    await crearHospedaje(request.body);
    response.status(201).send("Hospedaje añadido correctamente");
  } catch (error) {
    console.log(error);
    response.sendStatus(400);
  }
});

rutaHospedaje.get("/:id", async (request, response) => {
  try {
    const listaHospedajes = await obtenerHospedajes();
    const hospedaje = listaHospedajes.filter((hospedaje) => {
      return hospedaje.id === parseInt(request.params.id);
    });
    response.json(hospedaje);
  } catch {
    response.sendStatus(500);
  }
});

export default rutaHospedaje;
