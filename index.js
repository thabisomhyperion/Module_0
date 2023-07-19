/** 
Functions:
-----------
 - Problems that functions solve
 - Creating a function
 - calling a function
 - parameters > variable
 - return type
 - Scope
 - Build in functions
*/
//creating a function
// Define functions
function startEngine() {
  console.log('Starting the engine...');
  // Code to start the car's engine
}

function accelerate(gear) {
  console.log('Accelerating in gear ' + gear + '...');
  // Code to increase the car's speed in the specified gear
}

function brake() {
  console.log('Applying the brakes...');
  // Code to slow down the car
}

function turn(direction) {
  console.log('Turning ' + direction + '...');
  // Code to change the car's direction
  
}

function changeGear(gear) {
  console.log('Changing gear to ' + gear + '...');
  // Code to change the car's gear
}

function stopEngine() {
  console.log('Stopping the engine...');
  // Code to stop the car's engine
}

// Main program
function driveCar() {
  // Step 1: Start the engine
  startEngine();

  // Step 2: Change to first gear
  changeGear(1);

  // Step 3: Accelerate
  accelerate(1);

  // Step 4: Turn left
  turn('left');

  // Step 5: Change to second gear
  changeGear(2);

  // Step 6: Accelerate
  accelerate(2);

  // Step 7: Turn right
  turn('right');

  // Step 8: Apply brakes
  brake();

  // Step 9: Stop the engine
  stopEngine();

  
}

// Execute the main program
driveCar();
