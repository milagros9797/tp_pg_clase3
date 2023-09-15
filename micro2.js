let nombre = "Juan";
let apellido = "Lopez";
let sueldoActual = 50000;
let porcentajeAumento = 25;
let calculoAumento = (sueldoActual * porcentajeAumento) /100 ;
let nuevoSueldo = calculoAumento + sueldoActual ;


let texto =` Hola, estimad@ ${nombre} ${apellido}
En base a su sueldo actual : $${sueldoActual}
Ha recibido un aumento del 25%: $${calculoAumento}
y su nuevo sueldo es de: $${nuevoSueldo}
`
console.log(texto);