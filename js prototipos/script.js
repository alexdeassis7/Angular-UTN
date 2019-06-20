

'use strict';
//utilizamos modo estricto: 
//este modo hace que Js arroje errores en los lugares 
//que comunmente no lo haria y fallaria silenciosamente
//el modo estricto no permite el udo de partes obsoletas



//Creando Objeto de forma Literal
var persona = {
  name : 'alex',
  apellido : 'de assis',
  edad : '67'
}

display(persona)
display(persona.edad)
display(persona.apellido)
display(persona.name)

//como agregar una funcion a un objeto 
//creamos la funcion hablar

persona.hablar = function(){
  display("estoy hablando amego!")
}
//llamo a la funcion hablar
persona.hablar()

//y si quiero agregarlo como parte de mi object??
var humano ={
  name :'ahiViene',
  apellido :'ramon',
  edad : '35',
  jemir: function(){ 
    display("estoy jimiendo aah ahhhmmm")
  }
}
//muestro humano 
display(humano)

//-------OBJ con Funcion Constructor ----------
function Java(name , profecion){
this.name = name
this.profecion = profecion
}
//
var obj1 = new Java('jose','medico');
//ahora lo mostramos y podemos ver que obj1 es 
//un puntero a un objeto de tipo JAVA y este 
//obejeto se llama pepito y es docente
display(obj1)

//de fondo en realidad sucede esto :

var java2 = Object.create(Object.prototype,
{
 nombre :{
   value : "joaquin",
   enumerable : true,
   writable: true,
   configurable:true
 },
  profecion :{
   value : "medico",
   enumerable : true,
   writable: true,
   configurable:true
 },
})

