const timer = process.argv.splice(2);
let seconds = timer.sort();

for (let i = 0; i < seconds.length; i++) {
  if (seconds[i] < 0 || isNaN(seconds[i]) || seconds[i] === "") {
    continue;
  }
  setTimeout(() => {
    process.stdout.write('\x07');
  }, seconds[i] * 1000);
}
  