class Dancer {

  constructor(top, left, timeBetweenSteps) {
    this.$node = $('<span class="dancer"></span>');
    this.top = top;
    this.left = left;
    this.timeBetweenSteps = timeBetweenSteps;

    this.step();
    this.setPosition(top, left);
  }

  step() {
    setTimeout(this.step, this.timeBetweenSteps);
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
