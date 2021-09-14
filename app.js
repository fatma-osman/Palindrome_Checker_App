
function palindrome() {
    let inpStr=document.getElementById("text").value;
    //console.log(inpStr)

    //reverse the input string
    const reversed = inpStr.split("").reverse().join("");
    //console.log(reversed)

    
    if (inpStr === reversed){
        document.getElementById("text2").value= "Yay! A palindrome"
    }else {
        document.getElementById("text2").value="Nope, No palindrome";
    }
}

