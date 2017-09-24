//Back End Logic

//Constructor----------------------------------------

function Square(char) {
  this.char = char;
}

//Prototype-------------------------------------------

Square.prototype.newSquare = function () {
  var hex = [];
  if (this.char === "a") {
    hex = '#980303';
  }
  if (this.char === "b") {
    hex = '#cb1616';
  }
  if (this.char === "c") {
    hex = '#ffb81e';
  }
  if (this.char === "d") {
    hex = '#ffde0f';
  }
  if (this.char === "e") {
    hex = '#f7f05e';
  }
  if (this.char === "f") {
    hex = '#e4f75e';
  }
  if (this.char === "g") {
    hex = '#f1f1f1';
  }
  if (this.char === "h") {
    hex = '#b8e229';
  }
  if (this.char === "i") {
    hex = '#9bffa1';
  }
  if (this.char === "j") {
    hex = '#3c9808';
  }
  if (this.char === "k") {
    hex = '#5bc19a';
  }
  if (this.char === "l") {
    hex = '#57b8ae';
  }
  if (this.char === "m") {
    hex = '#57abb8';
  }
  if (this.char === "n") {
    hex = '#6db2cc';
  }
  if (this.char === "o") {
    hex = '#86efff';
  }
  if (this.char === "p") {
    hex = '#1668bf';
  }
  if (this.char === "q") {
    hex = '#6a58eb';
  }
  if (this.char === "r") {
    hex = '#dfc9ff';
  }
  if (this.char === "s") {
    hex = '#8a8a8a';
  }
  if (this.char === "t") {
    hex = '#1faf91';
  }
  if (this.char === "u") {
    hex = '#cfcfcf';
  }
  if (this.char === "v") {
    hex = '#db74ff';
  }
  if (this.char === "w") {
    hex = '#666666';
  }
  if (this.char === "x") {
    hex = '#ff008f';
  }
  if (this.char === "y") {
    hex = '#de277a';
  }
  if (this.char === "z") {
    hex = '#e2cc29';
  }
  if (this.char === ",") {
    hex = '#d4d92a';
  }
  if (this.char === ".") {
    hex = '#515307';
  }
  if (this.char === "!") {
    hex = '#ff00e0';
  }
  if (this.char === "?") {
    hex = '#0c6c7b';
  }
return hex;

};

//Front End Logic-------------------------------------

$(document).ready(function() {
  $('#text-form').submit(function(event){
    event.preventDefault();
    var str = $('#text').val();
    var strSplit = str.split("");

    for (var i = 0; i < strSplit.length; i++){
      document.write("Character " + i + " is " + strSplit[i] + ". ");
    }


  });
});


// <button onclick="location.href = 'www.yoursite.com';" id="myButton" class="float-left submit-button" >Home</button>
