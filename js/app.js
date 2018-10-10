// Enemies our player must avoid
var Enemy = function (x, y) {
  this.sprite = 'images/enemy-bug.png';
  this.x = x;
  this.y = y;
};

Enemy.prototype.update = function (dt) {
  this.x += 1;
  if (this.x > 500) {
    this.x = -100;
  }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
 this.sprite = 'images/char-boy.png';
 this.x = 200;
 this.y = 405;
};
Player.prototype.update = function (dt) {
  // Collision detection
  for (let enemy of allEnemies) {
    let deltax = this.x - enemy.x - 15;
    let deltay = this.y - enemy.y - 20;
    let distance = Math.sqrt(deltax * deltax + deltay * deltay);
    if (distance < 56) {
      this.y = 405;
    }
  }
  // Did player win
  if (this.y < 10) {
    console.log('woot!');
    this.y = 405;
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

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
  var allEnemies = [new Enemy(-200, 65), new Enemy(-150, 145), new Enemy(-100, 230)];

  var player = new Player();
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
