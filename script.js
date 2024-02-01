const main = document.querySelector('main');

const getElement = (parentElement, element, text, className) => {
  const newElement = document.createElement(element);
  newElement.innerText = text;
  newElement.className = className;

  parentElement.appendChild(newElement);

  return newElement;
}

const addMonths = ({ months, weekDays }) => {
  months.forEach(({ month }) => {
    const newSection = getElement(main, 'section', '', 'month-section');
    getElement(newSection, 'h3', month, 'monthName');

    addWeekDays(weekDays, newSection, month, months);
  })
}

const addWeekDays = (weekDays, section, month, months) => {
  const newSection = getElement(section, 'section', '', 'week-days');
  section.appendChild(newSection);

  weekDays.forEach((weekDay) => {
    const newDiv = getElement(newSection, 'div', '', 'div-week-day');
    getElement(newDiv, 'h3', weekDay, `weekDay ${weekDay}`);

    addDays(newDiv, month, months, weekDay);
  })
}

const addDays = (div, month, months, weekDay) => {
  const objectMonth = months.find(({ month: baseMonth }) => baseMonth === month)

  const lowerCaseWeekDay = weekDay[0].toLowerCase() + weekDay.substring(1);

  const findObjectWeekDay = objectMonth.days
    .find((objectWeekDay) => objectWeekDay[lowerCaseWeekDay])

  findObjectWeekDay[lowerCaseWeekDay].forEach((dayNumber) => {
    const newDiv = getElement(div, 'div', dayNumber, 'div-day');

    addEvents(newDiv, months, month);
  })
}

const addEvents = (div, months, month) => {
  const newUl = getElement(div, 'ul', '', '');

  months.forEach(({ month: baseMonth, events: arrayEvent }) => {
    arrayEvent.forEach((objectEvent) => {
      if (month === baseMonth && objectEvent.day === parseInt(div.innerText)) {
        getElement(newUl, 'li', objectEvent.event, objectEvent.feature);
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