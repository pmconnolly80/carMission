/*
  .....  YOUR MISSION  .....
  1. Author functions that define the Make
      and Model of a Car and the Car itself.
  2. Create three instances of your Car that
      each have a different color.
  3. Each Car you create should inherit the
      make and model name.
*/

function Car(){
  this.Make = "Chevrolet";
  this.Model = "Colorado";
}

function Green() {
  this.color = "Green";
}
Green.prototype = new Car();

var green = new Green();
console.log('green', green);


function Blue() {
  this.color = "Blue";
}
Blue.prototype = new Car();

var blue = new Blue();
console.log('blue', blue);


function Red() {
  this.color = "Red";
}
Red.prototype = new Car();

var red = new Red();
console.log('red', red);






/*
  Create a function, Make, that has a property
   of makeName and give it the value of your
   vehicle's make.
 */

/*
Create a function, Model, to hold the 
corresponding property and value
*/


// What is the prototype of a Model?
 

// Define a Car


// What is the prototype of a Car?


// Create the first car


// Create the second car


// Create the third car
