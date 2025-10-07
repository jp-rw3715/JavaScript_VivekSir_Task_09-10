function countdown(secs) {
  let counter = secs;
  const id = setInterval(() => {
    if (counter > 0) {
      console.log(counter--);
    } else {
      clearInterval(id);
      console.log("Time's up!");
    }
  }, 1000);
}
countdown(5); // Example: 5-second countdown
