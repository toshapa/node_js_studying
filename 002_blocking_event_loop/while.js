// const { timeStamp } = require("console");

let isRunning = true;

let timer = () => {
    return performance.now().toFixed(2);
};

setTimeout(() => (isRunning = false), 0);
process.nextTick(() => {
    console.log('next Tick .. '), timer();
});

while (isRunning) {
    console.log(`While is running seconds ${timer()}`);
}
