let dato1 = document.getElementById("dato1");
let btnSend = document.getElementById("send");

btnSend?.addEventListener("click", () => {
  let numero1 = Number(dato1.value);
  function cantidadDeDivisores(numero1: number): number {
    let cantidad: number = 0;
    let divisor: number;
    for (divisor = 1; divisor <= numero1; divisor++) {
      if (numero1 % divisor === 0) {
        cantidad++;
      }
    }
    return cantidad;
  }
  let numDivisores: number = cantidadDeDivisores(numero1);
  console.log("El número", numero1, "tiene ", numDivisores, "divisores.");
});
