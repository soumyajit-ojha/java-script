// In this module I discuss about Heap and Stack memory.

/*
memory 2 types: 
    1. Stack (Primitive) -> provide a copy of value
        - Stack memory is a structured memory region used to store:
        - It follows the LIFO (Last In First Out) principle.
        
        - Primitive values
            Number, String, Boolean, null, undefined, Symbol, BigInt
        - Function calls
        - Execution contexts
        - Local variables

    2. Heap (Reference or Non-Premitive) -> provide a reference
        - Heap memory is used for storing reference data types.
        - Objects, Arrays, Functions, Class instances, Dates, Maps, Sets

        Why Heap Exists
        - Objects can be large and dynamic, so they cannot fit in stack memory.
*/

let st = "Red Apple";
let st2 = st;
st2 = "Red Cherry";

console.log(st);
console.log(st2);
// NOTE: it change the st2 not st1.
// because st2 contains the copy of st not reference of st.
// There Prmitive datas are stored on stack not heap. and give a copy instead of reference.

let myObj = {
  name: "Contra",
  score: 334,
};

let myObj2 = myObj;
myObj2.name = "Mobile Legend";
myObj2.score = "556";

console.log(myObj);
console.log(myObj2);

// NOTE: Here the value changes on myObj2 made effect to myObj.
// This because the value myObj2 has the reference of myObj which stored on Heap Spae.
// Heap space store the non-primitive data and provide a reference to variables.

// Why stack store primitive data and why keap store non-primitive data?
