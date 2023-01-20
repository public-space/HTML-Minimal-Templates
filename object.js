/*------- Example javascript object -----*/

const myObject = {
    property: "Value!", 
    otherProperty: 77, 
    'obnoxious property': function() {
        // Do stuff!
    }
}


/* ----How to get information out of object notation -----*/

// dot notation
myObject.property // 'Value!'

/*------- OBJECT AS DESIGN PATTERN -----*/

//bracket notation
myObject['obnoxious property'] // function

// example one
const playerOneName = "tim"
const playerTwoName = "jenn"
const playerOneMarker = "X"
const playerTwoMarker = "O"

// example two
const playerOne = {
  name: "tim",
  marker: "X"
}

const playerTwo = {
  name: "jenn",
  marker: "O"
}

/*------OBJECT CONTSTRUCTOR -----*/

function Player(name, marker) {
    this.name = name;
    this.marker = marker;
    this.sayName = function() {  //can add functions to object constructor
        console.log(this.name)
    }
}

const player1 = new Player("tim", 'X');
const player2 = new Player("steve", 'O');

player1.sayName();
player2.sayName();