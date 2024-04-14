/*
{ 
    nombre: {
        tipoDato: "string",
        nombre: "nombre"
    },
    ubicacion: {
        tipoDato: "string",
        nombre: "ubicacion"
    }
}

*/
export function convertir(esquema, valores) {
  console.log(esquema);
  const valoresTraducidos = esquema.map((estructuraDeDatos) => {
    if (
      !traducir(valor[estructuraDeDatos.nombre], estructuraDeDatos.tipoDato)
    ) {
      throw new Error(
        `La variable ${variable.nombre} no pudo ser convertida segun el esquema a ${estructuraDeDatos.tipoDato}`
      );
    }
  });

  return valoresTraducidos();
}

function traducir(valor, tipoDato) {
  if (tipoDato === "number") {
    const numero = Number(valor);
    if (Number.isNaN(numero)) {
      return undefined;
    }
    return numero;
  }
  if (tipoDato === "boolean") {
    if (valor === "true") {
      return true;
    }
    if (valor === "false") {
      return false;
    }
    return undefined;
  }

  return valor; //asumimos que es string
}

console.log(
  convertir(
    {
      nombre: { tipoDato: "string", nombre: "nombre" },
      ubicacion: {
        tipoDato: "string",
        nombre: "ubicacion",
      },
    },
    { nombre: "aca", ubicacion: "alla" }
  )
);
