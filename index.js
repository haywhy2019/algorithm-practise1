/*challeng1: reverse a string
return a string in reverse
ex. reverseString('hello') === 'olleh
*/


function reverseString(str) {
    const strArr = str.split('');
    //splits a string into its different character nin an array
    strArr.reverse();
    //reverses the array
    return strArr.join('');
  // changes the array back to a string
}

console.log(reverseString('hello'));

////////// using a decreasing for loop

 function reverseString2(str){
     let revString2 = ''
    for(let i = str.length-1; i>=0; i--) {
        revString2 +=(str[i])
    }
    return revString2
}
    console.log(reverseString2('home'))

    //using an incremental for loop

    function reverseString3(str){
        let revString3 = ''
       for(let i = 0; i<= str.length-1; i++) {
           revString3 = str[i] + revString3
       }
       return revString3
   }
       console.log(reverseString3('home3'))

//// for of loop

function reverseString4(str){
    let revString4 = ''
 for(let char of str) {
     revString4 = char + revString4;
 }
   return revString3
}
   console.log(reverseString3('home4'))

   // using a for each
   function revString5(str){
    let revString = '';
    str.split('').forEach(char => {
        revString = char + revString
    });
    return revString
   }
   console.log(revString5('home5'))
  
   //reduce method

   function revString6(str){
       return str.split('').reduce((revString, char)=> char + revString, '');

   }
   console.log(revString6('home6'));
   
   /*challeng 2: validate a plaiddrome
   return true if palindrome and false if not 
   ex. isPalindrome('racecar') ==='true' , isPalindrome('hello') == false)
   tips
   1) reverse the strings/loop through and reverse
   2) compare the reversed string to the new string or the same
   it returns true or false
*/

function isPalindrome(str, string){
    let revString20 = '';
    for(char of str) {
    revString20 = char + revString20
    }
    if(revString20 == string){
        return true
    }else{
        return false
    }
}
console.log(isPalindrome('tot', 'car'))

function isPalindrome2(str){
    let revString20 = '';
    for(char of str) {
    revString20 = char + revString20
    }
    return revString20 == str
}
console.log(isPalindrome2('tope'))

//using the reverse method in the first algorithm
//changes to an array with .split();
//reverses with .reverse();
//changes back to astring with .join();


function isPalindrome3(str) {
    const revString = str.split('').reverse().join('');
    return revString === str;
}

console.log(isPalindrome3('aaa'))



/*
CHALLENGE 3: REVERSE AN INTEGER
return an interger in reverse
ex. reverseInt(532) == 235
*/

function reverseInt(int){
    //changed  number to string
    //split it to get the individual numbers and .split() changed it to an array
    // reversed the numbers using an array method .reverse()
  //  changed it back to a string using .join('')
  //changed it to an interger using  parseInt() method 

    const reverseInt = int.toString().split('').reverse().join('');
    return parseInt(reverseInt) * Math.sign(int)
}

const output = reverseInt(12345)
console.log(output) 
