var schedule = [
  [9 *3600 + 20*60, 9 *3600 + 45*60], 
  [11*3600 + 5 *60, 11*3600 + 35*60], 
  [12*3600 + 55*60, 13*3600 + 40*60]
                 ];
var schedule_tues =  [
  [9 *3600 + 55*60, 10*3600 + 0 *60], 
  [10*3600 + 55*60, 11*3600 + 15*60], 
  [12*3600 + 10*60, 12*3600 + 15*60], 
  [13*3600 + 25*60, 14*3600 + 5 *60]
                 ];
var pad = "00";
var state = false;
function setup() {
//  createCanvas(320, 420);
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  var date = new Date(year(), month()-1, day());
  var t = hour()*3600 + minute()*60 + second();
  background(0);
  if (date.getDay() >= 0 && date.getDay() <= 4 && date.getDay() != 2) {
    state = false;
    for (var i = 0; i < schedule.length; i++) {
      if (t > schedule[i][0] && t < schedule[i][1]) {
        var p = (t - schedule[i][0])/(schedule[i][1] - schedule[i][0]);
        state = true;
        fill(0, 200, 255);
        noStroke();
        arc(width/2, height/2, width * 2/3, width * 2/3, 0, TWO_PI);
        fill(255, 144, 0);
        arc(width/2, height/2, width * 2/3, width * 2/3, -PI/2, p*TWO_PI - PI/2);
        fill(0);
        ellipse(width/2, height/2, width * 14/27, width * 14/27);
        fill(255);
        ellipse
        textSize(width/12);
        textAlign(CENTER);
        var hr = pad.substring(0, pad.length - ("" + hour()).length) + ("" + hour());
        var mn = pad.substring(0, pad.length - ("" + minute()).length) + ("" + minute());
        var sc = pad.substring(0, pad.length - ("" + second()).length) + ("" + second());
        text(hr + ":" + mn + ":" + sc, width/2, height * 32 / 64);
        textSize(width/24);
        var t_left = schedule[i][1] - t;
        var hr_left = Math.floor(t_left/3600);
        var mn_left = Math.floor((t_left - hr_left*3600)/60);
        var sc_left = t_left - hr_left*3600 - mn_left*60;
        hr_left = pad.substring(0, pad.length - ("" + hr_left).length) + ("" + hr_left);
        mn_left = pad.substring(0, pad.length - ("" + mn_left).length) + ("" + mn_left);
        sc_left = pad.substring(0, pad.length - ("" + sc_left).length) + ("" + sc_left);
        fill(192);
        text((hr_left + ":" + mn_left + ":" + sc_left), width/2, height * 35 / 64);
      }
    }
    if (!state) {
      if (t >= 8*3600 && t <= 15*3600) {
        fill(255);
        strokeWeight(0);
        textSize(width/24);
        textAlign(CENTER);
        text("You're in class,", width/2, height * 1/2);
        text("put your phone down.", width/2, height * 17/32);
      }
      else {
        fill(255);
        strokeWeight(0);
        textSize(width/24);
        textAlign(CENTER);
        text("You're at home,", width/2, height * 1/2);
        text("finish your homework.", width/2, height * 17/32);
      }
    }
  }
  else if (date.getDay() == 2) {
    state = false;
    for (var i = 0; i < schedule_tues.length; i++) {
      if (t > schedule_tues[i][0] && t < schedule_tues[i][1]) {
        var p = (t - schedule_tues[i][0])/(schedule_tues[i][1] - schedule_tues[i][0]);
        state = true;
        fill(0, 200, 255);
        noStroke();
        arc(width/2, height/2, width * 2/3, width * 2/3, 0, TWO_PI);
        fill(255, 144, 0);
        arc(width/2, height/2, width * 2/3, width * 2/3, -PI/2, p*TWO_PI - PI/2);
        fill(0);
        ellipse(width/2, height/2, width * 14/27, width * 14/27);
        fill(255);
        ellipse
        textSize(width/12);
        textAlign(CENTER);
        var hr = pad.substring(0, pad.length - ("" + hour()).length) + ("" + hour());
        var mn = pad.substring(0, pad.length - ("" + minute()).length) + ("" + minute());
        var sc = pad.substring(0, pad.length - ("" + second()).length) + ("" + second());
        text(hr + ":" + mn + ":" + sc, width/2, height * 32 / 64);
        textSize(width/24);
        var t_left = schedule_tues[i][1] - t;
        var hr_left = Math.floor(t_left/3600);
        var mn_left = Math.floor((t_left - hr_left*3600)/60);
        var sc_left = t_left - hr_left*3600 - mn_left*60;
        hr_left = pad.substring(0, pad.length - ("" + hr_left).length) + ("" + hr_left);
        mn_left = pad.substring(0, pad.length - ("" + mn_left).length) + ("" + mn_left);
        sc_left = pad.substring(0, pad.length - ("" + sc_left).length) + ("" + sc_left);
        fill(192);
        text((hr_left + ":" + mn_left + ":" + sc_left), width/2, height * 35 / 64);
      }
    }
    if (!state) {
      if (t >= 9*3600 && t <= 15*3600) {
        fill(255);
        strokeWeight(0);
        textSize(width/24);
        textAlign(CENTER);
        text("You're in class,", width/2, height * 1/2);
        text("put your phone down.", width/2, height * 17/32);
      }
      else {
        fill(255);
        strokeWeight(0);
        textSize(width/24);
        textAlign(CENTER);
        text("You're at home,", width/2, height * 1/2);
        text("finish your homework.", width/2, height * 17/32);
      }
    }
  }
  else {
    fill(255);
    strokeWeight(0);
    textSize(width/24);
    textAlign(CENTER);
    text("It's the weekend,", width/2, height * 1/2);
    text("have fun!", width/2, height * 17/32);
    
  }
}
