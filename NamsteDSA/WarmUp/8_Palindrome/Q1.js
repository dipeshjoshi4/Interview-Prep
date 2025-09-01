

///find a palindrome

// remove last digit = n/10 = remove last digit
// reminider from number(get last digit) = n % 10= last digit
//

var isPalindrome = function (n) {

    //for negative

    if (n < 0) return false

    let nCopy = n

    let reverse = 0;
    while (n > 0) {
        let reminder = n % 10;
        reverse = (10 * reverse) + reminder;
        n = Math.floor(n / 10);
    }

    // if (reverse === nCopy) {
    //     return true;
    // } else {
    //     return false;
    // }

    return reverse === nCopy //?if it equal then its give true if not equal automatically give false

}


var result = isPalindrome(2552)
var result2 = isPalindrome(-2552)

console.log(result); //?true
console.log(result2); //?false


//leetcode list -> https://leetcode.com/problems/palindrome-number/solutions/