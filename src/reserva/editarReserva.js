import {
  ARCHIVOS,
  editarRegistroArchivo,
  leerArchivo,
} from "../manejadorArchivos.js";
import { convertir } from "../validador.js";

const EDITAR_FECHAS = {
  ingreso: { tipoDato: "string" },
  salida: { tipoDato: "string" },
};

export async function editarFechasReserva(id, valores) {
  convertir(EDITAR_FECHAS, valores);
  const reservas = await leerArchivo(ARCHIVOS.reserva);
  const reservaOriginal = reservas.find((reserva) => {
    return id === reserva.id;
  });

  reservaOriginal.fechas = valores;

  editarRegistroArchivo(ARCHIVOS.reserva, id, reservaOriginal);
}
