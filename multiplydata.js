/* Write a function called "multiplyNumbers" that takes two numbers as arrgumnet and return their product. Use function expressions to define the function and call the function before it is declared to demonstrate hoisting*/

const multiplyNumbers = function(number1,number2)
{
    return number1*number2;
}

console.log(multiplyNumbers(35,50)); // referenceerror : Cannot acess 'multiplyNumbers' before initialization

