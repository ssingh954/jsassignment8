/*
Question 3. Create a set object with four random numbers from 0 to 10. Check if this newly created set object has 8 in it. Use set object methods.
*/

const nums = new Set();
while(nums.size !== 4) {
  nums.add(Math.floor(Math.random() * 10) + 0);
}

console.log([...nums]);
console.log(nums.has(8));