const figlet = require("figlet");

// Function to get the time remaining until 8 PM
function getTimeRemaining() {
  const now = new Date();
  const target = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    20,
    0,
    0
  );

  if (now > target) {
    target.setDate(target.getDate() + 1);
  }

  const difference = target - now;

  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / 1000 / 60) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  return {
    hours,
    minutes,
    seconds,
  };
}

// Function to clear the console
function clearConsole() {
  console.clear();
}

// Function to display text in big format
function displayBigText(text) {
  return new Promise((resolve, reject) => {
    figlet(text, (err, data) => {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        reject(err);
      }
      resolve(data);
    });
  });
}

// Function to display the countdown
async function displayCountdown() {
  const remaining = getTimeRemaining();

  clearConsole();
  console.log(await displayBigText("Starting"));
  console.log(await displayBigText("Soon"));
  console.log(
    await displayBigText(
      `${remaining.hours.toString().padStart(2, "0")}:${remaining.minutes
        .toString()
        .padStart(2, "0")}:${remaining.seconds.toString().padStart(2, "0")}`
    )
  );

  if (
    remaining.hours === 0 &&
    remaining.minutes === 0 &&
    remaining.seconds === 0
  ) {
    clearConsole();
    console.log(await displayBigText("It's Showtime!"));
    clearInterval(interval);
  }
}

// Start the countdown
const interval = setInterval(displayCountdown, 1000);
