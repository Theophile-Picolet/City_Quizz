function started(duration) {
  var TotalSeconds = 40;
  var documentWidth = $(document).width();
  var start = Date.now();
  var intervalSetted = null;

  function timer() {
    var diff = duration - (((Date.now() - start) / 1000) | 0);
    var seconds = diff % 60 | 0;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    $("#timer").html("00:" + seconds);
    var progresBarWidth = (seconds * documentWidth) / TotalSeconds;

    $("#progress").css({
      width: progresBarWidth + "px",
    });

    if (diff <= 0) {
      clearInterval(intervalSetted);
    }
  }

  timer();
  intervalSetted = setInterval(timer, 1000);
}

started(40);
