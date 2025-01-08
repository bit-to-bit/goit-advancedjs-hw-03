'use strict';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { iziToastSettingsTimer } from './configuration.js';

iziToast.settings(iziToastSettingsTimer);

const startButton = document.querySelector('button[data-start]');
const startInput = document.querySelector('input#datetime-picker');
const timerDiv = document.querySelector('div .timer');
let selectedDate = new Date();

const setDisabledValueForElements = (isDisabled, ...elements) => {
  for (const element of elements) {
    element.disabled = isDisabled;
  }
};

const validateTargetDate = inputDate => {
  const validationIsSuccessful = inputDate - Date.now() > 0;
  setDisabledValueForElements(!validationIsSuccessful, startButton);
  if (!validationIsSuccessful) {
    iziToast.error({
      message: 'Please choose a date in the future',
    });
  }
  selectedDate = inputDate;
  return validationIsSuccessful;
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: selectedDate,
  minuteIncrement: 1,
  onClose(selectedDates) {
    validateTargetDate(selectedDates[0]);
  },
};

flatpickr('input#datetime-picker', options);

const timer = {
  deadline: selectedDate,
  intervalId: null,
  elements: {
    days: timerDiv.querySelector('span[data-days]'),
    hours: timerDiv.querySelector('span[data-hours]'),
    minutes: timerDiv.querySelector('span[data-minutes]'),
    seconds: timerDiv.querySelector('span[data-seconds]'),
  },

  start() {
    setDisabledValueForElements(true, startButton, startInput);
    this.deadline = selectedDate;
    this.intervalId = setInterval(() => {
      const diff = this.deadline.getTime() - Date.now();

      if (diff <= 0) {
        this.stop();
        return;
      }

      let { days, hours, minutes, seconds } = this.convertMs(diff);

      this.elements.days.textContent = this.pad(days);
      this.elements.hours.textContent = this.pad(hours);
      this.elements.minutes.textContent = this.pad(minutes);
      this.elements.seconds.textContent = this.pad(seconds);
    }, 1000);
    console.log('Timer started');
  },

  stop() {
    setDisabledValueForElements(false, startInput);
    clearInterval(this.intervalId);
    console.log('Timer stoped');
  },
  convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
  },
  pad(value) {
    const str = String(value);
    return str.length > 2 ? str : str.padStart(2, '0');
  },
};

const onStartButtton = () => {
  if (validateTargetDate(selectedDate)) {
    timer.start();
  }
};

startButton.addEventListener('click', onStartButtton);
