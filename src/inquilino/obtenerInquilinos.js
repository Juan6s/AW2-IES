import { leerArchivo } from "../manejadorArchivos.js";
import { ARCHIVOS } from "../manejadorArchivos.js";

export async function obtenerInqulinos() {
  return await leerArchivo(ARCHIVOS.inquilinos);
}
