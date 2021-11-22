
for (var i = 0; i < 4; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click", function () {

        var buttonPressed = this.innerHTML;
        var num1 = Number(document.querySelector(".first").value);
        var num2 = Number(document.querySelector(".second").value);
        var sum = num1 + num2;
        var div = num1 / num2;
        var sub = num1 - num2;
        var mul = num1 * num2;
        switch (buttonPressed) {
            case "+":
                document.querySelector("p").innerHTML = "Your answer is:"+sum;
                break;
            case "-":
                document.querySelector("p").innerHTML = "Your answer is:"+sub;

                break;
            case "/":
                document.querySelector("p").innerHTML = "Your answer is:"+div;
                break;
            case "*":
                document.querySelector("p").innerHTML = "Your answer is:"+mul;
                break;
            default:

        }
    })
}

    // document.querySelector(".btn1").addEventListener("click",function(){
    //     alert("I am pressed!!!");
    // }
    // )