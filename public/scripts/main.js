var MASTER_ORDER = [5, 2, 10, 9, 3, 4, 1, 0, 6, 8, 7, 11, 12];
var numbersBeingWorkedOn = [];
var operationsBeingWorkedOn = [];
var nextProblem;


$(document).ready(function(){
  $('#operation-selector input').change(function(e){
    var operation = e.currentTarget.id;
    var indexOfOperation = operationsBeingWorkedOn.indexOf(operation);

    if (indexOfOperation === - 1){
      operationsBeingWorkedOn.push(operation);
    } else {
      operationsBeingWorkedOn.splice(indexOfOperation, 1);
    }

    startNewSession();
  });

  $('.num-options').click(function(e){
    var numberBoxChanged = parseInt(e.currentTarget.defaultValue);
    var indexOfNumber = numbersBeingWorkedOn.indexOf(numberBoxChanged);

    if ( indexOfNumber === -1){
      numbersBeingWorkedOn.push(numberBoxChanged);
    }else{
      numbersBeingWorkedOn.splice(indexOfNumber, 1);
    }

    startNewSession();
  });

  /*$('.num-display').dblclick(function(e){
    var $clicked = $(e.currentTarget);

    var numOptions = $clicked.closest('.col-left').find('.num-options');
    var numberClicked = $clicked.prev().val();
    var boxJustChecked;
    var i = 0;

    while (boxJustChecked !== numberClicked){
      var $checkBox = $(numOptions[i]);
      $checkBox.prop('checked', true);
      boxJustChecked = $checkBox.val();

      i++;
    }

    startNewSession();
  });*/


  startNewSession();
});

function startNewSession(){
  console.log(numbersBeingWorkedOn);
  console.log(operationsBeingWorkedOn);
}

function randomProblemGenerator(){

}

function randomIntBetweenInclusive(min, max){
  // used to generate random integer within range from MASTER_ORDER
  return Math.floor(Math.random() * (max - min + 1)) + min;
}