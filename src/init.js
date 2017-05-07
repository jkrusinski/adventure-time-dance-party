$(document).ready(function() {
  window.finn = null;
  window.jake = null;
  window.princesses = [];

  var princessCounter = 0;
  var danceCounter = 0;

  var $body = $('body');

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
    var height = $body.height();
    var width = $body.width();
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
      $body.append(jake.$node);
    }

  });

  $('.addFinn').on('click', function(event) {

    if (!window.finn) {
      var coor = randCoor();
      finn = new Finn(nextDance(), coor[0], coor[1]);
      $body.append(finn.$node);
    }

  });

  $('.addPrincess').on('click', function(event) {

    var coor = randCoor();
    var princessFactory = nextPrincess();
    var newPrincess = new princessFactory(nextDance(), coor[0], coor[1]);

    princesses.push(newPrincess);
    $body.append(newPrincess.$node);
  });
});
