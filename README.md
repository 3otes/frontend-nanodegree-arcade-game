# frontend-nanodegree-arcade-game

## Table of Contents

* [Introduction](#introduction)
* [Rubric](#rubric)
* [Contributing](#contributing)
* [Code-explained](#code-explained)
* [HTML](#html)
* [CSS](#css)
* [Java-Script](#java-script)
* [Play-game](#play-game)

## Introduction

Provided with visual assets and a game loop engine this project involved using these tools to add a number of entities to the game including the player characters, and enemies to recreate a simplified version of the classic arcade game Frogger.

## Rubric

Using this [rubric](https://review.udacity.com/#!/projects/2696458597/rubric) I wrote some **object-oriented** - functions to work with the existing code provided.
more on the help available:
For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).

[Table of Contents](#table-of-contents)

## Contributing

**PLEASE DO NOT CONTRIBUTE TO THIS PROJECT AS IT IS A COMPLETED TEST**

[Table of Contents](#table-of-contents)

## Code-explained

So to understand the code let's start with the files that make up this game.

* HTML
* CSS
* JavaScript

[Table of Contents](#table-of-contents)

## HTML
For this project the HTML was limited, as the game itself uses JavaScript. I made some additions to the HTML purely for my own project to match the styling of my other projects.

[Table of Contents](#table-of-contents)

## CSS
The CSS file provided basically centered the page content. It was not a requirement for this project to change the CSS but to match the styling of my other projects I added some of their styles. This presented somewhat of a challenge as the styling for the game itself was not in the CSS but was appended to the document body using JavaScript. To simply get around this I just changed "min-height: 605px;" and "margin: 363px 0 0 0px;" for the .deck style and set "position: absolute;" with a "z-index: -1;" so that the canvas created in JavaScript is on top of the background.
```
.deck {
    width: 660px;
    min-height: 605px;
    margin: 363px 0 0 0px;
    background-color: rgba(28, 38, 47, 0.7);
    position: absolute;
    z-index: -1;
}
```

[Table of Contents](#table-of-contents)

## Java-Script
The project came with most of the work done in that it already had 3 JavaScript files. app.js, engine.js, and resources.js. Everything was already laid out, and with the help of the many many tutorials it was just a matter of filling in the blanks already provided in the app.js file. Ok it was not that easy, but compared to what I thought it was going to be Udacity really simplified it.

To explain what is happening in app.js, I found [this](https://discussions.udacity.com/t/i-dont-understand-how-to-code-classic-arcade-game/527836/2?u=solittletime) very helpful in getting started, and [this](https://matthewcranford.com/arcade-game-walkthrough-part-6-collisions-win-conditions-and-game-resets/) very helpful to make the game pause at the end.

[Table of Contents](#table-of-contents)

## Play-game

[HERE](http://www.encoreservices.co.za/udacity/ClassicArcadeGame/index.html) is a link to the game hosted by Encore Services, have fun and please let me know if you encounter any bugs. This game is not built to be responsive across different devices.

[Table of Contents](#table-of-contents)
