// Operators start

// Arithmetic Operators start

let A, B, C;	// Addition(+) Operator
A = 5;        
B = 6;        
C = A + B;   
document.getElementById("Addition").innerHTML =
"The value of C is " + C + ".";

let x= 50;	// Subtraction(-) Operator
let y= 20;
let z= x - y;
document.getElementById("Subtraction").innerHTML =
"The value of z is " + z + ".";

let a= 5;	// Multiplication(*) Operator
let b= 20;
let c= a * b;
document.getElementById("Multiplication").innerHTML =
"The value of c is " + c + ".";

let X= 20;	// Exponentiation(**) Operator
let Y= 5;
let Z= X ** Y;
document.getElementById("Exponentiation").innerHTML =
"The value of Z is " + Z + ".";

let Xx= 20;	// Division(/) Operator
let Yy= 5;
let Zz= Xx / Yy;
document.getElementById("Division").innerHTML =  
"The value of Zz is " + Zz + ".";

let AA= 88;	// Modulus(%) Operator
let BB= 5;
let CC= AA % BB;
document.getElementById("Modulus").innerHTML =  
"The value of CC is " + CC + ".";

let xx= 88;	// Increment(++) Operator
++ xx;
let zz= xx;
document.getElementById("Increment").innerHTML =  
"The value of zz is " + zz + ".";

let aa= 77;	// decrement (--) Operator
aa --;
let bb = aa;
document.getElementById("decrement ").innerHTML =  
"The value of zz is " + bb + ".";

let aaa= (77 + 44) * 2;	// All Arithmetic (--) Operator
let bbb = aaa;
document.getElementById("Arithmetic").innerHTML =  
"The value of bbb is " + bbb + ".";

let abc= (77 + 44) / 2;	// ALL Arithmetic (--) Operator
let bcd = abc;
document.getElementById("Arithmetic2").innerHTML =  
"The value of abc is " + abc + ".";

// Arithmetic Operators end

// Assignment Operators

let abcd= 77;	// assignment Multiplication (--) Operator
abcd *= 5;
document.getElementById("assignment").innerHTML =  
"The value of abcd is " + abcd + ".";

let xyz= 77;	// assignment divides (--) Operator
xyz %= 5;
document.getElementById("assignment2").innerHTML =  
"The value of xyz is " + xyz + ".";

// Assignment Operators END

// Operators end

//  JavaScript Data Types START

let mehedi = 16 + 4 + "Volvo"; // Number String
document.getElementById("numString").innerHTML = mehedi;

let mehedi1 =  "Volvo"+ 16 + 4; // String Number
document.getElementById("NumString").innerHTML = mehedi1;

let fruits1= "mango"; //String
let fruits2= "banana"
let fruits3= 'pineapple'
document.getElementById("string").innerHTML = fruits1 +"<br>"+ fruits2 +"<br>"+ fruits3;

let x1 = 34.00;  //Number
let x2 = 34;
let x3 = 3.14;
document.getElementById("number").innerHTML =
x1 + "<br>" + x2 + "<br>" + x3;

let a1=6;	//Boolean data type
let b1=6;
let c1=8;
document.getElementById("boolean").innerHTML =
(a1==b1) + "<br>" + (b1==c1); //brackets must be

let hasan;	// Typeof data type
document.getElementById("typeof").innerHTML =
hasan + "<br>" + typeof hasan;

// JavaScript Data Types END  Functions

// JavaScript Functions start
	function myFunction( p1, p2)
	{
		return p1 * p2;
	}
	document.getElementById("functions").innerHTML= myFunction(10, 10);

	function sleep(name,time){
		return (name +" is sleeping from "+ time);
	}
	document.getElementById("functions2").innerHTML= 
	sleep("karim","8am.") + "<br>" + sleep("rohim","10am.") + "<br>" + sleep("hridoy","11am.");

	function toCelsius(f) {
  	return (5/9) * (f-32);
	}
	document.getElementById("functions3").innerHTML = toCelsius(77);

	function ToCelsius(f) {
  	
	}
	document.getElementById("functions4").innerHTML = ToCelsius();

// JavaScript Functions end

// JavaScript Object start
	
let car = "Fiat"; //let use object (car)= variable (Fiat)
document.getElementById("object").innerHTML = car;

// Create constant an object:
const cars = {type:"Fiat", model:"500", color:"white"};

// Display some data from the object showing dot(.):
document.getElementById("object1").innerHTML = "The car type is " + cars.type + "<br>" + "The car color is " + cars.color;

