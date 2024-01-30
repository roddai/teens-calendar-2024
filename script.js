const allMonths = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

const main = document.querySelector('main');

const getElement = (element) => document.createElement(element);

const addMonths = (months) => {
  months.forEach((month) => {
    const newSection = getElement('section');
    const newH3 = getElement('h3');

    newH3.innerText = month;
    newSection.className = 'month-section'

    newSection.appendChild(newH3);
    main.appendChild(newSection);

    addWeekDays(weekDays, newSection);
  })
}

const addWeekDays = (days, section) => {
  const newSection = getElement('section');
  newSection.className = 'week-days'
  section.appendChild(newSection);

  days.forEach((weekDay) => {
    const newDiv = getElement('div');

    newDiv.innerText = weekDay;

    newSection.appendChild(newDiv)
  })
}

window.onload = () => {
  addMonths(allMonths);
}
