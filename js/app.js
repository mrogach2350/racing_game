var keyCodes = {
  48 : "0",
  49 : "1",
  50 : "2",
  51 : "3",
  52 : "4",
  53 : "5",
  54 : "6",
  55 : "7",
  56 : "8",
  57 : "9",
  65 : "a",
  66 : "b",
  67 : "c",
  68 : "d",
  69 : "e",
  70 : "f",
  71 : "g",
  72 : "h",
  73 : "i",
  74 : "j",
  75 : "k",
  76 : "l",
  77 : "m",
  78 : "n",
  79 : "o",
  80 : "p",
  81 : "q",
  82 : "r",
  83 : "s",
  84 : "t",
  85 : "u",
  86 : "v",
  87 : "w",
  88 : "x",
  89 : "y",
  90 : "z",
  186 : ";",
  187 : "=",
  188 : ",",
  189 : "-",
  190 : ".",
  191 : "/",
  219 : "[",
  192 : " ~ ",
  221 : "]",
  222 : "'",
};
// 32 : "␣"
var availCodes = [48,49,50,51,52,53,54,55,56,57,65,66,67,68,
  69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,
  88,89,90,186,187,188,189,190,191,219,192,221,222];

var keyText = ["0","1","2","3","4","5","6","7","8","9",
  "a","b","c","d","e","f","g","h","i","j","k","l","m","n",
  "o","p","q","r","s","t","u","v","w","x","y","z",";","=",
  "," ,"-",".","/","[","~","]","'",];

var assignedKeys = {};

function Player(img, startBox) {
  this.img = img;
  this.box = startBox || '#p1start';
  this.availMoves = whichMoves('#p1start');

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
        console.log(id, assignedKeys[id]);
        $(id).html(assignedKeys[id]);
      }
    }
  }
  $('#p1Start').html('');
  $('#p2Start').html('');
}

$(document).ready(function() {
  //intentionally removed 'var' to put players into the global scope.
  player1 = new Player('<img src="imgs/redCar.png" alt="" />');
  player2 = new Player('<img src="imgs/racecar.jpg" alt="" />');

  $('#start').on('click', function handleEvent(event){
    for (var i = 0; i < availCodes.length; i++){
      var id = "#" + i;
      assignedKeys[id] = keyText[i];
      // $(id).text(keyText[i]);
      $(id).text(id);
    };
    // var player1 = new Player();
    // var player2 = new Player();
    $('#finishBox').text("␣");
    $('#p1Start').html(player1.img);
    console.log(player1.img)
    $('#p2Start').html(player2.img);
    console.log(player2.img)
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

    for (var i = 0; i < availCodes.length; i++){
      var id = "#" + i;
      if ($(id).text() === keyPressed){
        $(id).html('<img src="imgs/racecar.jpg" alt="" />');
      }
    }
  });

});
