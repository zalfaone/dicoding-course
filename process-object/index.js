const initialMemoryUsage = process.memoryUsage().heapUsed;
const yourName = process.argv[2];
const environment =
  process.env.NODE_ENV !== "production" ? "localhost" : "dicoding.com";

for (let i = 0; i <= 10000; i++) {}

const currentMemoryUsage = process.memoryUsage().heapUsed;

console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`);
console.log(
  `Memory usage from: ${initialMemoryUsage} up to ${currentMemoryUsage}`
);
