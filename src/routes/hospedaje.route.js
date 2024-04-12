import { Router } from "express";
import { hospedajes } from "../proveedorInformacion.js";

const rutaHospedaje = Router();

rutaHospedaje.get("/", async (request, response) => {
  try {
    response.json(await hospedajes());
  } catch {}
});

rutaHospedaje.get("/:id", async (request, response) => {
  try {
    const listaHospedajes = await hospedajes();
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
