var numbersBeingWorkedOn = []
var operationsBeingWorkedOn = []
var nextProblem;


$(document).ready(function(){
  $('.num-options').change(function(e){
    var numberBoxChanged = parseInt(e.currentTarget.defaultValue);
    var indexOfNumber = numbersBeingWorkedOn.indexOf(numberBoxChanged);

    if ( indexOfNumber === -1){
      numbersBeingWorkedOn.push(numberBoxChanged);
    }else{
      numbersBeingWorkedOn.splice(indexOfNumber, 1);
    }
  });

  $('.num-display').dblclick(function(e){
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
  });
})

function randomProblemGenerator(){

}

function randomIntBetweenInclusive(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}