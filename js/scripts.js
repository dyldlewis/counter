$(document).ready(function() {
  $("#counter").submit(function(event) {
    event.preventDefault()
    var countTo = parseInt($("input#countTo").val());
    var countBy = parseInt($("input#countBy").val());
    console.log(countBy, countTo)
    if (isNaN(countTo) || isNaN(countBy)) {
      alert("Please enter two valid numbers")
    } else if (countTo < 0 || countBy < 0) {
      alert("Please enter a number greater than 0")
    } else if (countTo === null || countBy === null) {
      alert("Please enter a valid number")
    } else if (countBy > countTo) {
      alert("Please enter a count to number larger than the count by number")
    } else {
      for (var index = countBy; index <= countTo; index += countBy) {
        alert(index);
      }
    }


  });
});
