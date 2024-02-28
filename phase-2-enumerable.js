// Your code here

//Phase 2

//#4
// const doubler = number => number * 2;
// const arr = [1,2,3]

// Array.prototype.myEach = function(callback){

//     for (i = 0; i < this.length; i++) {
//         this[i] = callback(this[i])
//     }
//     return this
// }

// console.log(arr.myEach(doubler))



// #5
// const doubler = number => number * 2;
// const arr = [1,2,3]

// Array.prototype.myMap = function(callback){
//     let newArray = []
//     for (i = 0; i < this.length; i++) {
//         newArray.push(callback(this[i]))
//     }
//     return newArray
// }

// console.log(arr.myMap(doubler))


// #6

// Array.prototype.myReduce = function(callback, initialValue) {
//     let accumulator;
//     let startIndex;
//     if (initialValue !== undefined) {
//         accumulator = initialValue;
//         startIndex = 0;
//     } else {
//         accumulator = this[0];
//         startIndex = 1;
//     }
//     for (i = startIndex; i < this.length; i ++) {
//         accumulator += this[i];
//     }

//     return accumulator
// }


// const arr = [1,2,3]
// const sum = (accumulator, current) => accumulator + current
// console.log(arr.myReduce(sum, 100))