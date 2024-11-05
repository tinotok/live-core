
# Stream Countdown Timer

This is a Node.js script that creates a visual countdown timer for your streaming session. It displays a large, ASCII art countdown to 8 PM, perfect for setting up before your stream starts.

## Features

- Displays a countdown to 8 PM in large ASCII art
- Automatically adjusts for the next day if it's already past 8 PM
- Shows "It's Showtime!" when the countdown reaches zero

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js (version 12.0 or later recommended)
- You have a basic understanding of JavaScript and running Node.js scripts

## Installing Stream Countdown Timer

To install the Stream Countdown Timer, follow these steps:

1. Clone this repository or download the script file.
2. Navigate to the directory containing the script.
3. Run the following command to install the required dependencies:

   ```
   npm install figlet
   ```

## Using Stream Countdown Timer

To use the Stream Countdown Timer, follow these steps:

1. Open a terminal or command prompt.
2. Navigate to the directory containing the script.
3. Run the following command:

   ```
   node index.js
   ```

   (Replace `index.js` with the actual name of your script file if different)

4. The countdown will start and update every second until it reaches 8 PM.

## Configuration

You can modify the target time by changing the following line in the `getTimeRemaining` function:

```javascript
const target = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 20, 0, 0);
```

Change `20` to the hour you want to countdown to (in 24-hour format).

## Contributing to Stream Countdown Timer

To contribute to Stream Countdown Timer, follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push to the original branch: `git push origin <project_name>/<location>`
5. Create the pull request.

Alternatively, see the GitHub documentation on [creating a pull request](https://help.github.com/articles/creating-a-pull-request/).

## Contributors

Thanks to the following people who have contributed to this project:

* [@tinolaomahei](https://github.com/tinolaomahei) 📖

## Contact

If you want to contact me, you can reach me at `<me@tino.nz>`.

## License

This project uses the following license: [MIT License](https://opensource.org/licenses/MIT).
