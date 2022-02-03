/**
 * @param {number} x
 * @return {boolean}
 */
 
 var isPalindrome = function(x) {
    const r = x;
    var div = 0;
    var temp = 0;
    while(x!==0){
        div =  Math.floor(x/10);
        temp = (temp*10)+  x % 10;
        x= div;
    }
    if(r==temp){
        console.log("Palindrome");
        return true;
    }else{
        console.log("Not Palindrome");
        return false;} 
        

    
};
isPalindrome(345);
