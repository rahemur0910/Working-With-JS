/*Declare a variable using let inside a block scope and attempt to log its value to the console Aefore it is assigned a value to demonstrate the temporal dead zone.*/

function deadZone()
{
    // Trying to access the variable before declaration results in a ReferenceError
    try
    {
        console.log(variableInTDZ);// ReferenceError: Cannot access 'variableInTDZ' before initialization
    }
    catch(error)
    {
        console.error(error.message);
    }

    //Decleare a varibale using let inside a block scope
    let variableInTDZ;
    // Trying to access the variable after declaration but before assignment still results in a ReferenceError
    try // ReferenceError: Cannot access 'variableInTDZ' before initialization
    {
        console.log(variableInTDZ);
    }
    catch(error){
        console.error(error.message);
    }

    //Assign a value to the variable
    variableInTDZ = 'Temporal Dead Zone';

    // Log the value to the console  after assignment
    console.log(variableInTDZ);
}

deadZone();