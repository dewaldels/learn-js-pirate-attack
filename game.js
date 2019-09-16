// IIFE
(function (win) {

    // Game Object
    const Game = function () {
        this.gameover = false;
        this.winner = null;
        this.didPlayerWin = function() {
            return this.winner === 'player';
        }
    };

    // Enemy object
    const enemy = {
        health: 15,
        attack: function () {
            player.health -= 2;
        }
    }

    // Player object
    const player = {
        name: '',
        health: 20,
        takeWeapon: function (weapon) {
            this.weapon = weapon;
        },
        attack: function () {
            if (game.gameover === false) {
                let damage = 0;

                switch (this.weapon) {
                    case 'sword':
                        damage = 2;
                        break;
                    case 'pistol':
                        damage = 3;
                        break;
                    case 'knife':
                        damage = 1;
                        break;
                    case 'fists':
                        damage = 0;
                        break;
                }
                enemy.health -= damage;
                enemy.health = enemy.health < 0 ? 0 : enemy.health;
                let result = `${this.name} did ${damage} damage! The enemy has ${enemy.health} health left!`
                if (damage === 0) { // No effect! 
                    enemy.attack();
                    result = `${this.name} tried to attack the enemy with his bare hands It had no effect! The enemy did a counter attack! You have ${this.health} left!`;
                }
                if (enemy.health === 0) {
                    game.gameover = true;
                    game.winner = 'player';
                } else if (this.health === 0) {
                    game.gameover = true;
                    result = 'You have lost! The enemy overtakes the ship and steals all your gold!'
                    game.winner = 'enemy';
                }
                return result;
            }
        }
    }

    Game.prototype.enemy = enemy;
    Game.prototype.player = player;
    win.game = new Game();

})(window);