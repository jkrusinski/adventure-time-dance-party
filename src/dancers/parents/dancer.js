class Dancer {

  constructor(top, left, delay, img) {
    this.$node = $('<img src="' + img + '" class="dancer"/>');
    this.top = top;
    this.left = left;
    this.delay = delay;

    this.step();
    this.setPosition(top, left);
  }

  step() {
    setTimeout(this.step.bind(this), this.delay);
  }

  setPosition(top, left) {
    this.top = top;
    this.left = left;
    this.$node.css({
      top: top,
      left: left
    });
  }
}

window.Dancer = Dancer;
