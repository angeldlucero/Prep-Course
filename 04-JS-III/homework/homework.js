// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:

  return array[0];
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    arr[i] = array[i] + 1;
  }
  return arr;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(" ");
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    if (array[i] === elemento) {
      return true;
    }
  }
  return false;
}

function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let sum = 0;
  for (let i = 0; i < numeros.length; i++) {
    sum += numeros[i];
  }
  return sum;
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let sum = 0;
  for (let i = 0; i < resultadosTest.length; i++) {
    sum += resultadosTest[i];
  }
  let promed = sum / resultadosTest.length;
  return promed;
}
//* 1) generar un bucle que sume la cantidad de elementos de un array.
//* 2) de la suma de la cantidad de elementos, devolver el promedio de los mismos.

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let mayor = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
      mayor = numeros[i];
    }
  }
  return mayor;
}
//* 1) una matriz de numero eneteros.
//* 2) devolver el numero mas grande.
//* - Como devolver un numero mas grande?
//* - Hciendo un bucle que value el numero guardado en una variable y en esa comparación obtendre un numero mayor.

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if (arguments.length < 1) {
    return 0;
  }

  let multiplicarArguments = 1;

  for (let i = 0; i < arguments.length; i++) {
    multiplicarArguments *= arguments[i];
  }
  return multiplicarArguments;
}

function cuentoElementos(arreglo) {
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let cantElement = 0;
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > 18) {
      cantElement++;
    }
  }
  return cantElement;
}
//* Para que una función retorne la cantidad de los elementos se debe sumar cada posición.
//* Como sumar cada posición?
//* - creamos una variable que vaya sumando de a uno, si y solo si se cumple la condición de que array[i] > 18.

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario.
  //Escribe tu código aquí
  if (numeroDeDia === 1 || numeroDeDia === 7) {
    return "Es fin de semana";
  }
  return "Es dia Laboral";
}

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  let num = n.toString();
  if (num.charAt(0) === "9") {
    return true;
  }
  return false;
}

//* Como calcular si un entero empieza con 9 en caso de ser mas de dos digitos?
//* Podemos usar El charAt() método devuelve el carácter en el índice especificado de una 'CADENA'. El índice del primer carácter es 0, el segundo carácter es 1, y así sucesivamente.
//* Pero como leimos indica que devuelve el caracteres de una CADENA, pero en este problema nos plantea devolver si un numero entero empieza con 9. ¿Entonces como podemos hacer?
//* - Simple convertimos en String al numero entero, con el metodo toString().
//* - Y ahora al tener una cadena de numeros, podemos devolver si el primero caracter empieza con '9'.

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí
  for (let i = 0; i < arreglo.length; i++) {
    for (let j = i + 1; j < arreglo.length; j++) {
      if (arreglo[i] === arreglo[j]) {
        return true;
      }
    }
  }
  return false;
}

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let newArray = [];
  if (
    !array.includes("Enero") ||
    !array.includes("Marzo") ||
    !array.includes("Noviembre")
  ) {
    return "No se encontraron los meses pedidos";
  }

  for (i = 0; i < array.length; i++) {
    if (
      array[i] === "Enero" ||
      array[i] === "Marzo" ||
      array[i] === "Noviembre"
    ) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
//* 1) Como recorrer un array  buscando los meses.
//* 2) Como devolver esoss meses.

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let newArray = [];

  for (i = 0; i < array.length; i++) {
    if (array[i] > 100) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  let newArray = [];
  let sum = numero; //* Guardamos el numero en una variable suma
  for (i = 0; i < 10; i++) {
    sum += 2; //* Aumentamos en 2 el numero recibido.
    if (sum === i) {
      //* Acá comprobamos si el numero en la variable sum es igual a la cantidad de iteracciones.
      break; //* En caso de ser TRUE debe ejecutarse el BREAK y salirse del Bucle.
    } else {
      newArray.push(sum); //* En caso contrario agregar el numero aumentado en 2 a la variable 'newArray'.
    }
  } //* Salida del FOR.

  if (i < 10) {
    //* Una vez que se salió del blucle por el BREAK, aplicamos un condicional para poder retornar
    return "Se interrumpió la ejecución"; //* Lo que que nos planteamos. Para eso hacemos una comparación.
  }
  return newArray; //* Se ejecuta este Return si y solo si nunca se pudo encontrar una igualdad ente el
  //* numero y la cantidad de iteracciones, entonces devolvemos el array.
}

//* como iterar en un bucle aumentanto en 2 el numero recibido hasta un limite de 10 veces.

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let newArray = [];
  let sum = numero;
  for (i = 0; i < 10; i++) {
    if (i === 5) {
      continue; //* Al alcanzar la iteración Numero 5, el se activa la directiva CONTINUE y eso hace
    } else {
      //* que se saletee esa suma y pase a la otra iteración y no se agregara en el ARRAY.
      sum += 2;
      newArray.push(sum);
    }
  }
  return newArray; //* En este array se retoranaran 9 elementos, dado que en la iteración 5 se salteo por la directiva CONTINUE.
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement,
};
