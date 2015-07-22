/*
  .....  YOUR MISSION  .....
  1. Author functions that define the Make
      and Model of a Car and the Car itself.
  2. Create three instances of your Car that
      each have a different color.
  3. Each Car you create should inherit the
      make and model name.
*/

function Make(){
  this.makeName = "Chevrolet";
}


/*
  Create a function, Make, that has a property
   of makeName and give it the value of your
   vehicle's make.
 */

function Make(){
  this.makeName = "Chevrolet";
}



/*
Create a function, Model, to hold the 
corresponding property and value
*/

function Model () {
  this.modelName = "Colorado"
}

// What is the prototype of a Model?

Model.prototype = new Make();

  // body...


// Define a Car

function Car(color) {
  this.color = color;
}


// What is the prototype of a Car?

Car.prototype = new Model();

// Create the first car

var car2 = new Car("Blue");

// Create the second car

var thisCar = new Car("Black");

// Create the third car

var myCar = new Car("Orange");


console.log(thisCar)
console.log(car2)
console.log(myCar)


