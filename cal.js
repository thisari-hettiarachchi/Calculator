const display = document.querySelector(".display");

        function appendToDisplay(input) {
            display.value += input;
        }

        function clearDisplay() {
            display.value = "";
        }

        function calculate() {
            try {
                display.value = eval(display.value.replace(/x/g, '*'));
            } catch (error) {
                display.value = "Syntax error";
            }
        }

        function toggleSign() {
            if (display.value) {
                display.value = (parseFloat(display.value) * -1).toString();
            }
        }

        function calculatePercentage() {
            if (display.value) {
                display.value = (parseFloat(display.value) / 100).toString();
            }
        }

        