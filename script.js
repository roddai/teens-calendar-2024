const main = document.querySelector('main');

const getElement = (element) => document.createElement(element);

const addMonths = ({ months, weekDays }) => {
  months.forEach(({ month }) => {
    const newSection = getElement('section');
    const newH3 = getElement('h3');

    newH3.innerText = month;
    newH3.className = 'monthName'
    newSection.className = 'month-section'

    newSection.appendChild(newH3);
    main.appendChild(newSection);

    addWeekDays(weekDays, newSection, month, months);
  })
}

const addWeekDays = (weekDays, section, month, months) => {
  const newSection = getElement('section');
  newSection.className = 'week-days'
  section.appendChild(newSection);

  weekDays.forEach((weekDay) => {
    const newDiv = getElement('div');
    const newH3 = getElement('h3');

    newDiv.className = 'div-week-day'
    newH3.innerText = weekDay;
    newH3.className = `weekDay ${weekDay}`;

    newDiv.appendChild(newH3);
    newSection.appendChild(newDiv);

    addDays(newDiv, month, months, weekDay);
  })
}

const addDays = (div, month, months, weekDay) => {
  const objectMonth = months.find(({ month: baseMonth }) => baseMonth === month)

  const lowerCaseWeekDay = weekDay[0].toLowerCase() + weekDay.substring(1);

  const arrayDaysOfWeekDays = objectMonth.days;

  const findObjectWeekDay = arrayDaysOfWeekDays
    .find((objectWeekDay) => objectWeekDay[lowerCaseWeekDay])

  findObjectWeekDay[lowerCaseWeekDay].forEach((dayNumber) => {
    const newDiv = getElement('div');

    newDiv.innerText = dayNumber;
    newDiv.className = 'div-day';
    // newDiv.className = 'div-day bg-secondary bg-gradient';
    // newDiv.className = 'div-day bg-light';

    div.appendChild(newDiv)

    addEvents(newDiv, months, month);
  })
}

const addEvents = (div, months, month) => {
  const newUl = getElement('ul');
  div.appendChild(newUl);

  months.forEach(({ month: baseMonth, events: arrayEvent }) => {
    arrayEvent.forEach((objectEvent) => {
      if (month === baseMonth && objectEvent.day === parseInt(div.innerText)) {
        const newLi = getElement('li');

        newLi.innerText = objectEvent.event;
        newLi.className = objectEvent.feature;

        newUl.appendChild(newLi)
      }
    })
  })
}

const clearFreeDays = () => document.querySelectorAll('.week-days div')
  .forEach((day) => (day.innerText === 'LIVRE') ? day.style.color = '#efeded' : '');

window.onload = () => {
  addMonths(calendarInfo);
  clearFreeDays();
}