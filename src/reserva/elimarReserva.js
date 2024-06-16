import { ARCHIVOS, eliminarRegistroArchivo } from "../manejadorArchivos.js";

export async function eliminarReserva(id) {
  return await eliminarRegistroArchivo(ARCHIVOS.reserva, Number(id));
}
