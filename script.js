function getNumbers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 2000);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const outputDiv = document.getElementById("output");

    getNumbers()
        .then((numbers) => {
            return new Promise((resolve) => {
                const evenNumbers = numbers.filter(num => num % 2 === 0);
                outputDiv.textContent = `Result: ${evenNumbers.join(", ")}`;
                setTimeout(() => resolve(evenNumbers), 1000);
            });
        })
        .then((evenNumbers) => {
            return new Promise((resolve) => {
                const doubledNumbers = evenNumbers.map(num => num * 2);
                outputDiv.textContent = `Result: ${doubledNumbers.join(", ")}`;
                setTimeout(() => resolve(doubledNumbers), 2000);
            });
        })
        .catch((error) => {
            outputDiv.textContent = `Error: ${error.message}`;
        });
});
