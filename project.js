let str = "";
let buttons = document.querySelectorAll(".btn");

Array.from(buttons).forEach((buttons) => {
    buttons.addEventListener('click', (e) => {
        if (e.target.innerHTML == "=") {
            str = eval(str);
            document.querySelector(".screen").value = str;
        } else if (e.target.innerHTML == "AC") {
            str = "";
            document.querySelector(".screen").value = str;
        } else {
            console.log(e.target);
            str = str + e.target.innerHTML;
            document.querySelector(".screen").value = str;
        }
    })
})