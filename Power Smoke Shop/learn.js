// Since I'm such a noob 
console.log("%cHello World!", 'color: green; font-size: 20px;');
console.log("%cPower", 'color: orange; font-size: 20px;');
console.log("%cSmoke Shop", 'color: blue; font-size: 20px;');
//alert('We know what you fucking kids are doing with the whipped cream chargers');
console.log("There are " + (30*24*60*60) + " seconds in a month");

let name = "donovan";
let age = 27;
console.log(name);
console.log(name + " is " + age + "");

let p1 = "  *  ";
let p2 = " *** ";
let p3 = "*****";

//reorder
console.log(p1);
console.log(p2);
console.log(p3);
console.log(p2);
console.log(p1);
console.log(p1); 

// let person = {
//     name: "Donovan",
//      age: 27,
//      favColor: 'green',
//      height: 64
// };

// let x = person.name;
// let y = person["age"];
// console.log(x);
// console.log(y);

let course = {name: "JS", lessons: 41};
document.write(course.name.length);

document.write('this is the document.write() function');

// this is a plain old OBJECT
var cuboid = {
    length: 25,
    width: 50,
    height: 200
};

//your code goes here

let volume = cuboid.length * cuboid.width * cuboid.height;
console.log("%ccuboid volume is: ", 'color: green; font-size: 20px;')
console.log(volume);

// This is a plain old OBJECT CONSTRUCTOR
function person(name, age, color) {
    this.name = name;
    this.age = age;
    this.favColor = color;
    this.changeName = function(name) {
        this.name = name;
    }
    this.yearOfBirth = bornYear;
}

function bornYear() {
        return 2016 - this.age;
}



let person1 = new person("John", 47, "green");
let person2 = new person("jANIE", 21, 'redd');
person1.changeName("nathan")

document.write(person1.name);
document.write(person2.age);

function contact(name, number) {
this.name = name;
this.number = number;
this.print = function() {
    console.log(this.name + ": " + this.number)
}
}

var a = new contact("David", 12345);
var b = new contact("Amy", 987654321);
a.print();
b.print();

// array 
let arr = new Array(3, 6, 8);
document.write(arr[1]);
console.log(arr);
document.write("\ndddn");

let courses = new Array("HTML", "CSS", "JavaScript")
document.write(courses[2]);

// array literal
let arry3 = [1, 2, 3, 4, 5];

// DOM Manipulation 
/* 
Accessing elements: You can access HTML elements on a page 
using the 
            document.getElementById(), 
            document.getElementsByClassName(), 
            and document.getElementsByTagName() methods.

 For example, to access an element with the ID of "myDiv," 
 you would use the following code:
*/

let myDiv = document.getElementById("myDiv");

/*
Changing element content: Once you have access to an element,
 you can change its content using the innerHTML property.
 For example, to change the content of the above "myDiv" element
  to "Hello World!", you would use the following code:
 */

  myDiv.innerHTML = "Hello World!"

  let newP = document.createElement("p");
  newP.innerHTML = "This is a new paragraph";
  myDiv.appendChild(newP);
  myDiv.removeChild(myDiv.firstChild);
  myDiv.removeChild(myDiv.lastChild);

myDiv.style.backgroundColor = "green";
myDiv.appendChild(newP);
myDiv.removeChild(myDiv.firstChild);