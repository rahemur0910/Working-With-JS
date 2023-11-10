/*
Write a function that takes two numbers as arguments and returns their sum. Declare a variable inside
the function using the var keyword and log its value to the console before it is assigned a value to
demonstrate variable hoisting.
*/

function addNumbers(number1,number2)
{
    //console.log(sum);// undifiend
    var sum;
    sum = number1+number2;
    console.log(sum);
    return sum;
}
addNumbers(5,10);