$(document).ready(function() {
  window.finn = null;
  window.jake = null;
  window.princesses = [];

  var princessCounter = 0;
  var danceCounter = 0;

  var $canvas = $('.canvas');

  var dances = ['pendulum', 'jump', 'pop', 'spin'];

  var princessFactories = [
    BubblegumPrincess,
    FlamePrincess,
    LumpySpacePrincess,
    MarcelineVampireQueen
  ];

  var nextDance = function() {
    return dances[danceCounter++ % dances.length];
  };

  var nextPrincess = function() {
    return princessFactories[princessCounter++ % princessFactories.length];
  };

  var randCoor = function() {
    var height = $canvas.height();
    var width = $canvas.width();
    return [height * Math.random(), width * Math.random()];
  };

  var princessesFlee = function() {
    var directions = ['top', 'right', 'bottom', 'left'];
    var counter = 0;

    princesses.forEach(function(princess) {
      princess.runAway(directions[counter++ % directions.length]);
    });

    princesses = [];
  };

  $('.addJake').on('click', function(event) {

    if (!window.jake) {
      var coor = randCoor();
      jake = new Jake(nextDance(), coor[0], coor[1]);
      $canvas.append(jake.$node);
    }

  });

  $('.addFinn').on('click', function(event) {

    if (!window.finn) {
      var coor = randCoor();
      finn = new Finn(nextDance(), coor[0], coor[1]);
      $canvas.append(finn.$node);
    }

  });

  $('.addPrincess').on('click', function(event) {

    var coor = randCoor();
    var princessFactory = nextPrincess();
    var newPrincess = new princessFactory(nextDance(), coor[0], coor[1]);

    princesses.push(newPrincess);
    $canvas.append(newPrincess.$node);
  });

  $('.iceKingPop').on('click', function(event) {
    $('.ice-king').html('<img src="src/media/ice-king.png" class="ice-king-pop"/>');
    setTimeout(princessesFlee, 1000);
  });

  $('.mixItUp').on('click', function(event) {
    var coor;

    if (finn) {
      coor = randCoor();
      finn.move(coor[0], coor[1]);
    }

    if (jake) {
      coor = randCoor();
      jake.move(coor[0], coor[1]);
    }

    princesses.forEach(function(princess) {
      coor = randCoor();
      princess.move(coor[0], coor[1]);
    });
  });

});
