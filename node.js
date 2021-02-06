"use strict";
/**/

//-----------Function declaration
function declaration() {
	alert("Im function declaration");
}
declaration();

//-----------Function expression
let functionExpressionVarible = function (paramDefault = "Im function expression") {
									alert(paramDefault);
								}
functionExpressionVarible();

//-----------function arrow
let arrow = (param = "Im function arrow") => (alert(param));
arrow();

//-----------anonimus function
function anonimusFunction(func) {
	func();
}
anonimusFunction(function(){alert("Im anonimusFunction")});

//-----------доведення що присвоєння функцій можливе, парамерти, дефолтні значення параметрів
let someVar;

someVar = functionExpressionVarible; // присвоєння деякій зміній функцію обьявлену раніше
someVar("someParam");					// виклик присвоеної функції деякій змінній

//------- передача функції як параметр на прикладі колбеку
function someFunction(param, yes, no) {
	if( param != 0) {
		yes("yes");
	} else {
		no("no");
	}
}
someFunction(0, alert, arrow);
someFunction(1, alert, arrow);

//--- Замикання
function some(a) {
	let b = 15;
	return function (b) {
		return a + b;
	}
}
let f = some(1); // змінній f було присвоєно функцію some яка замкнула у собі передану в неї значення(1)
alert(f(1)); // 2
alert(f(2)); // 3
let e = some(3); // змінній e було присвоєно функцію some яка замкнула у собі передану в неї значення(3)
alert(e(1)); // 4
alert(e(2)); // 5
