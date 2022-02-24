var fs = require("fs");
const readlineSync = require("readline-sync");

const txt = process.argv[2];

if (txt) {
    console.log("Non-interactive mode on.\n");

    let file = fs.readFileSync(txt, "utf8");
    parceFile(file);

} else {
    console.log("Interactive mode on.\n");

    consoleInput();
}

function parceFile(string) {
    let parce = string.split(" ");
    let variables = [];
    for (let i = 0; i < parce.length; i++) {
        if (isNaN(parce[i])) {
            return console.log("Input error. Value must be a number.");
        }
        variables.push(Number(parce[i]));
    }

    if (variables[0] === 0)
        return console.log(
            "Error, A cannot be 0.\n Please, change first coefficient in file."
        );
    equationSolver(variables);
}

function consoleInput() {
    let a, b, c;
    let userInput;
    const variables = [];
    do {
        userInput = readlineSync.question("Input a: ");
        a = Number(userInput);
        if (isNaN(a)) {
            a = Number(userInput);
            console.log("Input error. Value must be a number.");
        } else if (a === 0) {
            console.log("Input error. Value cannot be 0.");
        } else {
            variables.push(a);
        }
    } while (isNaN(a) || a === 0);

    do {
        userInput = readlineSync.question("Input b: ");
        b = Number(userInput);
        if (isNaN(b)) {
            console.log("Input error. Value must be a number.");
        } else {
            variables.push(b);
        }
    } while (isNaN(b));
    do {
        userInput = readlineSync.question("Input c: ");
        c = Number(userInput);
        if (isNaN(c)) {
            console.log("Input error. Value must be a number.");
        } else {
            variables.push(c);
        }
    } while (isNaN(c));

    equationSolver(variables);
}

function equationSolver(coefs) {

    const a = coefs[0];
    const b = coefs[1];
    const c = coefs[2];
    console.log(`\nEquation is: ${a}x^2 + ${b}x + ${c}`);
    const discriminant = Math.pow(b, 2) - 4 * a * c;

    if (discriminant < 0) return console.log("The equation does not have roots.");
    if (discriminant > 0) {
        let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        if (x1 === x2) {
            console.log(`There's one root: ${x1}\n`);
        } else console.log(`There's two roots:\nx1 = ${x1}\nx2 = ${x2}\n`);
    } else {
        let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        console.log(`There's one root: ${x1}`);
    }
}