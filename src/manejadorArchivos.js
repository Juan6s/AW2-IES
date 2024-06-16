import fs from "fs";

export const ARCHIVOS = {
  inquilinos: "./data/inquilinos.json",
  hospedaje: "./data/hospedaje.json",
  reserva: "./data/reserva.json",
};

export async function leerArchivo(archivo) {
  try {
    const lectura = await fs.readFileSync(archivo, { encoding: "utf-8" });
    return JSON.parse(lectura);
  } catch (error) {
    console.log(`error al conseguir la informacion: ${error}`);
  }
}

export async function agregarAlArchivo(archivo, nuevoRegistro) {
  const lectura = await fs.readFileSync(archivo, { encoding: "utf-8" });
  const json = JSON.parse(lectura);
  const lastId = json[json.length - 1].id;
  nuevoRegistro.id = lastId + 1;
  json.push(nuevoRegistro);

  await fs.writeFileSync(archivo, JSON.stringify(json));
}

export async function editarRegistroArchivo(
  archivo,
  idRegistro,
  nuevoRegistro
) {
  const lectura = await fs.readFileSync(archivo, { encoding: "utf-8" });
  const registros = JSON.parse(lectura);
  const registrosActualizados = registros.map((registro) => {
    if (registro.id === idRegistro) {
      nuevoRegistro.id = idRegistro;
      return nuevoRegistro;
    }
    return registro;
  });
  await fs.writeFileSync(archivo, JSON.stringify(registrosActualizados));
}

export async function eliminarRegistroArchivo(archivo, idRegistro) {
  const lectura = await fs.readFileSync(archivo, { encoding: "utf-8" });
  const registros = JSON.parse(lectura);
  const registrosActualizados = registros.filter((registro) => {
    if (registro.id !== idRegistro) {
      return registro;
    }
  });
  console.log(registrosActualizados);
  await fs.writeFileSync(archivo, JSON.stringify(registrosActualizados));
}
