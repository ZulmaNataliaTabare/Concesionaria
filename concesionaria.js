const autos = require('./autos.js');
const concesionaria = {
    vehiculos:autos,
    autosEnventa: function () {
        return this.vehiculos.filter(car => car.vendido === false)
    },
    vender:function (dominio) {
        this.vehiculos.forEach(car => {
            if(car.patente == dominio){
                car.vendido = true
            }
        })
    },
    autoFinanciable:function (cuotas) {
        const enVenta = this.autosEnventa();
        return enVenta.filter(car => car.cuotas >= cuotas);
    },

//Se precisa que se agregen las siguientes funcionalidades el objeto concesionaria:

// autosNuevos: retorna los vehiculos con menos de 100km.

autosNuevos: function () { 
    return this.vehiculos.filter(car => car.km < 100);
    },
    
        
// listaDeVentas: retorna la lista de los autos vendidos.

vendidos: function () {
    return this.vehiculos.filter(car => car.vendido === true);
    },

// totalDeVentas: me retorna la suma de los importes de los vehiculos vendidos.

    importeVendidos: function (){ 
        return this.vehiculos.filter(car => car.vendido === true) .reduce((total, car) => total + car.precio, 0);
            
        }, 




// autosQuePuedeComprar: retorna la lista de los autos que sean menores o iguales al importe indicado por el cliente.

autosQuePuedeComprar: function(importe) {

    return this.vehiculos.filter (car => car.precio <= importe);
    }

}







module.exports = concesionaria;