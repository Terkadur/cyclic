schedule_norm = [
  [timeToSec(8, 0), timeToSec(9, 20)],
  [timeToSec(9, 45), timeToSec(11, 5)], 
  [timeToSec(11, 35), timeToSec(12, 55)],
  [timeToSec(13, 40), timeToSec(15, 0)]
                ];
schedule_tues = [
  [timeToSec(9, 0), timeToSec(9, 55)],
  [timeToSec(10, 0), timeToSec(10, 55)],
  [timeToSec(11, 15), timeToSec(12, 10)],
  [timeToSec(12, 15), timeToSec(13, 25)],
  [timeToSec(14, 5), timeToSec(15, 0)]
                ];
schedule_0 = [
  [timeToSec(8, 0), timeToSec(8, 40)],
  [timeToSec(8, 45), timeToSec(9, 25)],
  [timeToSec(9, 30), timeToSec(10, 10)],
  [timeToSec(10, 30), timeToSec(11, 10)],
  [timeToSec(11, 15), timeToSec(11, 55)],
  [timeToSec(12, 0), timeToSec(12, 40)],
  [timeToSec(13, 35), timeToSec(14, 15)],
  [timeToSec(14, 20), timeToSec(15, 0)]
             ]; 
schedule_ram = [
  [timeToSec(9, 0), timeToSec(10, 10)],
  [timeToSec(10, 30), timeToSec(11, 40)],
  [timeToSec(12, 0), timeToSec(13, 10)],
  [timeToSec(13, 50), timeToSec(15, 0)]
               ];
      
day1 = new Date(2019, 9, 24);

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  scale = min(width, height);
  back = color(16);
  main_font = color(255);
  sub_font = color(192);
  circ = color(64);
  perc = color(255, 255, 0);
}

function draw() {
  date = new Date(year(), month()-1, day());
  time = timeToSec(hour(), minute(), second());
  background(back);
  if (date.getDay() <= 4 && date.getDay() != 2) {
    schedule = schedule_norm;
    display();
  }
  else if (date.getDay() == 2) {
    schedule = schedule_tues;
    display();
  }
  else {
    fill(main_font);
    textSize(scale/16);
    textAlign(CENTER, CENTER);
    text("Sunday is " + dayRotation(1), width * 0.5, height * 0.5);
  }
}

function timeToSec(hour, minute, second = 0) {
  return hour*3600 + minute*60 + second;
}

function secToTime(s) {
  var hr = floor(s/3600);
  var mn = floor((s - hr*3600)/60);
  var sc = s - hr*3600 - mn*60;
  var arr = [hr, mn, sc];
  return arr;
}

