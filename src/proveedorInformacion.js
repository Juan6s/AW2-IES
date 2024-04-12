import fs from "fs";

const archivos = {
  inquilinos: "./data/inquilinos.json",
  hospedaje: "./data/hospedaje.json",
  reserva: "./data/reserva.json",
};

async function leerArchivo(archivo) {
  try {
    const lectura = await fs.readFileSync(archivo, { encoding: "utf-8" });
    return JSON.parse(lectura);
  } catch (error) {
    console.log(`error al conseguir la informacion: ${error}`);
  }
}

export async function inquilinos() {
  return await leerArchivo(archivos.inquilinos);
}

export async function hospedajes() {
  return await leerArchivo(archivos.hospedaje);
}

export async function reservas() {
  return await leerArchivo(archivos.reserva);
}
