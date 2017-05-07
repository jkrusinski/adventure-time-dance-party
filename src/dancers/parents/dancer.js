class Dancer {

  constructor(dance, top, left, img) {
    this.$node = $('<img src="' + img + '" class="dancer"/>');
    this.setPosition(top, left);
    this.addDance(dance);
  }

  addDance(dance) {
    this.dance = dance;
    this.$node.addClass(dance);
  }

  removeDance() {
    if (this.dance) {
      this.$node.removeClass(this.dance);
      this.dance = null;
    }
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

  move(top, left) {
    this.top = top;
    this.left = left;
    this.$node.animate({
      top: top,
      left: left
    });
  }
}
