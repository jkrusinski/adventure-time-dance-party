class Dancer {

  constructor(top, left, img) {
    this.$node = $('<img src="' + img + '" class="dancer"/>');
    this.setPosition(top, left);
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
