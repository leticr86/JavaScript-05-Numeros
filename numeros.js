// Altura en centímetros
var alturaCm = 175;

// Altura en metros
var alturaMetros = alturaCm / 100;

// Peso en kilogramos
var pesoKg = 65.5;

// Altura redondeada hacia arriba en metros
var alturaMetrosRedondeada = Math.ceil(alturaMetros);

// Peso redondeado hacia abajo en kilogramos
var pesoKgRedondeado = Math.floor(pesoKg);

// Comprobación si el máximo valor en Javascript + 1 es igual al máximo valor en Javascript
var maxPlusOneEqualMax = Number.MAX_VALUE + 1 === Number.MAX_VALUE;

console.log("Altura en centímetros: " + alturaCm);
console.log("Altura en metros: " + alturaMetros);
console.log("Peso en kilogramos: " + pesoKg);
console.log("Altura redondeada hacia arriba en metros: " + alturaMetrosRedondeada);
console.log("Peso redondeado hacia abajo en kilogramos: " + pesoKgRedondeado);
console.log("¿El máximo valor en Javascript + 1 es igual al máximo valor en Javascript?: " + maxPlusOneEqualMax);
