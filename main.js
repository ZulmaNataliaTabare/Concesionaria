const concesionaria = require('./concesionaria.js');

console.log(concesionaria.autoFinanciable(14));
concesionaria.vender('APL123');

console.log("Los autos con menos de 100km son: ", concesionaria.autosNuevos());

console.log("Los autos vendidos son: ", concesionaria.vendidos());

console.log("El importe de los autos vendidos es: ", concesionaria.importeVendidos());

console.log("Esta es la lista de los autos que Usted puede comprar: ", concesionaria.autosQuePuedeComprar(100000));




// console.log("-----------------");
// console.log(concesionaria.autosEnventa);