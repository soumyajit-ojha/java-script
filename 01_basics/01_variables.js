//  In this tutorial it define about the types of variables.
/* 
const:
var:
let:

scope: 
*/

const labName = "Cortex Lab";
let labId = "OX47LBCRLB";
let labState;
var labLocation = "Austrelia";

labOwner = "Henery Patinson"

// Now try to change the value of all variable above.

// labName = "Nuraline Mentix" // NOT ALLOWED

labId = "OX39LBNRMN"
labLocation = "North Korea"
labOwner = "Kim Huan Chem"

console.log(labName)
console.table([labName, labId, labState, labLocation, labOwner])

/* 
NOTE: 
1. In JS we cannot change the constant variables.
2. prefer not to use var for variables.
    - Because if block scope issue or functional scope.
3. By default the value of variable is undefined.
*/