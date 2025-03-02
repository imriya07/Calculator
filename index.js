let string = "";
let buttons = document.querySelectorAll(".button");
let inputField = document.querySelector(".input");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        let value = e.target.innerHTML;

        if (value === "=") {
            try {
                string = eval(string) || "";
                inputField.value = string;
            } catch {
                inputField.value = "Error";
                string = "";
            }
        } else if (value === "C") {
            string = "";
            inputField.value = string;
        } else if (value === "⌫") {
            string = string.slice(0, -1);
            inputField.value = string;
        } else if (value === "%") {
            string = (parseFloat(string) / 100).toString();
            inputField.value = string;
        } else {
            string += value;
            inputField.value = string;
        }
    });
});
