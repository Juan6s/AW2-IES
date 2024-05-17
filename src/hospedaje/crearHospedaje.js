import { ARCHIVOS } from "../manejadorArchivos.js";
import { convertir } from "../validador.js";
import { agregarAlArchivo } from "../manejadorArchivos.js";

const CREAR_HOSPEDAJE = {
  nombre: { tipoDato: "string" },
  ubicacion: { tipoDato: "string" },
  precio_noche: { tipoDato: "number" },
  habilitada: { tipoDato: "boolean" },
  max_inquilinos: { tipoDato: "number" },
};

export async function crearHospedaje(valores) {
  convertir(CREAR_HOSPEDAJE, valores);
  await agregarAlArchivo(ARCHIVOS.hospedaje, valores);
}
