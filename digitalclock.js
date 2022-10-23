digitalClock();

function digitalClock() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let morning = "PM";

  if (hh == 00) {
    hh = 12;
  } else if (hh < 12) {
    hh = hh % 12;
    morning = "AM";
  }

  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;

  // let time =  hh + ":" + mm + ":" + ss + " " + morning;
  // document.getElementById('clock')
  // .innerText = time;

  document.getElementById("hours").innerText = hh;
  document.getElementById("minits").innerText = mm;
  document.getElementById("seconds").innerText = ss;
  document.getElementById("ampm").innerText = morning;
  let t = setTimeout(() => {
    digitalClock();
  }, 1000);
}
