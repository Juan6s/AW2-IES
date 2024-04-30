import fs from "fs";
import { convertir } from "./validador.js";

const ARCHIVOS = {
  inquilinos: "./data/inquilinos.json",
  hospedaje: "./data/hospedaje.json",
  reserva: "./data/reserva.json",
};

const HOSPEDAJE_ESQUEMA = {
  nombre: { tipoDato: "string" },
  ubicacion: { tipoDato: "string" },
  precio_noche: { tipoDato: "number" },
  habilitada: { tipoDato: "boolean" },
};

const INQUILINOS_ESQUEMA = {
  nombre: { tipoDato: "string" },
  dni: { tipoDato: "string" },
  telefono: { tipoDato: "string" },
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
  const lastId = json[json.length - 1].id;
  nuevoRegistro.id = lastId + 1;
  json.push(nuevoRegistro);

  await fs.writeFileSync(archivo, JSON.stringify(json));
}

export async function getInqulinos() {
  return await leerArchivo(ARCHIVOS.inquilinos);
}

export async function getHospedajes() {
  return await leerArchivo(ARCHIVOS.hospedaje);
}

export async function getReservas() {
  return await leerArchivo(ARCHIVOS.reserva);
}

export async function addHospedaje(valores) {
  convertir(HOSPEDAJE_ESQUEMA, valores);
  await agregarAlArchivo(ARCHIVOS.hospedaje, valores);
}

export async function addInquilinos(valores) {
  convertir(INQUILINOS_ESQUEMA, valores);
  await agregarAlArchivo(ARCHIVOS.inquilinos, valores);
}
