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

$(document).ready(function(){
  //animera h1 så den rullar fram över skärmen
  function startTextAnimation() {
    $("h1").animate({
      marginLeft: "-100%" // Flytta texten åt vänster
    }, 6000, "linear", function() {
      // Återställ texten när animationen är klar
      $(this).css("marginLeft", "100%");
      startTextAnimation(); // Börja om animationen
    });
  }
  startTextAnimation();
});