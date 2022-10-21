var selectRoute = document
 .getElementById("route");
var selectTimeAb = document
 .getElementById("time_ab");
var selectTimeBa = document
 .getElementById("time_ba");
var selectTimeAba1 = document
 .getElementById("time_aba1");
var selectTimeAba2 = document
 .getElementById("time_aba2");
var selectTimeAba3 = document
 .getElementById("time_aba3");
var h2Stels = document.getElementById(
 "h2_stels");
var pStels = document.getElementById(
 "p_stels");
var marshrut = document.querySelector(
 "#num_marshrut");
var money = document.querySelector(
 "#num_money");
var time = document.querySelector(
 "#num_time");
var rasspisanie = document
 .querySelector("#num_rasspisanie");
var rasspisanie2 = document
 .querySelector("#num_rasspisanie2");

window.onload = function() {
 marshrut.innerHTML = "из A в Б";
 money.innerHTML = "700 руб.";
 rasspisanie.innerHTML = "в 18:00";
 time.innerHTML = "50 минут";
 selectTimeAb.style.display =
  "block";
 selectTimeBa.style.display =
  "none";
 h2Stels.style.display = "none";
 pStels.style.display = "none";
 selectTimeAb.addEventListener(
  "change",
  function() {
   if (selectTimeAb.value ===
    "01") {
    rasspisanie.innerHTML =
     "в 18:00";
   } else if (selectTimeAb
    .value === "02") {
    rasspisanie.innerHTML =
     "в 18:30";
   } else if (selectTimeAb
    .value === "03") {
    rasspisanie.innerHTML =
     "в 18:45";
   } else if (selectTimeAb
    .value === "04") {
    rasspisanie.innerHTML =
     "в 19:00";
   } else if (selectTimeAb
    .value === "05") {
    rasspisanie.innerHTML =
     "в 19:15";
   } else {
    rasspisanie.innerHTML =
     "в 21:00";
   }
  });
}

