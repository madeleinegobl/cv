
window.addEventListener("load", () => {
    const printToPdfButtonElement = window.document.getElementById("print-to-pdf");
    printToPdfButtonElement.addEventListener("click", () => {
        window.print();
    });
});