function display() {
  for (var i = 0; i < schedule.length; i++) {
    if (time >= schedule[i][0] && time < schedule[i][1]) {
      var p = (time - schedule[i][0])/(schedule[i][1] - schedule[i][0]);
      var rot = dayRotation();
      fill(circ);
      noStroke();
      ellipse(width/2, height/2, scale * 0.5, scale * 0.5);
      fill(perc);
      arc(width/2, height/2, scale * 0.5, scale * 0.5, -PI/2, p * TWO_PI - PI/2);
      fill(back);
      ellipse(width/2, height/2, scale * 0.4, scale * 0.4);
      fill(main_font);
      textSize(scale/16);
      textAlign(CENTER, CENTER);
      var pad = "00";
      var hr = pad.substring(0, pad.length - ("" + hour()).length) + ("" + hour());
      var mn = pad.substring(0, pad.length - ("" + minute()).length) + ("" + minute());
      var sc = pad.substring(0, pad.length - ("" + second()).length) + ("" + second());
      text(hr + ":" + mn + ":" + sc, width * 0.5, height * 0.5);
      var msg;
      if (date.getDay() != 2) {
        msg = rot[i + 7] + " Block";
      }
      else {
        if (i < 3) {
          msg = rot[i + 7] + " Block";
        }
        else if (i == 3) {
          msg = "Cohort";
        }
        else if (i == 4) {
          msg = rot[10] + " Block";
        }
      }
      text(msg, width * 0.5, height * 0.44);
      text(rot, width * 0.5, height * 0.15);
      textSize(scale/24);
      var t_left = schedule[i][1] - time;
      var hr_left = secToTime(t_left)[0];
      var mn_left = secToTime(t_left)[1];
      var sc_left = secToTime(t_left)[2];
      hr_left = pad.substring(0, pad.length - ("" + hr_left).length) + ("" + hr_left);
      mn_left = pad.substring(0, pad.length - ("" + mn_left).length) + ("" + mn_left);
      sc_left = pad.substring(0, pad.length - ("" + sc_left).length) + ("" + sc_left);
      fill(sub_font);
      text((hr_left + ":" + mn_left + ":" + sc_left), width/2, height * 0.55);
    }
    else if (i != schedule.length - 1) {
      if (time >= schedule[i][1] && time < schedule[i + 1][0] - timeToSec(0, 5)) {
        var p = (time - schedule[i][1])/(schedule[i + 1][0] - timeToSec(0, 5) - schedule[i][1]);
        var rot = dayRotation();
        fill(circ);
        noStroke();
        ellipse(width/2, height/2, scale * 0.5, scale * 0.5);
        fill(perc);
        arc(width/2, height/2, scale * 0.5, scale * 0.5, -PI/2, p * TWO_PI - PI/2);
        fill(back);
        ellipse(width/2, height/2, scale * 0.4, scale * 0.4);
        fill(main_font);
        textSize(scale/16);
        textAlign(CENTER, CENTER);
        var pad = "00";
        var hr = pad.substring(0, pad.length - ("" + hour()).length) + ("" + hour());
        var mn = pad.substring(0, pad.length - ("" + minute()).length) + ("" + minute());
        var sc = pad.substring(0, pad.length - ("" + second()).length) + ("" + second());
        text(hr + ":" + mn + ":" + sc, width * 0.5, height * 0.5);
        var msg;
        if (date.getDay() != 2) {
          if (i == 0) {
            msg = "1st Break";
          }
          else if (i == 1) {
            msg = "2nd Break";
          }
          else if (i == 2) {
            msg = "Lunch";
          }
        }
        else {
          if (i == 1) {
            msg = "1st Break";
          }
          else if (i == 3) {
            msg = "Lunch";
          }
        }
        text(msg, width * 0.5, height * 0.44);
        text(dayRotation(), width * 0.5, height * 0.15);
        textSize(scale/24);
        var t_left = schedule[i + 1][0] - timeToSec(0, 5) - time;
        var hr_left = secToTime(t_left)[0];
        var mn_left = secToTime(t_left)[1];
        var sc_left = secToTime(t_left)[2];
        hr_left = pad.substring(0, pad.length - ("" + hr_left).length) + ("" + hr_left);
        mn_left = pad.substring(0, pad.length - ("" + mn_left).length) + ("" + mn_left);
        sc_left = pad.substring(0, pad.length - ("" + sc_left).length) + ("" + sc_left);
        fill(sub_font);
        text((hr_left + ":" + mn_left + ":" + sc_left), width * 0.5, height * 0.55);
      }
      else if (time >= schedule[i][0] - timeToSec(0, 5) && time < schedule[i][0]) {
        var p = (time - schedule[i][0] - timeToSec(0, 5))/timeToSec(0, 5);
        var rot = dayRotation();
        fill(circ);
        noStroke();
        ellipse(width/2, height/2, scale * 0.5, scale * 0.5);
        fill(perc);
        arc(width/2, height/2, scale * 0.5, scale * 0.5, -PI/2, p * TWO_PI - PI/2);
        fill(back);
        ellipse(width/2, height/2, scale * 0.4, scale * 0.4);
        fill(main_font);
        textSize(scale/16);
        textAlign(CENTER, CENTER);
        var pad = "00";
        var hr = pad.substring(0, pad.length - ("" + hour()).length) + ("" + hour());
        var mn = pad.substring(0, pad.length - ("" + minute()).length) + ("" + minute());
        var sc = pad.substring(0, pad.length - ("" + second()).length) + ("" + second());
        text(hr + ":" + mn + ":" + sc, width * 0.5, height * 0.5);
        textSize(scale/24);
        var msg;
        if (date.getDay() != 2) {
          msg = rot[i + 7] + " Block";
        }
        else {
          if (i < 3) {
            msg = rot[i + 7] + " Block";
          }
          else if (i == 3) {
            msg = "Cohort";
          }
          else if (i == 4) {
            msg = rot[10] + " Block";
          }
        }
//         text("Transition to \n " + msg, width * 0.5, height * 0.5);
        text(dayRotation(), width * 0.5, height * 0.15);
        textSize(scale/24);
        var t_left = schedule[i][0] - time;
        var hr_left = secToTime(t_left)[0];
        var mn_left = secToTime(t_left)[1];
        var sc_left = secToTime(t_left)[2];
        hr_left = pad.substring(0, pad.length - ("" + hr_left).length) + ("" + hr_left);
        mn_left = pad.substring(0, pad.length - ("" + mn_left).length) + ("" + mn_left);
        sc_left = pad.substring(0, pad.length - ("" + sc_left).length) + ("" + sc_left);
        fill(sub_font);
        text((hr_left + ":" + mn_left + ":" + sc_left), width * 0.5, height * 0.55);
      }
    }
  }
  if (time < schedule[0][0] - timeToSec(0, 5)) {
    fill(main_font);
    textSize(scale/16);
    textAlign(CENTER, CENTER);
    text("Today is " + dayRotation(), width * 0.5, height * 0.5);
  }
  else if (time >= schedule[schedule.length - 1][1]) {
    if (date.getDay() != 4) {
      fill(main_font);
      textSize(scale/16);
      textAlign(CENTER, CENTER);
      text("Tomorrow is " + dayRotation(1), width * 0.5, height * 0.5);
    }
    else {
      fill(main_font);
      textSize(scale/16);
      textAlign(CENTER, CENTER);
      text("Sunday is " + dayRotation(1), width * 0.5, height * 0.5);
    }
  }
}

function dayRotation(adder = 0) {
  var day_number = 1;
  var date_iter = new Date(day1);
  var str;
  while (date.getDate() != date_iter.getDate()) {
    date_iter = new Date(date_iter.setDate(date_iter.getDate() + 1));
    if (date_iter.getDay() <= 4) {
      day_number += 1;
      if (day_number == 9) {
        day_number = 1;
      }
    }
  }
  day_number += adder;
  if (day_number == 9) {
    day_number = 1;
  }
  if (day_number == 1) {
    str = ": ABCD";
  }
  else if (day_number == 2) {
    str = ": EFGH";
  }
  else if (day_number == 3) {
    str = ": BCDA";
  }
  else if (day_number == 4) {
    str = ": FGHE";
  }
  else if (day_number == 5) {
    str = ": CDAB";
  }
  else if (day_number == 6) {
    str = ": GHEF";
  }
  else if (day_number == 7) {
    str = ": DABC";
  }
  else if (day_number == 8) {
    str = ": HEFG";
  }
  return "Day " + day_number + str;
}
