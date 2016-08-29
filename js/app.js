var assignedKeys = {};

function Player(img, startBox) {
  this.img = img;
  this.box = startBox || '#p1start';
  this.availMoves = [];
  this.moveThis = function (key){
    // this.availMoves = whichMoves(this.box);
    var id;
    for (var i = 0; i < Object.keys(assignedKeys).length; i ++){
      var keyArr = Object.keys(assignedKeys);
      var keyId = "#" + i;
      if (assignedKeys[keyId] === key){
        console.log(keyArr[i]);
        $(keyArr[i]).html(this.img);
        this.box = keyArr[i];
      }
    }
    // if (this.availMoves.indexOf(key) !== -1 ){
    //   this.box = id;
    //   $(id).html(this.img);
    // }
    fixBoard();
  }
//   this.move = function() {
//     $(window).on('keydown', function handleEvent(event){
//       var keyPressedCode = event.keyCode;
//       if (keyPressedCode in keyCodes) {
//         var keyPressed = keyCodes[keyPressedCode];
//       }
//       if (keyPressed in assignedKeys){
//         console.log(assignedKeys[keyPressed]);
//       }
//     }
//   }
}

// function moveCar(){
//
// }

function fixBoard(){
  for (var i = 0; i < availCodes.length; i++){
    var id = "#" + i;
    if (id !== player1.box && player2.box){
      if (id in assignedKeys){
        $(id).html(assignedKeys[id]);
      }
    }
  }
  var box1 = player1.box;
  if (box1 !== '#p1Start'){
    $('#p1Start').html('');
  }
  var box2 = player2.box;
  if (box2!== '#p1Start'){
    $('#p2Start').html('');
  }
}

$(document).ready(function() {
  //intentionally removed 'var' to put players into the global scope.
  player1 = new Player('<img src="imgs/redCar.png" alt="" />', '#p1start');
  player2 = new Player('<img src="imgs/racecar.jpg" alt="" />', '#p2start');


  player1.availMoves = whichMoves('#p1Start');
  player2.availMoves = whichMoves('#p2Start');

  $('#start').on('click', function handleEvent(event){
    event.preventDefault();
    for (var i = 0; i < availCodes.length; i++){
      var id = "#" + i;
      assignedKeys[id] = keyText[i];
      $(id).text(keyText[i]);
      // $(id).text(id);
    };
    $('#finishBox').text("␣");
    $('#p1Start').html(player1.img);
    $('#p2Start').html(player2.img);
  });

  $('#reset').on('click', function handleEvent(event){
    $('.box').html('');
    $('#p1Start').html('');
    $('#p2Start').html('');
  });

  $(window).on('keydown', function handleEvent(event){
    var keyPressedCode = event.keyCode;
    if (keyPressedCode in keyCodes) {
      var keyPressed = keyCodes[keyPressedCode];
    }
    player1.moveThis(keyPressed);
    player2.moveThis(keyPressed);
    if($('#finishBox').html() === player1.img){
      alert('Player 1 wins');
    }
    if($('#finishBox').html() === player2.img){
      alert('Player 2 wins');
    }

    // for (var i = 0; i < availCodes.length; i++){
    //   var id = "#" + i;
    //   if ($(id).text() === keyPressed){
    //     $(id).html('<img src="imgs/racecar.jpg" alt="" />');
    //   }
    // }
  });

});
