import { leerArchivo } from "../manejadorArchivos.js";
import { ARCHIVOS } from "../manejadorArchivos.js";

export async function obtenerReservas() {
  return await leerArchivo(ARCHIVOS.reserva);
}
