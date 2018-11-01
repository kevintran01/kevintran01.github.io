$(document).ready(function() {
    $('#button-popup').click(function() {
        $(".window-popup").show(300);
    });
    $("#button-popup-close").click(function () {
      $(".window-popup").hide(300);
    });
});