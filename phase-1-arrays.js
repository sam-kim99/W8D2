// Your code here

// # 1 
// Array.prototype.uniq = function(){
//     let newArray = [];
//     this.forEach((num)=>{
//         if (!newArray.includes(num)) {
//             newArray.push(num);
//         }
//     })
//     return newArray;
// }
// const arr = [1,2,2,3,3,3]
// console.log(arr.uniq()) // => [1,2,3]

// #2
// Array.prototype.twoSum = function(){
//     let newArray = [];
//     for(let i = 0; i < this.length; i++){
//         for(let j = i + 1; j < this.length; j++){
//             if (this[i] + this[j] === 0) {
//                 newArray.push([i, j]);
//             }
//         }
//     }
//     return newArray;
// }

// const arr = [-1, 0, 2, -2, 1]
// console.log(arr.twoSum()) // => [[0,4] [2,3]]

// #3
// Array.prototype.transpose = function(){
//     let newArray = [];
//     for(let i = 0; i < this.length; i++){ // 0
//         let innerArray = [];
//         for(let j = 0; j < this.length; j++){ // 0
//             innerArray.push(this[j][i]);
//         }
//         newArray.push(innerArray);
//     }
//     return newArray;
// }

// const arr = [[0, 1, 2], [3, 4, 5], [6, 7, 8]]
// console.log(arr.transpose()) // => [[0,3,6], [1,4,7], [2,5,8]]