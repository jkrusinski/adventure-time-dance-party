$(document).ready(function() {
  window.finn = null;
  window.jake = null;
  window.princesses = [];

  var princessConstructors = [
    BubblegumPrincess,
    FlamePrincess,
    LumpySpacePrincess
  ];

  var princessCounter = 0;
  var danceCounter = 0;

  var $body = $('body');

  var randCoor = function() {
    var height = $body.height();
    var width = $body.width();
    return [height * Math.random(), width * Math.random()];
  };

  var addDance = function($node) {
    var dances = ['pendulum', 'jump', 'pop', 'spin'];
    return $node.addClass(dances[danceCounter++ % dances.length]);
  };

  $('.addJake').on('click', function(event) {

    if (!window.jake) {
      var coor = randCoor();
      jake = new Jake(coor[0], coor[1]);
      $body.append(addDance(jake.$node));
    }

  });

  $('.addFinn').on('click', function(event) {

    if (!window.finn) {
      var coor = randCoor();
      finn = new Finn(coor[0], coor[1]);
      $body.append(addDance(finn.$node));
    }

  });

  $('.addPrincess').on('click', function(event) {

    var coor = randCoor();
    var constructor = princessConstructors[princessCounter++ % 3];
    var newPrincess = new constructor(coor[0], coor[1]);

    princesses.push(newPrincess);
    $body.append(addDance(newPrincess.$node));
  });
});
