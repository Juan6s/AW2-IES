import { Router } from "express";
import { getHospedajes } from "../proveedorInformacion.js";

const rutaHospedaje = Router();

rutaHospedaje.get("/", async (request, response) => {
  try {
    response.json(await getHospedajes());
  } catch {}
});

rutaHospedaje.post("/", async (request, response) => {
  const body = request.body;
  console.log(body);
  response.status(200).send("Solicitud POST recibida correctamente");
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
