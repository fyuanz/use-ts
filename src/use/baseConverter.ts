import Stack from "../stackObj";

function baseConverter(decNumber: number, base: number): string {
    let stack = new Stack<number>();
    const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let baseString = "";
    if (!(base >= 2 && base <= 36)) {
        return "";
    }
    while (decNumber > 0) {
        stack.push(decNumber % base);
        decNumber = Math.floor(decNumber / base);
    }

    while (!stack.isEmpty()) {
        baseString += digits[stack.pop()];
    }

    return baseString;
}

console.log(baseConverter(35, 36));
