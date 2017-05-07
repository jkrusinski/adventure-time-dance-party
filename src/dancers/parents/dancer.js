class Dancer {

  constructor(dance, top, left, img) {
    this.$node = $('<img src="' + img + '" class="dancer"/>');
    this.setPosition(top, left);
    this.addDance(dance);
  }

  addDance(dance) {
    this.$node.addClass(dance);
  }

  removeDance(dances) {
    dances.forEach(function(dance) {
      this.$node.removeClass(dance);
    }.bind(this));
  }

  setPosition(top, left) {
    this.top = top;
    this.left = left;
    this.$node.css({
      position: 'absolute',
      top: top,
      left: left
    });
  }
}
