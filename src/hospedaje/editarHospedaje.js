import { ARCHIVOS } from "../manejadorArchivos.js";
import { convertir } from "../validador.js";

const MODIFICAR_PRECIO_HOSPEDAJE = {
  id: { tipoDato: "number" },
  precio_noche: { tipoDato: "number" },
};

export async function cambiarPrecioHospedaje(valores) {
  convertir(MODIFICAR_PRECIO_HOSPEDAJE, valores);
  await agregarAlArchivo(ARCHIVOS.hospedaje, valores);
}
