function funcone() {
    // console.log(calculator.display.value);
    // if (calculator.display.value == "0")
    //     calculator.display.value = "1";
    // else if (calculator.display.value != "0")
    calculator.display.value += "1";
}

function functwo() {
    // if (calculator.display.value == "0")
    //     calculator.display.value = "2";
    // else if (calculator.display.value != "0")
    calculator.display.value += "2";
}

function functhree() {
    // if (calculator.display.value == "0")
    //     calculator.display.value = "3";
    // else if (calculator.display.value != "0")
    calculator.display.value += "3";
}

function funcplus() {
    // if (calculator.display.value == "0")
    //     calculator.display.value = "+";
    // else if (calculator.display.value != "0")
    calculator.display.value += "+";
}

function funcfour() {
    // if (calculator.display.value == "0")
    //     calculator.display.value = "4";
    // else if (calculator.display.value != "0")
    calculator.display.value += "4";
}

function funcfive() {
    // if (calculator.display.value == "0")
    //     calculator.display.value = "5";
    // else if (calculator.display.value != "0")
    calculator.display.value += "5";
}

function funcsix() {
    // if (calculator.display.value == "0")
    //     calculator.display.value = "6";
    // else if (calculator.display.value != "0")
    calculator.display.value += "6";
}

function funcminus() {
    // if (calculator.display.value == "0")
    //     calculator.display.value = "-";
    // else if (calculator.display.value != "0")
    calculator.display.value += "-";
}

function funcseven() {
    // if (calculator.display.value == "0")
    //     calculator.display.value = "7";
    // else if (calculator.display.value != "0")
    calculator.display.value += "7";
}

function funceight() {
    // if (calculator.display.value == "0")
    //     calculator.display.value = "8";
    // else if (calculator.display.value != "0")
    calculator.display.value += "8";
}

function funcnine() {
    // if (calculator.display.value == "0")
    //     calculator.display.value = "9";
    // else if (calculator.display.value != "0")
    calculator.display.value += "9";
}

function funcmul() {
    // if (calculator.display.value == "0")
    //     calculator.display.value = "*";
    // else if (calculator.display.value != "0")
    calculator.display.value += "*";
}

function funczero() {
    // if (calculator.display.value == "0")
    //     calculator.display.value = "0";
    // else if (calculator.display.value != "0")
    calculator.display.value += "0";
}


function funcequals() {
    let num = eval(calculator.display.value).toPrecision(5);

    calculator.display.value = num;

}

function funcdivide() {
    // if (calculator.display.value == "0")
    //     calculator.display.value = "/";
    // else if (calculator.display.value != "0")
    calculator.display.value += "/";
}