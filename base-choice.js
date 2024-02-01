const calendarInfo = {
  months: [
    {
      month: 'Janeiro',
      numberOfDays: 31,
      days: [
        { dom: ['LIVRE', 07, 14, 21, 28] },
        { seg: [01, 08, 15, 22, 29] },
        { ter: [02, 09, 16, 23, 30] },
        { qua: [03, 10, 17, 24, 31] },
        { qui: [04, 11, 18, 25] },
        { sex: [05, 12, 19, 26] },
        { sab: [06, 13, 20, 27] },
      ],
      events: [
        // { day: 20, event: 'Sala Temática - Verão', feature: 'sala-tematica' },
      ]
    },
    {
      month: 'Fevereiro',
      numberOfDays: 29,
      days: [
        { dom: ['LIVRE', 04, 11, 18, 25] },
        { seg: ['LIVRE', 05, 12, 19, 26] },
        { ter: ['LIVRE', 06, 13, 20, 27] },
        { qua: ['LIVRE', 07, 14, 21, 28] },
        { qui: [01, 08, 15, 22, 29] },
        { sex: [02, 09, 16, 23] },
        { sab: [03, 10, 17, 24] },
      ],
      events: [
        { day: 02, event: 'Ensaio - 19h30', feature: 'ensaio' },
        { day: 03, event: 'Ensaio - 15h00', feature: 'ensaio' },
        { day: 07, event: 'Ensaio - 19h30', feature: 'ensaio' },
        { day: 16, event: 'Ensaio - 19h30', feature: 'ensaio' },
        { day: 17, event: 'Ensaio - 15h00', feature: 'ensaio' },
        { day: 21, event: 'Ensaio - 19h30', feature: 'ensaio' },
        { day: 24, event: 'Ensaio - 15h00', feature: 'ensaio' },
      ]
    },
    {
      month: 'Março',
      numberOfDays: 31,
      days: [
        { dom: ['LIVRE', 03, 10, 17, 24, 31] },
        { seg: ['LIVRE', 04, 11, 18, 25] },
        { ter: ['LIVRE', 05, 12, 19, 26] },
        { qua: ['LIVRE', 06, 13, 20, 27] },
        { qui: ['LIVRE', 07, 14, 21, 28] },
        { sex: [01, 08, 15, 22, 29] },
        { sab: [02, 09, 16, 23, 30] },
      ],
      events: [
        // { day: 14, event: '#together - Boliche - NOITE', feature: 'together' },
      ]
    },
    {
      month: 'Abril',
      numberOfDays: 31,
      days: [
        { dom: ['LIVRE', 07, 14, 21, 28] },
        { seg: [01, 08, 15, 22, 29] },
        { ter: [02, 09, 16, 23, 30] },
        { qua: [03, 10, 17, 24] },
        { qui: [04, 11, 18, 25] },
        { sex: [05, 12, 19, 26] },
        { sab: [06, 13, 20, 27] },
      ],
      events: [
        // { day: 20, event: '#together - Noite da pizza (Amanda???) - NOITE', feature: 'together' },
      ]
    },
    {
      month: 'Maio',
      numberOfDays: 31,
      days: [
        { dom: ['LIVRE', 05, 12, 19, 26] },
        { seg: ['LIVRE', 06, 13, 20, 27] },
        { ter: ['LIVRE', 07, 14, 21, 28] },
        { qua: [01, 08, 15, 22, 29] },
        { qui: [02, 09, 16, 23, 30] },
        { sex: [03, 10, 17, 24, 31] },
        { sab: [04, 11, 18, 25] },
      ],
      events: [
        // { day: 01, event: 'Dia do Trabalho', feature: 'feriado-recesso' },
      ]
    },
    {
      month: 'Junho',
      numberOfDays: 30,
      days: [
        { dom: ['LIVRE', 02, 09, 16, 23, 30] },
        { seg: ['LIVRE', 03, 10, 17, 24] },
        { ter: ['LIVRE', 04, 11, 18, 25] },
        { qua: ['LIVRE', 05, 12, 19, 26] },
        { qui: ['LIVRE', 06, 13, 20, 27] },
        { sex: ['LIVRE', 07, 14, 21, 28] },
        { sab: [01, 08, 15, 22, 29] },
      ],
      events: [
        // { day: 15, event: 'Sala Temática - ???', feature: 'sala-tematica' },
      ]
    },
    {
      month: 'Julho',
      numberOfDays: 31,
      days: [
        { dom: ['LIVRE', 07, 14, 21, 28] },
        { seg: [01, 08, 15, 22, 29] },
        { ter: [02, 09, 16, 23, 30] },
        { qua: [03, 10, 17, 24, 31] },
        { qui: [04, 11, 18, 25] },
        { sex: [05, 12, 19, 26] },
        { sab: [06, 13, 20, 27] },
      ],
      events: [
        // { day: 09, event: 'Revolução Constituc.', feature: 'feriado-recesso' },
      ]
    },
    {
      month: 'Agosto',
      numberOfDays: 31,
      days: [
        { dom: ['LIVRE', 04, 11, 18, 25] },
        { seg: ['LIVRE', 05, 12, 19, 26] },
        { ter: ['LIVRE', 06, 13, 20, 27] },
        { qua: ['LIVRE', 07, 14, 21, 28] },
        { qui: [01, 08, 15, 22, 29] },
        { sex: [02, 09, 16, 23, 30] },
        { sab: [03, 10, 17, 24, 31] },
      ],
      events: [
        // { day: 10, event: 'Sala Temática - Dia dos pais', feature: 'sala-tematica' },
      ]
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
      events: [
        // { day: 07, event: 'Independência do Brasil', feature: 'feriado-recesso' },
      ]
    },
    {
      month: 'Outubro',
      numberOfDays: 31,
      days: [
        { dom: ['LIVRE', 06, 13, 20, 27] },
        { seg: ['LIVRE', 07, 14, 21, 28] },
        { ter: [01, 08, 15, 22, 29] },
        { qua: [02, 09, 16, 23, 30] },
        { qui: [03, 10, 17, 24, 31] },
        { sex: [04, 11, 18, 25] },
        { sab: [05, 12, 19, 26] },
      ],
      events: [
        // { day: 12, event: 'Dia das crianças', feature: 'data-especial' },
      ]
    },
    {
      month: 'Novembro',
      numberOfDays: 30,
      days: [
        { dom: ['LIVRE', 03, 10, 17, 24] },
        { seg: ['LIVRE', 04, 11, 18, 25] },
        { ter: ['LIVRE', 05, 12, 19, 26] },
        { qua: ['LIVRE', 06, 13, 20, 27] },
        { qui: ['LIVRE', 07, 14, 21, 28] },
        { sex: [01, 08, 15, 22, 29] },
        { sab: [02, 09, 16, 23, 30] },
      ],
      events: [
        // { day: 02, event: 'Finados', feature: 'feriado-recesso' },
      ]
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
      events: [
        // { day: 07, event: 'Sala Temática - Natal', feature: 'sala-tematica' },
      ]
    },
  ],
  weekDays: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
}