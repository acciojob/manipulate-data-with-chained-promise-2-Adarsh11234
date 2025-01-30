document.addEventListener("DOMContentLoaded", () => {
  const outputDiv = document.getElementById("output");

  function getNumbers() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([1, 2, 3, 4]); // Resolving after 3 seconds
      }, 3000);
    });
  }

  getNumbers()
    .then((numbers) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const evens = numbers.filter(num => num % 2 === 0);
          outputDiv.textContent = `Filtered Evens: ${evens.join(", ")}`;
          resolve(evens);
        }, 1000);
      });
    })
    .then((evens) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const doubled = evens.map(num => num * 2);
          outputDiv.textContent = `Doubled Evens: ${doubled.join(", ")}`;
          resolve(doubled);
        }, 2000);
      });
    });
});

