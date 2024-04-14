import fs from "fs";
import { type } from "os";

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

async function agregarAlArchivo(archivo, nuevoRegistro) {
  const lectura = await fs.readFileSync(archivo, { encoding: "utf-8" });
  const json = JSON.parse(lectura);
  const lastId = json[json.length].id;
  json.id = lastId + 1;
  json.push(nuevoRegistro);

  await fs.writeFileSync(archivo, JSON.stringify(json));
}

export async function getInqulinos() {
  return await leerArchivo(archivos.inquilinos);
}

export async function getHospedajes() {
  return await leerArchivo(archivos.hospedaje);
}

export async function getReservas() {
  return await leerArchivo(archivos.reserva);
}

export async function addHospedaje(nombre, ubicacion, precioNoche, habilitada) {
  if (typeof nombre !== "string") {
    throw new Error("Nombre debe ser de tipo cadena");
  }

  if (typeof ubicacion !== "string") {
    throw new Error("Ubicacion debe ser de tipo cadena");
  }

  if (typeof precioNoche !== "number") {
    throw new Error("PrecioNoche debe ser de tipo numero");
  }

  if (typeof habilitada !== "boolean") {
    throw new Error("habilitada debe ser de tipo booleano");
  }

  await agregarAlArchivo(archivos.hospedaje, {
    nombre,
    ubicacion,
    precioNoche,
    habilitada,
  });
}