selectRoute.addEventListener("change",
 function() {
  if (selectRoute.value === "1") {
   marshrut.innerHTML = "из A в Б";
   money.innerHTML = "700 руб.";
   rasspisanie.innerHTML = "в 18:00";
   time.innerHTML = "50 минут";
   selectTimeAb.style.display =
    "block";
   selectTimeBa.style.display =
    "none";
   h2Stels.style.display = "none";
   pStels.style.display = "none";
   selectTimeAba1.style.display =
    "none";
   selectTimeAba2.style.display =
    "none";
   selectTimeAba3.style.display =
    "none";
   selectTimeAb.addEventListener(
    "change",
    function() {
     if (selectTimeAb.value ===
      "01") {
      rasspisanie.innerHTML =
       "в 18:00";
      selectTimeAba1.style.display =
       "none";
      selectTimeAba2.style.display =
       "none";
      selectTimeAba3.style.display =
       "none";
     } else if (selectTimeAb
      .value === "02") {
      rasspisanie.innerHTML =
       "в 18:30";
      selectTimeAba1.style.display =
       "none";
      selectTimeAba2.style.display =
       "none";
      selectTimeAba3.style.display =
       "none";
     } else if (selectTimeAb
      .value === "03") {
      rasspisanie.innerHTML =
       "в 18:45";
      selectTimeAba1.style.display =
       "none";
      selectTimeAba2.style.display =
       "none";
      selectTimeAba3.style.display =
       "none";
     } else if (selectTimeAb
      .value === "04") {
      rasspisanie.innerHTML =
       "в 19:00";
      selectTimeAba1.style.display =
       "none";
      selectTimeAba2.style.display =
       "none";
      selectTimeAba3.style.display =
       "none";
     } else if (selectTimeAb
      .value === "05") {
      rasspisanie.innerHTML =
       "в 19:15";
      selectTimeAba1.style.display =
       "none";
      selectTimeAba2.style.display =
       "none";
      selectTimeAba3.style.display =
       "none";
     } else {
      rasspisanie.innerHTML =
       "в 21:00";
      selectTimeAba1.style.display =
       "none";
      selectTimeAba2.style.display =
       "none";
      selectTimeAba3.style.display =
       "none";
     }
    });
  } else if (selectRoute.value ===
   "2") {
   marshrut.innerHTML = "из Б в А";
   money.innerHTML = "700 руб.";
   rasspisanie.innerHTML = "в 18:30";
   time.innerHTML = "50 минут";
   selectTimeBa.style.display =
    "block";
   selectTimeAb.style.display =
    "none";
   h2Stels.style.display = "none";
   pStels.style.display = "none";
   selectTimeAba1.style.display =
    "none";
   selectTimeAba2.style.display =
    "none";
   selectTimeAba3.style.display =
    "none";
   selectTimeBa.addEventListener(
    "change",
    function() {
     if (selectTimeBa.value ===
      "07") {
      rasspisanie.innerHTML =
       "в 18:30";
     } else if (selectTimeBa
      .value === "08") {
      rasspisanie.innerHTML =
       "в 18:45";
     } else if (selectTimeBa
      .value === "09") {
      rasspisanie.innerHTML =
       "в 19:00";
     } else if (selectTimeBa
      .value === "10") {
      rasspisanie.innerHTML =
       "в 19:15";
     } else if (selectTimeBa
      .value === "11") {
      rasspisanie.innerHTML =
       "в 19:35";
     } else if (selectTimeBa
      .value === "12") {
      rasspisanie.innerHTML =
       "в 21:50";
     } else {
      rasspisanie.innerHTML =
       "в 21:55";
     }
    });
  } else {
   marshrut.innerHTML =
    "из A в Б и обратно в А";
   rasspisanie.innerHTML = "в 18:00";
   money.innerHTML = "1200 руб.";
   time.innerHTML = "50 + 50 минут";
   selectTimeAb.style.display =
    "block";
   h2Stels.style.display = "block";
   pStels.style.display = "block";
   selectTimeAba1.style.display =
    "block";
   rasspisanie2.innerHTML = "в 19:00";
   selectTimeBa.style.display =
    "none";
   selectTimeAb.addEventListener(
    "change",
    function() {
     if (selectTimeAb.value ===
      "01") {
      selectTimeAba1.style.display =
       "block";
      selectTimeAba2.style.display =
       "none";
      selectTimeAba3.style.display =
       "none";
     } else if (selectTimeAb
      .value === "02") {
      selectTimeAba2.style.display =
       "block";
      rasspisanie2.innerHTML =
       "в 19:35";
      selectTimeAba1.style.display =
       "none";
      selectTimeAba3.style.display =
       "none";
     } else if (selectTimeAb
      .value === "03") {
      selectTimeAba2.style.display =
       "block";
      rasspisanie2.innerHTML =
       "в 19:35";
      selectTimeAba1.style.display =
       "none";
      selectTimeAba3.style.display =
       "none";
     } else {
      selectTimeAba3.style.display =
       "block";
      rasspisanie2.innerHTML =
       "в 21:50";
      selectTimeAba1.style.display =
       "none";
      selectTimeAba2.style.display =
       "none";
     }
    });
  }
 });

selectTimeAba1.addEventListener(
 "change",
 function() {
  if (selectTimeAba1.value ===
   "01") {
   rasspisanie2.innerHTML = "в 19:00";
  } else if (selectTimeAba1.value ===
   "02") {
   rasspisanie2.innerHTML = "в 19:15";
  } else if (selectTimeAba1.value ===
   "03") {
   rasspisanie2.innerHTML = "в 19:35";
  } else if (selectTimeAba1.value ===
   "04") {
   rasspisanie2.innerHTML = "в 21:50";
  } else {
   rasspisanie2.innerHTML = "в 21:55";
  }
 });

selectTimeAba2.addEventListener(
 "change",
 function() {
  if (selectTimeAba2.value ===
   "01") {
   rasspisanie2.innerHTML = "в 19:35";
  } else if (selectTimeAba2.value ===
   "02") {
   rasspisanie2.innerHTML = "в 21:50";
  } else {
   rasspisanie2.innerHTML = "в 21:55";
  }
 });

selectTimeAba3.addEventListener(
 "change",
 function() {
  if (selectTimeAba3.value ===
   "01") {
   rasspisanie2.innerHTML = "в 21:50";
  } else {
   rasspisanie2.innerHTML = "в 21:55";
  }
 });

function clickButton() {
 var sumTickets = document
  .getElementById("num").value;
 document.getElementById("num_ticket")
  .innerHTML = sumTickets;
 if (h2Stels.style.display ===
  "block") {
  var sumMoney1 = 1200 * sumTickets +
   " руб.";
  money.innerHTML = sumMoney1;
 } else {
  var sumMoney2 = 700 * sumTickets +
   " руб.";
  money.innerHTML = sumMoney2;
 }
}
