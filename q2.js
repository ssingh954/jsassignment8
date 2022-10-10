
/*
 a. Creating new set object
*/

var objectname=new Object();  

/*
 b. Adding new element to set object
 setObj.add(value);
*/



const mySet1 = new Set()
mySet1.add(1)           // Set [ 1 ]
mySet1.add(5)           // Set [ 1, 5 ]


/*
 c. Deleting element from set object
*/

const set1 = new Set(['one', 'two', 'three']);

set1.delete('two');

console.log(set1); // 👉️ {'one', 'three'}