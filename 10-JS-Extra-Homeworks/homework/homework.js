// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  return Object.entries(objeto);;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var counts = {}; 
  let array = string.split('');
  count=0;
  array.forEach(element => {
  var num = element;
  counts[num] = counts[num] ? counts[num]+1 : 1; 
  // arreglo[element]=counts;  
  });
  return counts;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var uppercase = s.replace(/[a-z]/g, '');
  var lowcase = s.replace(/[A-Z]/g, '');
  var newword=uppercase+lowcase;
  return newword;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  arrayreverse=[];
  palabra="";
  cutPhrase=str.split(" ");
  cutPhrase.forEach(element => {
    arrayreverse.push(element.split("").reverse().join(""));
  });
  for (let index = 0; index < arrayreverse.length-1; index++) {
    palabra=palabra.concat(arrayreverse[index]," ");
  }
  palabra=palabra.concat(arrayreverse[arrayreverse.length-1],"");
    
  return palabra;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var numeroreverse=parseInt(numero.toString().split("").reverse().join(""));
  if (numeroreverse===numero) {
    return "Es capicua";
  }
  else{
    return "No es capicua";
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  cadenamod=cadena.split("");
    if (cadenamod.includes("a")) {
      cadenamod.splice(cadenamod.indexOf("a"),1);
    }
    if (cadenamod.includes("b")) {
      cadenamod.splice(cadenamod.indexOf("b"),1);
    }
    if (cadenamod.includes("c")) {
      cadenamod.splice(cadenamod.indexOf("c"),1);
    }
  cadenamod = cadenamod.join('');
  return cadenamod;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var aux;
  for (let i = 0; i < arr.length-1; i++) {
    for (let j = i+1; j < arr.length; j++) {
      if (arr[i].length > arr[j].length) {
        aux = arr[i];
        arr[i]=arr[j];
        arr[j]=aux;
      }
      console.log(arr.length);
    }
  }
  return arr;

}

function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  array=[];
  arreglo1.forEach(element => {
    arreglo2.forEach(elemento => {
      if (element==elemento) {
        array.push(elemento);
      }
    });
  });
  return array;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

