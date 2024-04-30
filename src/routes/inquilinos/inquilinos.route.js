import { Router } from "express";
import { addInquilinos, getInqulinos } from "../../proveedorInformacion.js";

const rutaInquilinos = Router();

rutaInquilinos.get("/", async (request, response) => {
  try {
    response.json(await getInqulinos());
  } catch {
    response.sendStatus(500);
  }
});

rutaInquilinos.post("/", async (request, response) => {
  try {
    await addInquilinos(request.body);
    response.status(201).send("Inquilino añadido correctamente");
  } catch (e) {
    console.log(e);
    response.sendStatus(400);
  }
});

export default rutaInquilinos;
