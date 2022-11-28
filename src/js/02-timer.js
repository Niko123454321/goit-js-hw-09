console.log('faina_super_dog');
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  datetimePicker: document.querySelector('#datetime-picker'),
  buttonStart: document.querySelector('button[data-start]'),
  d: document.querySelector('span[data-days]'),
  h: document.querySelector('span[data-hours]'),
  m: document.querySelector('span[data-minutes]'),
  s: document.querySelector('span[data-seconds]'),
};
refs.buttonStart.disabled = true;

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0].getTime();
    const startTime = Date.now();
    let ms = {};
    ms = selectedDate - startTime;
    let intervalId = null;

    if (selectedDate <= startTime) {
      refs.buttonStart.disabled = true;
      return alert('Please choose a date in the future');
      Notiflix.Notify.failure('Please choose a date in the future');
    }

    refs.buttonStart.disabled = false;

    refs.buttonStart.addEventListener('click', startTimer);
    function startTimer(params) {
      refs.buttonStart.disabled = true;
      intervalId = setInterval(() => {
        if (ms <= 999) {
          clearInterval(intervalId);
          return alert('Час вийшов!');
        }
        ms = ms - 1000;

        let formatedTime = convertMs(ms);

        refs.d.textContent = addLeadingZero(formatedTime.days);
        refs.h.textContent = addLeadingZero(formatedTime.hours);
        refs.m.textContent = addLeadingZero(formatedTime.minutes);
        refs.s.textContent = addLeadingZero(formatedTime.seconds);
      }, 1000);
    }
  },
};

flatpickr(refs.datetimePicker, options);

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
