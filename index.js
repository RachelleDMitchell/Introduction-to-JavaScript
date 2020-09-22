/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

let votingAge = 19
if(votingAge > 18) {
console.log('True')
} else {
  console.log('Not old enough')
}
/* 
I think it should be the one below, because technically you are old 
enough to vote when 18 and the original one 
doesn't include 18.
let votingAge = 18
if(votingAge >= 18) {
console.log('True')
} else {
  console.log('Not old enough')
}
*/


//Task b: declare a variable and then use a conditional to change the value of that variable based on 
//the value assigned to a second variable (no function required)

let x = 1;
let y = 2;

if (x < y)
{
    x = y
} 
console.log(x)


//Task c: Convert string ("1999") to integer (1999)  (no function required)
 // hint look up the Number method
Number("1999")
console.log(number)



//Task d: Write a function to multiply a*b 
var a = 2
var b = 2
console.log(a*b)



/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

let yourAge = 28*7;
console.log(yourAge);



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal)
// and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your
// calculations are correct your result should be 0.44999999999999996
function howMuchFoodToEat(){
    let weight = prompt("How many pounds does your dog weigh?");
    let age = prompt("How old is your dog in whole number if 1 or older. If you have a puppy, use the following scale. .1 for 2 months, .2 for 3 months, .3 for 4 months, .4 for 5 months, .5 for 6 months, .6 for 7 months, .7 for 8 months, .8 for 9 months, .9 for 10 months and .95 for 11 months.")
    
    if (weight <= 5 && age >= 1){
        console.log('Your dog weighs ' + weight + ' pounds! ' + 'He should eat ' + weight*.05 + ' pounds of food each day!')
    } else if (weight <= 10 && age >= 1){
          console.log('Your dog weighs ' + weight + ' pounds! ' + 'He should eat ' + weight*.04 + ' pounds of food each day!')
    } else if (weight <= 15 && age >= 1){
         console.log('Your dog weighs ' + weight + ' pounds! ' + 'He should eat ' + weight*.03 + ' pounds of food each day!')
    }  else if (weight <=5 && age <= .3){
      console.log('Your dog weighs ' + weight + ' pounds! ' + 'He should eat ' + weight*.10 + ' pounds of food each day!')
    }  else if (weight <=5 && age <= .6){
      console.log('Your dog weighs ' + weight + ' pounds! ' + 'He should eat ' + weight*.05 + ' pounds of food each day!')
    }
    else if (weight <=5 && age <= .95){
      console.log('Your dog weighs ' + weight + ' pounds! ' + 'He should eat ' + weight*.04 + ' pounds of food each day!')
    }
    }
    console.log(howMuchFoodToEat())
    
  




/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules
// if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

let player1 = Math.floor(Math.random()*3);
let player2 = Math.floor(Math.random()*3);

if (player1 === 0){
  player1 = 'rock'
} else if (player1 === 1){
  player1 = 'paper'
} else if (player1 === 2){
  player1 = 'scissors'
}

if (player2 === 0){
  player2 = 'rock'
} else if (player2 === 1){
  player2 = 'paper'
} else if (player2 === 2){
  player2 = 'scissors'
}
if (player1 === player2){
  console.log('its a tie')
} else if (player1 === 'rock' && player2 === 'paper'){
  console.log('paper wins')
} else if (player1 === 'rock' && player2 === 'scissors'){
  console.log('rock wins')
} else if (player2 === 'rock' && player1 === 'paper'){
  console.log('paper wins')
} else if (player2 === 'rock' && player1 === 'scissors'){
  console.log('rock wins')
} else if (player1 === 'paper' && player2 === 'rock'){
  console.log('paper wins')
} else if (player1 === 'paper' && player2 === 'scissors'){
  console.log('scissors wins')
} else if (player2 === 'paper' && player1 === 'rock'){
  console.log('paper wins')
} else if (player2 === 'paper' && player1 === 'scissors'){
  console.log('scissors wins')
} else if (player1 === 'scissors' && player2 === 'paper'){
  console.log('scissors wins')
} else if (player1 === 'scissors' && player2 === 'rock'){
  console.log('rock wins')
} else if (player2 === 'scissors' && player1 === 'paper'){
  console.log('scissors wins')
} else if (player2 === 'scissors' && player1 === 'rock'){
  console.log('rock wins')
}
console.log('Player 1 chose ' + player1, 'Player 2 chose ' + player2)


  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

let kilometers = prompt("Please enter kilometers:");
let miles = kilometers / 1.6;
console.log(miles + " Miles");



//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  

let feet = prompt("Please enter feet:");
let centimeters = feet * 30.48;
console.log(centimeters + " centimeters");


/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log 
//(number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around 
//(number left over) bottles of soda on the wall`
function annoyingSong(){
    let bottles;
    for (counter = 99; counter >= 1; counter = counter - 1) 
    {
        if (counter == 1) 
        {
            bottles = 'bottle';
        } else 
        {
            bottles = 'bottles';
        }
        console.log(counter+" "+bottles+" of beer on the wall.");
        if (counter < 99) 
        {
            console.log("");
            console.log(counter+" "+bottles+" of beer on the wall.");
        }
        console.log(counter+" "+bottles+" of beer.");
        console.log("Take one down.");
        console.log("Pass it around.");
        if (counter == 1) 
        {
            console.log("No bottles of beer on the wall.");
           
        }
    }
    }
    console.log(annoyingSong());




/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
let grade = Math.floor(Math.random() * 100);
 console.log(grade)
if (grade >= 90) {
  console.log('A');
}
else if 
  (grade >= 80)
  {console.log('B');
}
 else if 
  (grade >= 70)
  {console.log('C');
}
 else if 
  (grade >= 60)
  {console.log('D');
}
 else if 
  (grade <= 59)
 { console.log('F')
}
  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized
// and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object



let player1 = prompt('Choose rock, paper, or scissors')
let player2 = Math.floor(Math.random()*3);

if (player1 === 0){
  player1 = 'rock'
} else if (player1 === 1){
  player1 = 'paper'
} else if (player1 === 2){
  player1 = 'scissors'
}

if (player2 === 0){
  player2 = 'rock'
} else if (player2 === 1){
  player2 = 'paper'
} else if (player2 === 2){
  player2 = 'scissors'
}
if (player1 === player2){
  console.log('its a tie')
} else if (player1 === 'rock' && player2 === 'paper'){
  console.log('paper wins')
} else if (player1 === 'rock' && player2 === 'scissors'){
  console.log('rock wins')
} else if (player2 === 'rock' && player1 === 'paper'){
  console.log('paper wins')
} else if (player2 === 'rock' && player1 === 'scissors'){
  console.log('rock wins')
} else if (player1 === 'paper' && player2 === 'rock'){
  console.log('paper wins')
} else if (player1 === 'paper' && player2 === 'scissors'){
  console.log('scissors wins')
} else if (player2 === 'paper' && player1 === 'rock'){
  console.log('paper wins')
} else if (player2 === 'paper' && player1 === 'scissors'){
  console.log('scissors wins')
} else if (player1 === 'scissors' && player2 === 'paper'){
  console.log('scissors wins')
} else if (player1 === 'scissors' && player2 === 'rock'){
  console.log('rock wins')
} else if (player2 === 'scissors' && player1 === 'paper'){
  console.log('scissors wins')
} else if (player2 === 'scissors' && player1 === 'rock'){
  console.log('rock wins')
}
console.log('Player 1 chose ' + player1, 'Player 2 chose ' + player2)