import { leerArchivo } from "../manejadorArchivos.js";
import { ARCHIVOS } from "../manejadorArchivos.js";

export async function obtenerHospedajes() {
  return await leerArchivo(ARCHIVOS.hospedaje);
}
