// Your code here

// Array.prototype.bubbleSort = function() {
//     let sorted = true;
//     while (sorted) {
//         sorted = false;

//         let i = 0;
//         while (i < this.length - 1) {
//             if (this[i] > this[i + 1]) {
//                 let temp = this[i];
//                 this[i] = this[i + 1];
//                 this[i + 1] = temp;
//                 sorted = true;
//             }
//             i++;
//         }
//     }
//     return this;
// }

// const arr = [6, 321, 2, 12, 56, 21]
// console.log(arr.bubbleSort())


// String.prototype.substrings = function() {
//     let newArray = []; 
//     for(let i = 0; i < this.length; i++){ 
//         newArray.push(this[i])
//         for(let j = i + 1; j < this.length; j++){ 
//             newArray.push(newArray[newArray.length - 1] + this[j]);
//         }
//     }
//     return newArray;
// }

// const str = "catch"
// console.log(str.substrings())