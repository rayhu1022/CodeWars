// Write a function that returns a sequence (index begins with 1) of all the even characters from a string. If the string is smaller than two characters or 
// longer than 100 characters, the function should return "invalid string".

// For example:

// "abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
// "a"             --> "invalid string"

function evenChars(string) {
    let evenChars = []
    if (string.length > 1 && string.length <= 100) {
        for (i = 1; i < string.length; i += 2) {
            evenChars.push(string[i])
        }
    } else {
        return "invalid string"
    }
    return evenChars
}

console.log(evenChars("a"))
