import { Router } from "express";
import { crearInquilino } from "../../inquilino/crearInquilino.js";
import { obtenerInqulinos } from "../../inquilino/obtenerInquilinos.js";

const rutaInquilinos = Router();

rutaInquilinos.get("/", async (request, response) => {
  try {
    response.json(await obtenerInqulinos());
  } catch {
    response.sendStatus(500);
  }
});

rutaInquilinos.post("/", async (request, response) => {
  try {
    await crearInquilino(request.body);
    response.status(201).send("Inquilino añadido correctamente");
  } catch (e) {
    console.log(e);
    response.sendStatus(400);
  }
});

export default rutaInquilinos;
