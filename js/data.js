function whichMoves(box){
  if (box === '#p1Start'){
    availMoves = ['#0', '#6'];
  }
  if (box === '#0'){
    availMoves = ['#7', '#1'];
  }
  if (box === '#1'){
    availMoves = ['#0', '#8', '#2'];
  }
  if (box === '#2'){
    availMoves = ['#1', '#9', '#3'];
  }
  if (box === '#3'){
    availMoves = ['#2', '#10', '#4'];
  }
  if (box === '#4'){
    availMoves = ['#3', '#11', '#5'];
  }
  if (box === '#5'){
    availMoves = ['#4', '#12'];
  }
  if (box === '#6'){
    availMoves = ['#7', '13'];
  }
  if (box === '#7'){
    availMoves = ['#0', '#6', '#14', '#8'];
  }
  if (box === '#8'){
    availMoves = ['#1', '#7', '#15', '#9'];
  }
  if (box === '#9'){
    availMoves = ['#2', '#8', '#16', '#10'];
  }
  if (box === '#10'){
    availMoves = ['#3', '#9', '#17', '#11'];
  }
  if (box === '#11'){
    availMoves = ['#4', '#10', '#18', '#12'];
  }
  if (box === '#12'){
    availMoves = ['#5', '#11', '#19'];
  }
  if (box === '#13'){
    availMoves = ['#6', '#20', '#14'];
  }
  if (box === '#14'){
    availMoves = ['#13', '#21', '#15', '#7'];
  }
  if (box === '#15'){
    availMoves = ['#8', '#14', '#22', '#16'];
  }
  if (box === '#16'){
    availMoves = ['#9', '#15', '#finishBox', '#17'];
  }
  if (box === '#17'){
    availMoves = ['#10', '#16', '#23', '#18'];
  }
  if (box === '#18'){
    availMoves = ['#11', '#17', '#24', '#19'];
  }
  if (box === '#19'){
    availMoves = ['#12', '#18', '#25'];
  }
  if (box === '#20'){
    availMoves = ['#13', '#21', '#26'];
  }
  if (box === '#21'){
    availMoves = ['#14', '#20', '#27', '#22'];
  }
  if (box === '#22'){
    availMoves = ['#15', '#21', '#finishBox', '#28'];
  }
  if (box === '#23'){
    availMoves = ['#17', '#finishBox', '#30', '#24'];
  }
  if (box === '#24'){
    availMoves = ['#18', '#23', '#31', '#25'];
  }
  if (box === '#25'){
    availMoves = ['#19', '#24', '#32'];
  }
  if (box === '#26'){
    availMoves = ['#20', '#27', '#33'];
  }
  if (box === '#27'){
    availMoves = ['#21', '#26', '#34', '#28'];
  }
  if (box === '#28'){
    availMoves = ['#22', '#27', '#35', '#29'];
  }
  if (box === '#29'){
    availMoves = ['#finishBox', '#28', '#36', '#30'];
  }
  if (box === '#30'){
    availMoves = ['#23', '#29', '#37', '#31'];
  }
  if (box === '#31'){
    availMoves = ['#24', '#30', '#38', '#32'];
  }
  if (box === '#32'){
    availMoves = ['#25', '#31', '#38'];
  }
  if (box === '#33'){
    availMoves = ['#26', '#34', '#40'];
  }
  if (box === '#34'){
    availMoves = ['#27', '#33', '#41', '#35'];
  }
  if (box === '#35'){
    availMoves = ['#28', '#34', '#42', '#36'];
  }
  if (box === '#36'){
    availMoves = ['#29', '#35', '#43', '#37'];
  }
  if (box === '#37'){
    availMoves = ['#30', '#36', '#44', '#38'];
  }
  if (box === '#38'){
    availMoves = ['#31', '#37', '#45', '#39'];
  }
  if (box === '#39'){
    availMoves = ['#32', '#38'];
  }
  if (box === '#40'){
    availMoves = ['#33', '#41'];
  }
  if (box === '#41'){
    availMoves = ['#40', '#34', '#42'];
  }
  if (box === '#42'){
    availMoves = ['#35', '#41', '#43'];
  }
  if (box === '#43'){
    availMoves = ['#36', '#42', '#44'];
  }
  if (box === '#44'){
    availMoves = ['#37', '#43', '#45'];
  }
  if (box === '#45'){
    availMoves = ['#44', '#38'];
  }
  if (box === '#p2Start'){
    availMoves = ['#45', '#39'];
  }
}
