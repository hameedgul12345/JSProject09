// JAVASCRIPT PRACTICE PROBLEMS

// 1. TABLE PRINT KARE
// DESCRIPTION: user se koi number le and uska table 10 tk print kare

// var number = prompt('Enter The Number You Want To print Table for')
// for(var i = 1; i <= 10; i++){
//     console.log(`${i} X ${number} = ${i * number}`)
// }

// 2. ARRAY ELEMENTS KA SUM PRINT KARE
// DESCRIPTION:
// 1. user se 5 numbers le and unko aik aik kar k array me rakhe
// 2. phr array elements ka sum find kar k print kare
// var numbers = [];
// var sum = 0;
// for(var i = 0; i < 3; i++){
//   var newElement = +prompt('Enter Elements')
//   numbers.push(newElement)
//   sum = sum + numbers[i];

// }
// console.log(sum)


// 3. ARRAY KA SUB SE BARA NUMBER PRINT KARE
// DESCRIPTION:
// 1. user se 5 numbers le and unko aik aik kar k array me rakhe
// 2. phr array elements me SUB SE BARA NUMBER find kar k print kare

// var data = [];
// var bigNumber = 0;
// for(i = 0; i <= 5; i++){
//     var newElement = +prompt('Enter')
//     data.push(newElement)
//     if(bigNumber < data[i]){
//       bigNumber = data[i]
//     }
// }
// console.log(bigNumber)

// 4. USER SE STRING LE AND USKO ULTA PRINT KARE
// DESCRIPTION:
// 1. user se koi b string input le
// 2. usko reverse me print karde e.g: mehtab -> bathem


var Name = prompt('Enter Your Name')
reverseName = '';
for(var i = Name.length-1; i>=0 ; i--){
  reverseName = reverseName + Name[i]
}
console.log(reverseName)


// 5. FACTORIAL
// DESCRIPTION:
// 1. user se koi b NUMBER input le
// 2. us number ka factorial find kr k print kare
// 3. factorial def:
// the product of an integer and all the integers below it; e.g. factorial four ( 4! ) is equal to 24.
// 4 * 3 * 2 * 1 = 24
// var userInput = +prompt('Enter The Nnumber')
// var factorial=1;
// for(var i =1; i <userInput; i++){
//     factorial = factorial * i;
// }
// console.log(factorial)

