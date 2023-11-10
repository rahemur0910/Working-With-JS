/*
Declare three variables, one using let, one using var, and one using const, all inside a block scope. Assign
them values and log their values to the console before and after they are declared to demonstrate variable
hoisting.*/

function variableHoisting ()
{
    // Variable declared with let and const are hoisted but not intialized, resulting in undifined
    //console.log(letVariable); //undefined
    //console.log(constVariable); // undefined

    //Variable declared with var are hoisted and initialized with undefined.
    console.log(varVariable); // undefined

    // Assign values to the variable
    let letVariable = 'Let Variable';
    const constVariable = 'const Variable';
    var varVariable = 'var Variable';

    console.log(letVariable);
    console.log(constVariable);
    console.log(varVariable);
}

variableHoisting();
