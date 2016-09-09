var assignedKeys = {};

function Player(img, startBox) {
  this.img = img;
  this.box = startBox || '#p1start';
  this.availMoves = [];
  // this.moveThis = function (key){
  //   for (var i = 0; i < Object.keys(assignedKeys).length; i ++){
  //     var keyArr = Object.keys(assignedKeys);
  //     var keyId = "#" + i;
  //     if (this.availMoves.indexOf(keyId) !== -1){
  //       if (assignedKeys[keyId] === key){
  //         $(keyArr[i]).html(this.img);
  //         this.box = keyArr[i];
  //       }
  //     }
  //   fixBoard();
  //   }
  // }
}

function getAvailMoves(key){
  for (var i = 0; i < Object.keys(assignedKeys).length; i ++){
    var keyArr = Object.keys(assignedKeys);
    var keyId = "#" + i;
    if($(keyId).html() === player1.img){
      player1.availMoves = whichMoves(keyId);
    }
    else if($('#p1Start').html() === player1.img){
      player1.availMoves = whichMoves('#p1Start');
    }
    if($(keyId).html() === player2.img){
      player2.availMoves = whichMoves(keyId);
    }
    else if($('#p2Start').html() === player2.img){
      player2.availMoves = whichMoves('#p2Start');
    }
  }
}
function moveCars(key){
  for (var i = 0; i < Object.keys(assignedKeys).length; i ++){
    var keyArr = Object.keys(assignedKeys);
    var keyId = "#" + i;
    if (player1.availMoves.indexOf(keyId) !== -1){
      if (assignedKeys[keyId] === key){
        $(player1.box).html('');
        $(keyArr[i]).html('<img src="imgs/redCar.png" alt="" />');
        player1.box = keyArr[i];
      }
    }
    if (player2.availMoves.indexOf(keyId) !== -1){
      if (assignedKeys[keyId] === key){
        $(player2.box).html('');
        $(keyArr[i]).html('<img src="imgs/racecar.jpg" alt="" />');
        player2.box = keyArr[i];
      }
    }
  }
   fixBoard();
}

function fixBoard(){
  for (var i = 0; i < availCodes.length; i++){
    var id = "#" + i;
    if (id !== player1.box && id !== player2.box){
      if (id in assignedKeys){
        $(id).html(assignedKeys[id]);
      }
    }
  }
  if (player1.box !== '#p1Start'){
    $('#p1Start').html('');
  }
  if (player2.box !== '#p2Start'){
    $('#p2Start').html('');
  }
}

function reset(){
  $('.box').html('');
  $('#p1Start').html('');
  $('#p2Start').html('');
}

$(document).ready(function() {
  //intentionally removed 'var' to put players into the global scope.


  $('#start').on('click', function handleEvent(event){
    for (var i = 0; i < availCodes.length; i++){
      var id = "#" + i;
      assignedKeys[id] = keyText[i];
      $(id).text(keyText[i]);
      // $(id).text(id);
    };
    $('#finishBox').text("⌘");
    $('#p1Start').html('<img src="imgs/redCar.png" alt="" />');
    $('#p2Start').html('<img src="imgs/racecar.jpg" alt="" />');
    player1 = new Player($('#p1Start').html(), '#p1Start');
    player2 = new Player($('#p2Start').html(), '#p2Start');
  });

  $('#reset').on('click', function handleEvent(event){
    reset();
  });

  $(window).on('keydown', function handleEvent(event){
    var keyPressedCode = event.keyCode;
    if (keyPressedCode === 91 || keyPressedCode === 93){
      if (player1.availMoves.indexOf('#finishBox') !== -1){
        $('#finishBox').html('<img src="imgs/redCar.png" alt="" />');
        alert('Player 1 wins');
        var p1win = ('Player 1 wins').split();

      }
      if (player2.availMoves.indexOf('#finishBox') !== -1){
        $('#finishBox').html('<img src="imgs/racecar.jpg" alt="" />');
        alert('Player 2 wins');
      }
    }
    if (keyPressedCode in keyCodes) {
      var keyPressed = keyCodes[keyPressedCode];
    }
    getAvailMoves(keyPressed);
    moveCars(keyPressed);
    // if($('#finishBox').html() === player1.img){
    //   fixBoard();
    //
    // }
    // if($('#finishBox').html() === player2.img){
    //   fixBoard();
    //
    // }
  });

});
