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
  const valoresTraducidos = {};
  for (const estructuraDeDatos in esquema) {
    console.log(estructuraDeDatos);
    const valorTraducido = traducir(
      valores[estructuraDeDatos],
      esquema[estructuraDeDatos].tipoDato
    );
    if (valorTraducido === undefined) {
      throw new Error(
        `La variable ${estructuraDeDatos} no pudo ser convertida a ${esquema[estructuraDeDatos].tipoDato}`
      );
    }
    valoresTraducidos[estructuraDeDatos] = valores[estructuraDeDatos];
  }
  return valoresTraducidos;
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
