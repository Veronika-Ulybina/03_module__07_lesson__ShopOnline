'use strict';

document.addEventListener('DOMContentLoaded', () => {
	const daysVal = document.querySelector('.timer__column_days .timer__number');
	const hoursVal = document.querySelector('.timer__column_hours .timer__number');
	const minutesVal = document.querySelector('.timer__column_minutes .timer__number');

	const daysText = document.querySelector('.timer__column_days .timer__text');
	const hoursText = document.querySelector('.timer__column_hours .timer__text');
	const minutesText = document.querySelector('.timer__column_minutes .timer__text');

	function declOfNum(number, titles) {
		let cases = [2, 0, 1, 1, 1, 2];
		return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
	}

	let endTime = new Date(2023, 9, 28, 5, 38, 0).getTime();

	function getCountdownTime() {
		const currentTime = new Date().getTime();

		const distance = endTime - currentTime;

		const oneDay = 24 * 60 * 60 * 1000;
		const oneHour = 60 * 60 * 1000;
		const oneMinute = 60 * 1000;

		let days = Math.floor(distance / oneDay);

		let hours = Math.floor((distance % oneDay) / oneHour);

		let minutes = Math.floor((distance % oneHour) / oneMinute);

		daysVal.textContent = days;
		hoursVal.textContent = hours;
		minutesVal.textContent = minutes;

		daysText.textContent = declOfNum(days, ['день', 'дня', 'дней']);
		hoursText.textContent = declOfNum(hours, ['час', 'часа', 'часов']);
		minutesText.textContent = declOfNum(minutes, ['минута', 'минуты', 'минут']);
	}

	getCountdownTime();
	setInterval(getCountdownTime, 60000);
});