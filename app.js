let view = document.getElementById('pageView');
let cost = document.getElementById('cost');
let cost2 = document.getElementById('cost2');
let slider = document.getElementById('price-slider');
let toggle = document.getElementById('billing');

let pageViews = ['10K', '50K', '100K', '500K', '1M'];
let perMonth = [8, 12, 16, 24, 36];

let isYearly = false;

slider.addEventListener('input', function () {
  updateValue();
  view.innerHTML = pageViews[slider.value];
  // range value
  let value = this.value * 25;
  this.style.background = `linear-gradient(
    to right,
    var(--soft-cyan) 0%,
    var(--soft-cyan) ${value}%,
    var(--light-grayish-blue) 0%,
    var(--light-grayish-blue) 100%
  )`;
});

toggle.addEventListener('change', () => {
  if (isYearly === false) isYearly = true;
  else isYearly = false;
  updateValue();
});

function updateValue() {
  if (isYearly) {
    cost.innerHTML = perMonth[slider.value] * 0.75;
    cost2.innerHTML = perMonth[slider.value] * 0.75;
  } else {
    cost.innerHTML = perMonth[slider.value];
    cost2.innerHTML = perMonth[slider.value];
  }
}
