class Princess extends Dancer {

  constructor(dance, top, left, img) {
    super(dance, top, left, img);
  }

  runAway(direction) {
    this.removeDance();

    var directions = {
      top: { top: '-20%' },
      right: { left: '120%' },
      bottom: { top: '120%' },
      left: { left: '-20%' }
    };

    var removeNode = function() {
      this.$node.remove();
    }.bind(this);

    this.$node.animate(directions[direction], 2000, removeNode);
  }
}
