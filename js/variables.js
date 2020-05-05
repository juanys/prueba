var textoA ="comillas dobles";
var textoB ="comillas sencillas";
var textoC ="texto con comillas 'simples' dentro de comillas dobles";

console.log(textoA);
Console.log(textoB);
console.log(textoC);

var x="2",y="2.2";

document.write(x + y+" "+ typeof(x+y));
document.write("<br>");
document.write(x * y + " " + typeof (x*y));

//numerico
var a=10, b=3;

console.log(a+b);
console.log(a*b);
console.log(a-b);
console.log(a/b);
console.log(a%b); //nos da el residuo de la division


console.log(1 + a++);
console.log(a);
console.log(1 + b++);


//boolean
var t= true, f = false;
console.log(t && f); //falso
console.log(t || f); // verdadero
console.log(t == f); //falso
console.log(t != f); //verdadero

//listas
var nombre = "juany";
var lista =["white",30, nombre,true];
console.log(lista[1]);
console.log(lista.length);
console.log(lista[lista.length-1]);

//objeto o tupla
var persona ={
    nombre: "juany",
    apellido: "whitw",
    aficiones :["css", "html","javascript"],
    inscripto: true,
}

console.log(persona.nombre); //juany
console.log(persona.aficiones[1]);//html
console.log(persona.aficiones[persona.aficiones.length-1]);












