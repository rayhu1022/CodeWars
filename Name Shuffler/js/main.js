// Write a function that returns a string in which firstname is swapped with last name.

// nameShuffler('john McClane'); => "McClane john"

function nameShuffler(str){
    let toArr = str.split(" ")
    toArr.unshift(toArr[1])
    toArr.pop()
    return toArr.join(" ")
}

console.log(nameShuffler('john McClane'))

// a better way

// function nameSuffle(str){
//     return str.split(' ').reverse().join(' ')
//   }