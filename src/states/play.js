var Cat       = require('animals/cat');
var Floor     = require('inanimate/floor');
var MEOW      = require('constants/media').MEOW;
var Mice      = require('animals/mice');
var Score     = require('metrics/score');


module.exports = {
  create: function() {
    Floor(this.game);
    this.score = new Score(this.game);
    this.cat = new Cat(this.game);
    this.mice = new Mice(this.game, 20);

    this.cursors = this.game.input.keyboard.createCursorKeys();
    this.game.sound.play(MEOW);
  },

  update: function() {
    this.cat.move(this.cursors);
    this.game.physics.arcade.overlap(this.cat.sprite, this.mice.group,
                                     this.killMouse, null, this);
  },

  /**
   * Kill mouse and update score on collision
   */
  killMouse: function(player, mouse) {
    mouse.kill();
    this.score.update();
  }
};