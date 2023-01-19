/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable no-var */
/* eslint-disable no-undef */
/**
 * @author Jaydeep Katakiya <jaykatakiya8946@gmail.com>
 */
(function($) {
  "use strict";
  $(".sakura-falling").sakura("start", {
    blowAnimations: [
      "blow-soft-left",

    ], // Horizontal movement animation names
    className: "sakura", // Class name to use
    fallSpeed: 2.5, // Factor for petal fall speed
    maxSize: 12, // Maximum petal size
    minSize: 9, // Minimum petal size
    newOn: 250, // Interval after which a new petal is added

  });
})(jQuery);

$(document).on("click", function() {
  document.getElementById("my_audio").play();
  console.log("Shaadi me zaroor aana");
});

// Set the date we're counting down to
const countDownDate = new Date("Feb 11, 2023 12:39:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
  // Get todays date and time
  const now = new Date().getTime();

  // Find the distance between now and the count down date
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("time").innerHTML = "<div class='container'><div class='days block'>"+ days + "<br>Days</div>" + "<div class='hours block'>" + hours + "<br>Hours</div>" + "<div class='minutes block'>" + minutes + "<br>Minutes</div>" + "<div class='seconds block'>" + seconds + "<br>Seconds</div></div>";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time").innerHTML = "Wedding Completed !!";
  }
}, 1000);

// being a bit cool :p
const styles = [
  "background: linear-gradient(#D33106, #571402)",
  "border: 4px solid #3E0E02",
  "color: white",
  "display: block",
  "text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3)",
  "box-shadow: 0 2px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset",
  "line-height: 40px",
  "text-align: center",
  "font-weight: bold",
  "font-size: 32px",
].join(";");

const styles1 = [
  "color: #FF6C37",
  "display: block",
  "text-shadow: 0 2px 0 rgba(0, 0, 0, 1)",
  "line-height: 40px",
  "font-weight: bold",
  "font-size: 32px",
].join(";");

const styles2 = [
  "color: teal",
  "display: block",
  "text-shadow: 0 2px 0 rgba(0, 0, 0, 1)",
  "line-height: 40px",
  "font-weight: bold",
  "font-size: 32px",
].join(";");

// console.log('\n\n%c SAVE THE DATE: 16th Feb, 2021', styles);

// console.log('%cYour presence is requested!%c\n\nRegards: Mehul Patni', styles1, styles2);

// console.log(
//     `%cShaadi me zaroor aana!\n\n`,
//     'color: yellow; background:tomato; font-size: 24pt; font-weight: bold',
// )
