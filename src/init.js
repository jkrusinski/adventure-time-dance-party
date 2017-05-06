$(document).ready(function() {
  window.finn = null;
  window.jake = null;
  window.princesses = [];

  var $body = $('body');

  var randCoor = function() {
    var height = $body.height();
    var width = $body.width();

    return [height * Math.random(), width * Math.random()];
  };

  $('.addJake').on('click', function(event) {

    if (!window.jake) {
      var coor = randCoor();
      jake = new Jake(coor[0], coor[1]);
      $body.append(jake.$node);
    }

  });

  $('.addFinn').on('click', function(event) {

    if (!window.finn) {
      var coor = randCoor();
      finn = new Finn(coor[0], coor[1]);
      $body.append(finn.$node);
    }
  });

  $('.addPrincess').on('click', function(event) {

  });

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
  });
});
