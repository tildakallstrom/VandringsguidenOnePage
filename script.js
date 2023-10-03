$(document).ready(function(){
  //click funktion för att ändra css
  $("#change-css").click(function(){
    $(".my-div").css({
      //ny css kod
      "font-size": "24px",
      "color": "white"
    });
  });
});