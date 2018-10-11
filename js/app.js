// Enemies our player must avoid
let Enemy = function (x, y) {
  let enemies = ['images/char-boy.png', 'images/enemy-bug.png'];
  this.sprite = enemies[Math.floor((Math.random() * 2))];
  this.x = x;
  this.y = y;
  this.speed = Math.floor((Math.random() * 3) + 1);
};

Enemy.prototype.update = function (dt) {
  this.x += 1 + this.speed;
  if (this.x > 500) {
    this.x = -100;
  }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


//Player
let Player = function() {
  this.players = ['images/char-pink-girl.png',
    'images/char-cat-girl.png',
    'images/char-horn-girl.png',
    'images/char-princess-girl.png'
  ]
 this.sprite = this.players[0];
 this.x = 200;
 this.y = 405;
 this.level = 0;
 this.won = false;
};
Player.prototype.update = function (dt) {
  // Collision detection
  for (let enemy of allEnemies) {
    let deltax = this.x - enemy.x - 15;
    let deltay = this.y - enemy.y - 20;
    let distance = Math.sqrt(deltax * deltax + deltay * deltay);
    if (distance < 56) {
      this.x = 200;
      this.y = 405;
      if (this.level > 0){
        this.level -= 1;
        this.sprite = this.players[this.level];
      }
    }
  }
  // Did player win
  if (this.y < 10) {
    if (this.level === 3){
      this.won = true;
      //go to the next level
    } else {
      this.level += 1;
      this.sprite = this.players[this.level];
      this.x = 200;
      this.y = 405;
      allEnemies = [
        new Enemy(-200, 65),
        new Enemy(-150, 145),
        new Enemy(-100, 230)
      ];
    }
  }
  else if (this.y > 405) {
    this.y = 405;
  }
  else if (this.x < 0) {
    this.x = 0;
  }
  else if (this.x > 400) {
    this.x = 400;
  }
};

Player.prototype.render = function() {
 ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function (dt) {
 switch (dt) {
   case "up":
     this.y -= 83;
     break;
   case "down":
     this.y += 83;
     break;
   case "left":
     this.x -= 100;
     break;
   case "right":
     this.x += 100;
     break;
 }
};


// Place all enemy objects in an array called allEnemies
// Place the player object in a letiable called player
  let allEnemies = [
    new Enemy(-200, 65),
    new Enemy(-150, 145),
    new Enemy(-100, 230)
  ];

  let player = new Player();
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    let allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
