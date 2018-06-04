$(document).ready(function() {
  $("#formOne").submit(function(event) {

    var blanks = ["a1", "no1", "nu1", "no2", "a2", "v1", "no3" ]
    // var a1Input = $("input#a1").val();
    // var no1Input = $("input#no1").val();
    // var nu1Input= $("input#nu1").val();
    // var no2Input = $("input#no2").val();
    // var a2Input = $("input#a2").val();
    // var v1Input = $("input#v1").val();
    // var no3Input = $("input#no3").val();

    blanks.forEach(function(blank){
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);

    });



    // $(".a1").text(a1Input);
    // $(".no1").text(no1Input);
    // $(".nu1").text(nu1Input);
    // $(".no2").text(no2Input);
    // $(".a2").text(a2Input);
    // $(".v1").text(v1Input);
    // $(".no3").text(no3Input);

    $("#story").show();

    event.preventDefault();
  });

  $("#letter").submit(function(event) {
    var fullnameInput = $("input#fullname").val();

    $(".fullname").text(fullnameInput);

    $("#story").show();

    event.preventDefault();
  });

  $("#shout").submit(function(event) {
    var shoutInput = $("input#shouttext").val().toUpperCase();

    $(".shoutoutput").text(shoutInput);
    $("#story").show();

    event.preventDefault();
  });

});
