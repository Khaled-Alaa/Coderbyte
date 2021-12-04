function CountingMinutes(str) { 
  return calculateDiff(modifyTime(str));
  }
  
  function modifyTime(str) {
    var times = str.split("-");
    var total = [];
  
    for (var i = 0; i < times.length; i++) {
      var time = times[i].split(":");
      var hrs = time[0];
      var mins = time[1].slice(0, 2);
      var timing = time[1].slice(2);
  
      var pmMins = 0;
      if (timing === "pm") {
        pmMins = 12;
      } else pmMins = 0;
  
      total.push({ hours: parseInt(hrs) + pmMins, minutes: parseInt(mins) });
    }
    return total;
  }
  
  function calculateDiff(times) {
    var time1 = times[0];
    var time2 = times[1];
  
    var hoursDiff = time2.hours - time1.hours;
    var minsDiff = time2.minutes - time1.minutes;
    if (minsDiff < 0) {
      minsDiff += 60;
      hoursDiff--;
    }
    if (hoursDiff < 0) {
      hoursDiff += 24;
    }
    return minsDiff + hoursDiff * 60;
  }
  
  // keep this function call here 
  console.log(CountingMinutes(readline()));