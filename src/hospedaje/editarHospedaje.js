import {
  ARCHIVOS,
  editarRegistroArchivo,
  leerArchivo,
} from "../manejadorArchivos.js";
import { convertir } from "../validador.js";

const MODIFICAR_PRECIO_HOSPEDAJE = {
  precio_noche: { tipoDato: "number" },
};

export async function editarPrecioHospedaje(id, valores) {
  convertir(MODIFICAR_PRECIO_HOSPEDAJE, valores);
  const hospedajes = await leerArchivo(ARCHIVOS.hospedaje);
  const hosepdajeFiltrado = hospedajes.find((hospedaje) => {
    return hospedaje.id === id;
  });
  hosepdajeFiltrado.precio_noche = valores.precio_noche;

  await editarRegistroArchivo(ARCHIVOS.hospedaje, id, hosepdajeFiltrado);
}
