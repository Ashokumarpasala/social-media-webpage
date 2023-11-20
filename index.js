// Array with different data types
const mixedArray = [
    42,                    // Number
    "Hello, World!",       // String
    true,                  // Boolean
    null,                  // Null
    undefined,             // Undefined
    ["apple", "banana"],   // Array
    { key: "value" },      // Object
    function() {           // Function
      console.log("Function called");
    }
  ];
  
  // Accessing elements in the array
  console.log(mixedArray[0]); // Output: 42
  console.log(mixedArray[1]); // Output: Hello, World!
  console.log(mixedArray[2]); // Output: true
  console.log(mixedArray[5][1]); // Output: banana
  console.log(mixedArray[6].key); // Output: value
  
  // Calling the function stored in the array
  mixedArray[7](); // Output: Function called
  