//'use strict';
/*var a = 3;
var b = 's333s4';
var rslt = a === b;
a = 0;

if(a) {
	if(b) 
  	c = 'uno';
	a = 0;
} else 
  	c = 'otro';

c = a += 3;
var a = rstl;
if(a == null) {
	var kk = 5;
}
c = kk + 2;

switch(a) {
case 1:
case 2:
   c = 'algo';
   break;
case 3:
	c = 'tres';
  break;
default: 
  c = 'otros';
  break;
case 4:
  c = 'cuatro';
  break;
}

*/
//console.log('a: ' + a + ' c: ' + c);
//a = a + 2;
/*
a = null;
console.error(a != null & a.toString() + parseFloat(b));
*/
//console.error(a + (isNaN(parseFloat(b))? 0 : parseFloat(b)));
//console.log(a);
// var t = ["uno","dos","tres", "curso"];

var t = [];

t[1] = 'uno';
t[7] = 'siete';
t['cadena'] = 'es cadena';
t.propiedad = 'es propiedad';
t.metodo = function(a, b) { return a - b; }

for(var i = 0, j = 10; i < t.length; i++, j--) {
	console.log(i + ' ' + t[i]);
}

t.push("añadido");

for(var item in t) {
	console.log(item + ' - ' + t[item]);
	// console.log(t[item]);
}

console.log(t.metodo(3, 1));

function Persona(elId, elNombre) {
	var me = this; 
  this.id = elId;
  this.nombre = elNombre;
  this.muestraId = function() {
    alert("El ID del objeto es " + me.id);
  }
  this.ponNombre = function(nom) {
    this.nombre=nom.toUpperCase();
  }
  console.log("this", this);
}

Persona.prototype.dameNombre = function() {
    return this.nombre;
  }
var p = new Persona(1, 'Pepito');
var p2 = new Persona(2, 'Grillo');
console.log(p, p2);
p2.muestraId = function() {
    alert("Este es otro del " + this.id);
  }
//delete p2.muestraId;
//p.muestraId();
//p2.muestraId();
console.log(p.dameNombre(), p2.dameNombre());
//Persona.prototype.dameNombre = function() {
//    return this.nombre.toUpperCase();
//  }
//debugger;
p2.dameNombre = function() {
    return this.nombre.toUpperCase();
  }
console.log(p.dameNombre(), p2.dameNombre.call(p));
p2.dameNombre.bind(p);
console.log(p2.muestraId(), p2.dameNombre.call(p));
Persona(1, 'Pepito');
var valor = prompt("Solicitar dato");
alert("El valor es" + valor);
/*
while((1 <= a && a <=10) || (b == 1 || b == 2) && !c) {

}

while(true) {
  // ...
  continue;
  if(1 <= a && a <=10) continue;
  // ...
  if(c) break;
  // ...
}
*/

/*
function suma(a, b) { return a + b; }
console.log(suma);


suma = function(a, b) { return a - b; }

suma = 4;

function suma(a, b) { return a * b; }

function opera(op) {
	switch (op) {
  	case '+': 
    	return suma;
    case '-': 
    	return function(a, b) { return a - b; }
    case '*': 
    	return function() { return arguments[0] * arguments[1]; }
    default:
    	return function() { throw new Error('Operación no soportada'); }
  }
}
var fn = opera('+');
try {
	console.log(fn(2, 3));
	console.log('Sin error');
} catch(ex) {
	console.error(ex.message);
}
console.log('Sigue');
*/
