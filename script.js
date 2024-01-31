const calendarInfo = {
  months: [
    {
      month: 'Janeiro',
      numberOfDays: 31,
      days: [
        { dom: ['', 07, 14, 21, 28] },
        { seg: [01, 08, 15, 22, 29] },
        { ter: [02, 09, 16, 23, 30] },
        { qua: [03, 10, 17, 24, 31] },
        { qui: [04, 11, 18, 25] },
        { sex: [05, 12, 19, 26] },
        { sab: [06, 13, 20, 27] },
      ],
    },
    {
      month: 'Fevereiro',
      numberOfDays: 29,
      days: [
        { dom: ['', 04, 11, 18, 25] },
        { seg: ['', 05, 12, 19, 26] },
        { ter: ['', 06, 13, 20, 27] },
        { qua: ['', 07, 14, 21, 28] },
        { qui: [01, 08, 15, 22, 29] },
        { sex: [02, 09, 16, 23] },
        { sab: [03, 10, 17, 24] },
      ],
    },
    {
      month: 'Março',
      numberOfDays: 31,
      days: [
        { dom: ['', 03, 10, 17, 24, 31] },
        { seg: ['', 04, 11, 18, 25] },
        { ter: ['', 05, 12, 19, 26] },
        { qua: ['', 06, 13, 20, 27] },
        { qui: ['', 07, 14, 21, 28] },
        { sex: [01, 08, 15, 22, 29] },
        { sab: [02, 09, 16, 23, 30] },
      ],
    },
    {
      month: 'Abril',
      numberOfDays: 31,
      days: [
        { dom: ['', 07, 14, 21, 28] },
        { seg: [01, 08, 15, 22, 29] },
        { ter: [02, 09, 16, 23, 30] },
        { qua: [03, 10, 17, 24] },
        { qui: [04, 11, 18, 25] },
        { sex: [05, 12, 19, 26] },
        { sab: [06, 13, 20, 27] },
      ],
    },
    {
      month: 'Maio',
      numberOfDays: 31,
      days: [
        { dom: ['', 05, 12, 19, 26] },
        { seg: ['', 06, 13, 20, 27] },
        { ter: ['', 07, 14, 21, 28] },
        { qua: [01, 08, 15, 22, 29] },
        { qui: [02, 09, 16, 23, 30] },
        { sex: [03, 10, 17, 24, 31] },
        { sab: [04, 11, 18, 25] },
      ],
    },
    {
      month: 'Junho',
      numberOfDays: 30,
      days: [
        { dom: ['', 02, 09, 16, 23, 30] },
        { seg: ['', 03, 10, 17, 24] },
        { ter: ['', 04, 11, 18, 25] },
        { qua: ['', 05, 12, 19, 26] },
        { qui: ['', 06, 13, 20, 27] },
        { sex: ['', 07, 14, 21, 28] },
        { sab: [01, 08, 15, 22, 29] },
      ],
    },
    {
      month: 'Julho',
      numberOfDays: 31,
      days: [
        { dom: ['', 07, 14, 21, 28] },
        { seg: [01, 08, 15, 22, 29] },
        { ter: [02, 09, 16, 23, 30] },
        { qua: [03, 10, 17, 24, 31] },
        { qui: [04, 11, 18, 25] },
        { sex: [05, 12, 19, 26] },
        { sab: [06, 13, 20, 27] },
      ],
    },
    {
      month: 'Agosto',
      numberOfDays: 31,
      days: [
        { dom: ['', 04, 11, 18, 25] },
        { seg: ['', 05, 12, 19, 26] },
        { ter: ['', 06, 13, 20, 27] },
        { qua: ['', 07, 14, 21, 28] },
        { qui: [01, 08, 15, 22, 29] },
        { sex: [02, 09, 16, 23, 30] },
        { sab: [03, 10, 17, 24, 31] },
      ],
    },
    {
      month: 'Setembro',
      numberOfDays: 30,
      days: [
        { dom: [01, 08, 15, 22, 29] },
        { seg: [02, 09, 16, 23, 30] },
        { ter: [03, 10, 17, 24] },
        { qua: [04, 11, 18, 25] },
        { qui: [05, 12, 19, 26] },
        { sex: [06, 13, 20, 27] },
        { sab: [07, 14, 21, 28] },
      ],
    },
    {
      month: 'Outubro',
      numberOfDays: 31,
      days: [
        { dom: ['', 06, 13, 20, 27] },
        { seg: ['', 07, 14, 21, 28] },
        { ter: [01, 08, 15, 22, 29] },
        { qua: [02, 09, 16, 23, 30] },
        { qui: [03, 10, 17, 24, 31] },
        { sex: [04, 11, 18, 25] },
        { sab: [05, 12, 19, 26] },
      ],
    },
    {
      month: 'Novembro',
      numberOfDays: 30,
      days: [
        { dom: ['', 03, 10, 17, 24] },
        { seg: ['', 04, 11, 18, 25] },
        { ter: ['', 05, 12, 19, 26] },
        { qua: ['', 06, 13, 20, 27] },
        { qui: ['', 07, 14, 21, 28] },
        { sex: [01, 08, 15, 22, 29] },
        { sab: [02, 09, 16, 23, 30] },
      ],
    },
    {
      month: 'Dezembro',
      numberOfDays: 31,
      days: [
        { dom: [01, 08, 15, 22, 29] },
        { seg: [02, 09, 16, 23, 30] },
        { ter: [03, 10, 17, 24, 31] },
        { qua: [04, 11, 18, 25] },
        { qui: [05, 12, 19, 26] },
        { sex: [06, 13, 20, 27] },
        { sab: [07, 14, 21, 28] },
      ],
    },
  ],
  weekDays: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
}

const main = document.querySelector('main');

const getElement = (element) => document.createElement(element);

const addMonths = ({ months, weekDays }) => {
  months.forEach(({ month }) => {
    const newSection = getElement('section');
    const newH3 = getElement('h3');

    newH3.innerText = month;
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

    newDiv.innerText = weekDay;
    newDiv.className = weekDay;

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

    div.appendChild(newDiv)
  })
}

window.onload = () => {
  addMonths(calendarInfo);
}