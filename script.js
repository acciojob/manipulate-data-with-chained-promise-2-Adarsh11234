document.getElementById("btn").addEventListener("click", function () {
    const outputDiv = document.getElementById("output");
    
    function getNumbers() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([1, 2, 3, 4]);
            }, 3000);
        });
    }
    
    getNumbers()
        .then((numbers) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const evenNumbers = numbers.filter(num => num % 2 === 0);
                    outputDiv.textContent = `Result: ${evenNumbers.join(", ")}`;
                    resolve(evenNumbers);
                }, 1000);
            });
        })
        .then((evenNumbers) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const doubledNumbers = evenNumbers.map(num => num * 2);
                    outputDiv.textContent = `Result: ${doubledNumbers.join(", ")}`;
                    resolve(doubledNumbers);
                }, 2000);
            });
        })
        .catch((error) => {
            outputDiv.textContent = `Error: ${error.message}`;
        });
});
