const settings = document.querySelector('.settings');
const settingsBtn = document.querySelector('.settings-btn');
const imageSection = document.querySelector('.image-section');

const eventName = document.querySelector('#event-name');
const eventDay = document.querySelector('#event-day');
const eventMonth = document.querySelector('#event-month');
const eventYear = document.querySelector('#event-year');

const daysCount = document.querySelector('.days-count');
const hoursCount = document.querySelector('.hours-count');
const minutesCount = document.querySelector('.minutes-count');
const secondsCount = document.querySelector('.seconds-count');

const saveBtn = document.querySelector('.save');

const eventSpan = document.querySelector('.event');

const spinner = document.querySelector('.loadingio-spinner-ripple-93t89zn9zlv');

let usersTime;

const setTime = () => {
    const currentTime = new Date();
    const result = usersTime - currentTime;
    const days = Math.floor(result / 1000 / 60 / 60 / 24);
    const hours = Math.floor(result / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(result / 1000 / 60) % 60;
    const seconds = Math.floor(result / 1000) % 60;

    daysCount.textContent = days;
    hoursCount.textContent = hours;
    minutesCount.textContent = minutes;
    secondsCount.textContent = seconds;
}

const appUpdate = () => {
    eventSpan.textContent = eventName.value;
    usersTime = new Date(`${eventMonth.value} ${eventDay.value} ${eventYear.value}`)
}

const toggleClass = () => {
    settings.classList.toggle('active');
    spinner.classList.toggle('no-spin');
}

settingsBtn.addEventListener('click', toggleClass);
saveBtn.addEventListener('click', appUpdate);
saveBtn.addEventListener('click', toggleClass);

appUpdate();
setInterval(setTime,1000);
