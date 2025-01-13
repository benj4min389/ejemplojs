let nombre = "lia" ;
let apellido = 'reyes';
let edad = 25;
let usaLentes = true;
let altura = 1.75;
let estudia = null;
let comuna = undefined


const iva = 0.19;
const titulo = "supergpagina";
console.log(nombre);
console.log("hola:", nombre);
console.log("hola:" + nombre);
console.log(`hola: ${nombre}`);


//listas 
let listaNombres = [];
listanombres.push("pedro");
listanombres.push("juan");
listanombres.push("diego");
listanombres.unshift("maria"); //este comnando le da prioridad a esa linea por lo tanto maria se imprimira primero y alberta se imprime primero que maria

listanombres.unshift("Alberta");
listaNombres.pop();
listaNombres.pop();

listaNombres.shift(); //elimina al priero de la lista 

console.log("Se elimino a:", listaNombres.shift );
console.log(listaNombres);
console.log(listaNombres.indexOf("maria"));

console.log(ListaProductos)


console.warn("-----------------------------------------------");
let numerito = 20;
if(numerito > 0){
console.log("Positivo")
}else if(numerito < 0){
    console.log("negativo")

}else{
    console.log("neutro")
}
let valor = 50;


if(valor>1 && valor <=20){
    console.log("valor pequeño");

}else if(valor >=21 && valor <=88){
        console.log("valor medio");

}else if(valor >81 && valor<=100){
    console.log("valor alto")
}else{
    console.error("valor fuera de rango");
}

let genero = "f";
if(genero=="f" || genero=="F"){
        console.log("femenino")
}else if(genero== "m" || genero=="M"){
    console.log("mascculiano")

}else{
    console.log("otro")
}


let numeritos = [5,7,8,10,15];
for (let numero of numeritos) {
    console.log(numero)
    if(numero>0){
        console.log("el numero" ,numero,"es positivo")

    }else if (numero<0 ){
        console.log(`el numero ${numero}es negativo`)
    }else{
        console.log("el cero es neutro0")
    }

}
