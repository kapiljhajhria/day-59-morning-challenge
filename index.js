// @ts-check

// Layers in a Rug
// Write a function that counts how many concentric layers a rug.

// Examples
// countLayers([
//   "AAAA",
//   "ABBA",
//   "AAAA"
// ]) ➞ 2
function countLayers(rug) {
    var count =0;
        var selectedChar = rug[0].charAt(0)
        for(var i=0;i<rug.length;i++){
            var listFromWord= rug[0].split()
            listFromWord= removeElement(listFromWord,selectedChar)
            rug[0]=listFromWord.join()
            count++
            i++
        }
    return count;
}
// function setCharAt(str,index,chr) {
//     if(index > str.length-1) return str;
//     return str.substr(0,index) + chr + str.substr(index+1);
// }

// String.prototype.replaceAt=function(index, replacement) {
//     return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
// }
// countLayers([
//   "AAAAAAAAA",
//   "ABBBBBBBA",
//   "ABBAAABBA",
//   "ABBBBBBBA",
//   "AAAAAAAAA"
// ]) ➞ 3
console.log(countLayers([
    "AAAA",
    "ABBA",
    "AAAA"
]))
console.log(countLayers([
    "AAAAAAAAAAA",
    "AABBBBBBBAA",
    "AABCCCCCBAA",
    "AABCAAACBAA",
    "AABCADACBAA",
    "AABCAAACBAA",
    "AABCCCCCBAA",
    "AABBBBBBBAA",
    "AAAAAAAAAAA"
  ]))
// countLayers([
//   "AAAAAAAAAAA",
//   "AABBBBBBBAA",
//   "AABCCCCCBAA",
//   "AABCAAACBAA",
//   "AABCADACBAA",
//   "AABCAAACBAA",
//   "AABCCCCCBAA",
//   "AABBBBBBBAA",
//   "AAAAAAAAAAA"
// ]) ➞ 5


//BBBB
//BAAB
//BAAB
//BBBB

function removeElement(listOfBool,removeThis) {
    var first = listOfBool[0] 
    var last = listOfBool[listOfBool.length-1]
      while(first==removeThis || last==removeThis){
        first==removeThis?listOfBool.shift():listOfBool.pop()
        first = listOfBool[0] 
        last = listOfBool[listOfBool.length-1]
      }
      return listOfBool
    }

    console.log(removeElement([true,true,true],true))