<script>
//script.js
function checkYuGiOh(n) {
    //create empty array
    var array = [];
    //validates n to see if its a string then pushes the string as an output
    if(!Number.isInteger(n)){
         array.push(n+ " is meh");
    }else {
    //if n is an integer then it checks for multiples of 2 3 and 5 and replaces them with yu, gi, oh
    for (var i = 1; i <= n; i++) {
        if ( i % 2 == 0 && i % 3 != 0 && i % 5 != 0) {
             array.push("yu");
        } else if ( i % 2 != 0 && i % 3 == 0 && i % 5 != 0 ) {
            array.push("gi");
        } else if ( i % 2 != 0 && i % 3 != 0 && i % 5 == 0) {
            array.push("oh");
        } else if ( i % 2 == 0 && i % 3 == 0 && i % 5 != 0) {
            array.push("yu-gi");
        } else if ( i % 2 == 0 && i % 3 != 0 && i % 5 == 0 ) {
            array.push("yu-oh");
        } else if (i % 2 != 0 && i % 3 == 0 && i % 5 == 0 ) {
            array.push("gi-oh");
        } else if ( i % 2 == 0 && i % 3 == 0 && i % 5 == 0 ) {
             array.push("yu-gi-oh");
        } else {
            array.push(i);
        }
        
    }
    }
    //returns the array
    return array;
}
//logs the result in the console
console.log(checkYuGiOh());

</script>