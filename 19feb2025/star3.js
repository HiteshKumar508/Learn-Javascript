for (let i = 1; i <= 5; i++) {
    for (let j = 5; j > i; j--) {
        document.write("&nbsp;&nbsp;");
    }
    for (let k = 1; k <= ((i * 2) - 1); k++) {
        if (i === 1 || i === 5 || k === 1 || k === ((i * 2) - 1)) {
            document.write("*");
        } else {
            document.write("&nbsp;&nbsp;");
        }
    }
    document.write("<br>");
}
