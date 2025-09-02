
//!Leetcode 125
//leetcode list -> https://leetcode.com/problems/valid-palindrome/description/

const check = (s) => {

    let left = 0;
    let right = s.length - 1;

    while (left <= right) {
        if (s[left] === s[right]) {
            left++;
            right--;
        } else {
            return false;
        }
    }
    return true
}

var isPalindrome = function (s) {
    let regex = /[^a-zA-Z0-9]/g;
    let clean = s.replace(regex, '').toLowerCase();
    return check(clean)
}

var result = isPalindrome("9naman9");
console.log(result); //true


///-------------------------------------------
/*
Iteration Walkthrough

Iteration 1:
left = 0, right = 4 → compare s[0] = 'n' and s[4] = 'n'.
They match  → move inward: left++, right--.
Now left = 1, right = 3.

Iteration 2:
Compare s[1] = 'a' and s[3] = 'a'.
They match  → move inward.
Now left = 2, right = 2.

*/
