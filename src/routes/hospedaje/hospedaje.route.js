import { Router } from "express";
import { addHospedaje, getHospedajes } from "../../proveedorInformacion.js";

const rutaHospedaje = Router();

rutaHospedaje.get("/", async (request, response) => {
  try {
    response.json(await getHospedajes());
  } catch {
    response.sendStatus(500);
  }
});

rutaHospedaje.post("/", async (request, response) => {
  try {
    await addHospedaje(request.body);
    response.status(201).send("Hospedaje añadido correctamente");
  } catch (error) {
    console.log(error);
    response.sendStatus(400);
  }
});

rutaHospedaje.get("/:id", async (request, response) => {
  try {
    const listaHospedajes = await getHospedajes();
    const hospedaje = listaHospedajes.filter((hospedaje) => {
      if (hospedaje.id === parseInt(request.params.id)) {
        return true;
      }
      return false;
    });
    response.json(hospedaje);
  } catch {
    response.sendStatus(500);
  }
});

export default rutaHospedaje;
