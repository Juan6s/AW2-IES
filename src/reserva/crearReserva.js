import { agregarAlArchivo } from "../manejadorArchivos.js";
import { convertir } from "../validador.js";

const RESERVA = {
  id_inquilino: { tipoDato: "number" },
  id_hospedaje: { tipoDato: "number" },
  fecha_ingreso: { tipoDato: "string" },
  fecha_egreso: { tipoDato: "string" },
};

const ACOMPANANTE = {
  nombre: { tipoDato: "string" },
  edad: { tipoDato: "number" },
};

export async function crearReserva({ reserva, acompanantes }) {
  convertir(RESERVA, reserva);

  for (const acompanante of acompanantes) {
    convertir(ACOMPANANTE, acompanante);
  }
  await agregarAlArchivo(ARCHIVOS.reserva, {
    id_inquilino: reserva.id_inquilino,
    id_hospedaje: reserva.id_hospedaje,
    fechas: {
      ingreso: reserva.fecha_ingreso,
      salida: reserva.fecha_egreso,
    },
    acompanantes,
  });
}
