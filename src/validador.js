export function convertir(esquema, valores) {
  const valoresTraducidos = {};
  for (const estructuraDeDatos in esquema) {
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

  if (tipoDato === "string") {
    if (typeof valor === "string") return valor;
  }

  return undefined;
}
