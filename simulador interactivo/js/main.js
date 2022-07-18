
function pedirValor(){
    let precioProducto=parseInt(prompt('ingrese valor del producto'))
    return precioProducto;
}

let total = 0;
function sumaTotal(monto){
    total = total + monto;
}

function calcularIva(monto){
    return monto * 0.21;
}

alert('a continuacion se le pedira el precio de 5 productos para calcular el total + iva.')

for (let i= 0; i < 5; i++){
    let valor = pedirValor();
    sumaTotal(valor);
}
let iva = calcularIva(total);
alert('el monto total mas iva: ' + (total + iva));