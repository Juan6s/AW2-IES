import { convertir } from "../validador.js";
import { agregarAlArchivo } from "../manejadorArchivos.js";

const CREAR_INQUILINO = {
  nombre: { tipoDato: "string" },
  dni: { tipoDato: "string" },
  telefono: { tipoDato: "string" },
};

export async function crearInquilino(valores) {
  convertir(CREAR_INQUILINO, valores);
  await agregarAlArchivo(ARCHIVOS.inquilinos, valores);
}
