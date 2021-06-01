/*
node timer1.js 10 3 5 15 9 
This will make it beep at:
    3 seconds
    5 seconds
    9 seconds
    10 seconds
    15 seconds
*/
// Step 1 - receive ann array of timers
// Step 2 - take out first two elements

// Step 3 - check if elements of this array are positiv numbers only
// if empty array - doing nothing
// if not numbers - skip the element
// if negativ number - skip the element

// Step 4 - set up a loop for setTimeout with these elements as values of timer

// Step 5 make a sound

const timerArgs = process.argv.slice(2); // I do not need 2 first elements, just the last one - number
for (let timer of timerArgs) {
  if (!isNaN(timer) && timer > 0) {
    let seconds = timer * 1000;
    setTimeout(() => {
      process.stdout.write('\x07');
      process.stdout.write("sound ");
    }, seconds);
  }
};

// this is an old version
/*
for (let timer of timerArgs) {
  if (timer === "") {
    console.log(timer);
  } else if (isNaN(timer)) {
    continue;
  } else if (timer <= 0) {
    continue;
  } else {
    let seconds = timer * 1000;
    //console.log(seconds);
    setTimeout(() => {
      process.stdout.write('\x07');
      process.stdout.write("sound ");
    }, seconds);
  }
};
*/
