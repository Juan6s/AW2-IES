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
