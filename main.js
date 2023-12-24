let hour = document.querySelector("#hour");
let minutes = document.querySelector("#minutes");
let rate = document.querySelector("#rate");
let amount = document.querySelector("#amount");
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  let input_hour = Number(hour.value);
  let hour_to_min = input_hour * 60;
  let input_minutes = Number(minutes.value);
  let input_rate = Number(rate.value);
  let minute_rate = input_rate / 60;
  //   total minutes
  let total_minutes = hour_to_min + input_minutes;
  let total = total_minutes * minute_rate;
  amount.textContent = total.toFixed(2);

  //hour and minutes
  const total_hour = Math.floor(total_minutes / 60);
  document.querySelector("#total_hour").textContent = total_hour;
  document.querySelector("#total_minutes").textContent =
    total_minutes - total_hour * 60;
});
