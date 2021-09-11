# ✂️ Rock, Paper, Scissor in the Console

I've been running commands in the browser console more than usual lately and I was thinking last night that it might be fun to write some code that runs a game in there. No webpage, or fancy styling, just JavaScript. So here it is. (I spent more time writing this readme than writing the program, so please don't judge.)

— Jason, September 10, 2021

## But Why
I feel like everyone goes through the practice of making a Rock, Paper, Scissors game when they start out programming, and that's who I hope can get something out of this. There's a million ways you could write this game, and here's just one more. Now there's some wacky stuff in here that you'd never do "in real life", but I think this is still a fun toy that brings in some neat tools and concepts with literally zero barrier to entry – You've already got a web browser; here's some code you can run right away.† Once you've played the game (or before!), have a look through and try to follow the paths of the program, and why I might've done things this way or that way, or how you might do them differently.

## How to use this
- Open a new tab in your browser
- Open the developer tools panel: View > Developer > Developer Tools (On Chrome)
- Go to the JavaScript console, if it's not already open: 
  - Select the 'Console' tab at the top.
  - There's a chance it might be hidden in a *see more* menu. It looks like this `>>` in Chrome.
  - You should now see a blank area with a prompt (`> `) and your typical blinking text cursor
    ```
    > you can type in there|
    ```
- Paste the contents of `game.js` in there and hit `ENTER`†
- "Call" the function that starts the game: 
  - Enter this into the JS console:
    ```javascript
    playRockPaperScissors();
    ```
- Enjoy

## ⚠️ Note
† In general it's probably **not** a great idea to paste code into your console unless you know what it does. But there's no funny business in here, I promise!