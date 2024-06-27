import { Router } from "express";
import { Guest } from "../../models/guest.js";
import { checkTokenMiddleware } from "../../middleware/auth.middleware.js";

const rutaInquilinos = Router();
rutaInquilinos.use(checkTokenMiddleware);

rutaInquilinos.get("/", async (request, response) => {
  try {
    response.json(await Guest.find({}));
  } catch {
    response.sendStatus(500);
  }
});

rutaInquilinos.post("/", async (request, response) => {
  try {
    await Guest.create(request.body);
    response.status(201).send("Inquilino añadido correctamente");
  } catch (error) {
    console.log(e);
    response.status(400).send(e);
  }
});

rutaInquilinos.put("/:id", async (request, response) => {
  try {
    await Guest.findByIdAndUpdate(request.params.id, request.body);
    response.status(201).send("Inquilino editado correctamente");
  } catch (e) {
    console.log(e);
    response.sendStatus(400);
  }
});

export default rutaInquilinos;
