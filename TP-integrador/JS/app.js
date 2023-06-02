let formularioInscripcion = document.getElementById('formularioInscripcion');

formularioInscripcion.addEventListener('submit', function(event){
    event.preventDefault();
    let inputCantidad = document.getElementById('inputCantidad').value;

    console.log(inputCantidad);

/*---------------hasta este punto solo toma la cantidad de tickets------------------ */

let precioTickets = inputCantidad * 200;


let selectElement = document.getElementById('selectElement');
let opcion = selectElement.value;

let precioFinal = 0;
if (opcion === 'estudiante') {
    let descuento =( (precioTickets * 80) / 100);
    precioFinal = precioTickets - descuento;
    console.log("El precio final con el 80% de descuento es: " + precioFinal);
}else if(opcion === 'trainee'){
    descuento = ( (precioTickets * 50) / 100);
    precioFinal = precioTickets - descuento;
    console.log("El precio final con el 50% de descuento es: " + precioFinal);
}else if (opcion === 'junior'){
    descuento =( (precioTickets * 15) / 100);
    precioFinal = precioTickets - descuento;
    console.log("El precio final con el 15% de descuento es: " + precioFinal);
}


let precioFinalElement = document.getElementById("precio-total");
precioFinalElement.textContent = precioFinal;

});


