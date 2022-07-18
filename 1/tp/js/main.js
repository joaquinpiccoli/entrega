// primer punto
let numero = parseInt(prompt('ingrese un numero para sumarle 1'))
for (let i=1; i <=5; i++){
    console.log(numero + i)
}

// segundo punto
let texto = "";
while(texto != "ESC"){
    texto = prompt('ingrese un texto');
    console.log('el texto ingresado es ' + texto);
}


//tercer punto
let valor = parseInt(prompt('ingrese un numero'));
for (let i = 0; i < valor; i++){
    console.log('hola')
}