// Create constant an object indivisualy called:
const person = {
	firstName: "Mehedi",
	lastName:"Hasan", 
	age:"21",
	father:"Nurullah",
	mother:"Farmita"
};

// Display some data from the object showing third bracked[]:
document.getElementById("object2").innerHTML = "The Father type is " + person["father"] + "<br>" + "The Mother color is " + person["mother"];

const person1 = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    this.identaty();	// its statement- statement end always colon(;)
    return(this.firstName + " " + this.lastName); 
 	},
  identaty : function() {
    console.log (this.id); 
 	}
};
document.getElementById("object3").innerHTML= person1.fullName();// object function ()/method called

const person2 = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    this.identaty();	// its statement- statement end always colon(;)
    return(this.firstName + " " + this.lastName); 
 	},
  identaty : function() {
    console.log (this.id); 
 	}
};
document.getElementById("object4").innerHTML= person2.fullName; // object a function()/method call na dia ta result print na howa object print howasa.

let NUMBER=100;				// this is declear by type of number data
console.log(NUMBER);
console.log(typeof NUMBER);

let number1= new Number(500); // but this is declear by type of object data (v.i==besi dorkar chara ata use kora jaba nah because loaded)
console.log(number1);
console.log(typeof number1);

let string= new String("Mehedi Hasan"); // but this is declear by type of object data (v.i==besi dorkar chara ata use kora jaba nah because loaded)
console.log(string);
console.log(typeof string);

// JavaScript Object end

// JavaScript Events Start

function displayDate(){
	document.getElementById("event1").innerHTML= Date();
}

function onImg(){
	this.setAttribute("src","apple.jpg");
}
function outImg(){
	this.setAttribute("src","orange.jpg")
}
// JavaScript Events end

//JavaScript Strings

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //string lenght check
let length = text.length;
document.getElementById("string1").innerHTML= length;

let text1 = "We are the \"Vikings\" from the north."; //The sequence \" inserts a double quote in a string:
document.getElementById("string2").innerHTML = text1; 

let text2 = "The character \
					is called backslash."; //You can also break up a code line within a text string with a single backslash.
document.getElementById("string3").innerHTML = text2;

document.getElementById("string4").innerHTML = "Hello " +
"Dolly!"; //The safest way to break a code line in a string is using string addition.

// x is a string
let h1 = "John";

// y is an object
let h2 = new String("John");

// h1 & h2 ar type check 
document.getElementById("string5").innerHTML =
typeof h1 + "<br>" + typeof h2;

let A1 = "John";        // x is a string
let A2 = new String("John");  // y is an object

//Strings and objects cannot be safely compared.This is not equal value and type that false.
document.getElementById("string6").innerHTML = (A1===A2);

//JavaScript String Search 
let str = "Please locate where 'locate' occurs!"; //JavaScript String indexOf()
document.getElementById("indexof").innerHTML = str.indexOf("locate",15);

let str1 = "Please locate where 'locate' occurs!"; //JavaScript String search & indexOf() is same but parameter not work in search
document.getElementById("search").innerHTML = str.search("where",16);

let str2 = "Please locate where 'locate' occurs!"; //JavaScript String lastIndexOf() AND last 20number ar pora
document.getElementById("lastindexof").innerHTML = str1.lastIndexOf("locate",18);

let str3 = "Hello world, welcome to the universe."; //JavaScript String includes()
document.getElementById("include").innerHTML = str3.includes("world");

let str4 = "Hello world, welcome to the universe."; //string.includes(searchvalue, start)
document.getElementById("include1").innerHTML = str4.includes("world",15);

let str5 = "Hello world, welcome to the universe."; //JavaScript String startsWith()
document.getElementById("startwith").innerHTML = str5.startsWith("world", 6);

let str6 = "Hello world, welcome to the universe."; //JavaScript Replacing String Content
document.getElementById("replace").innerHTML = str6.replace("world", "earth");

let str7="Hello world, welcome to the universe."; ////JavaScript Replacing String Content variable declare
let str8= str7.replace("the","that");
console.log(str8);
//JavaScript String Search End

//JavaScript Template Literals

let literal1= //Multiline Strings
`The quick
brown fox
jumps over
the lazy "dog"`; 
document.getElementById("back-ticks").innerHTML = literal1; //Back-Tics Syntax break dilo o same string ai thaka no error

let p1= "Bangladesh";
let p2= 10;
let p3= 15;
let p4= `I love ${p1} and it's population is ${p2+p3}`;
document.getElementById("Interpolation").innerHTML = p4; 

//JavaScript Template Literals end