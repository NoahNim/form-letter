$(document).ready(function() {
  $("#formOne").submit(function() {
    var personName = $("input#name").val();
    console.log(personName);

    $(".name").text(personName + " ");

    $("#story").show();

    event.preventDefault();

  });
});
