/*Ejercicio – Par/Impar
• Desarrollar un algoritmo que dado un número,
ingresado por el usuario determine si el
número es par o impar y le informe al usuario
• En el caso de ser 0 (cero) el algoritmo deberá
informarlo*/

let num : number = Number (prompt("Ingrese el numero a evaluar"));
if (num===0) {
  console.log("Es el número 0, el cual no se puede determinar");
  } else {
      if (num%2===0) { 
        console.log ("Su número es Par");
      } else {
         console.log ("Su número es impar");
        }
  }
