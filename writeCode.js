//1=====================================================================
function addToZero(arr) {
  for (let i = 0; i < arr.length; i++) { 
    for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === 0) {
        console.log('true')
    } else {
        console.log('false')
    }
        }
    }
}

// addToZero([1, 2, 3])
// addToZero([1, 2, 3, -2])
// I believe the runtime of this is O(n^2) because there are two loops

//2====================================================================
function hasUniqueChars(word) {
    for (let i = 0; i < word.length - 1; i++) {
        for (let j = i + 1; j < word.length; j++) {
        if (word[i] == word[j]) {
            console.log('false')
        }
        }
    }
    console.log('true');
}

// hasUniqueChars('yes')
// hasUniqueChars('noo')
// hasUniqueChars('yep')
// This also has a runtime of O(n^2) because of two for loops

//3====================================================================
function isPangram(sentence){
    let lowerSentence = sentence.toLowerCase()
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    
    for (let i = 0; i < alphabet.length; i++) {
      if(lowerSentence.indexOf(alphabet[i]) < 0){
        console.log('false')
      }
    }
    console.log('true')
}

// isPangram('the quick brown fox jumps over the lazy dog')
// isPangram("I like cats, but not mice")
//This is probablly a runtime of O(n) because one loop. 

//4=====================================================================
function findLongestWord(array) {
    var longestWord = "";
  
    array.forEach(function(word) {
      if(word.length > longestWord.length) {
        longestWord = word
      }
    });
  
    return longestWord
}

var word = findLongestWord(['joe', 'pineapple', 'water', 'verylongword'])
// console.log(word.length)
//This is O(n) since it loops and depends on the amount of words to loop through
