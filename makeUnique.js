function removeDuplicates(string) {
    let uniqueChar = ''
    for(const chr of string){
        if(uniqueChar.includes(chr) === false){
            uniqueChar += chr;
        }
    }
    return uniqueChar
}

console.log(removeDuplicates('helloworld'))
console.log(removeDuplicates('iwanttoclimbamountain'))
console.log(removeDuplicates('devmountain'))

// First begin by creating a variable to store your unique characters. 
// Then, loop through your string using for of loop. 
// The for loop will use an iterator to check to see if a character is 
// repeated in the string. 
// If the character is not repeated (aka it is false), it will be added to
// variable you created. Then, it will check the next iteration, until all
// of the characters have been checked. 
// Finally, the unique characters (stored if your variable) are returned as a string. 