import {
  ARCHIVOS,
  editarRegistroArchivo,
  leerArchivo,
} from "../manejadorArchivos.js";
import { convertir } from "../validador.js";

const EDITAR_INQUILINO = {
  nombre: { tipoDato: "string" },
};

export async function editarNombreInquilino(id, valores) {
  convertir(EDITAR_INQUILINO, valores);
  const inquilinos = await leerArchivo(ARCHIVOS.inquilinos);
  const inquilinoEditable = inquilinos.find((inquilino) => {
    return inquilino.id === id;
  });
  inquilinoEditable.nombre = valores.nombre;
  console.log(inquilinoEditable);
  editarRegistroArchivo(ARCHIVOS.inquilinos, id, inquilinoEditable);
}
