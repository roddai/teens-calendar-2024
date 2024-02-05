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
        { day: 20, event: 'Sala Temática - Verão', feature: 'sala-tematica' },
        { day: 27, event: '#together (Disney) - Casa Lu e Alex - TARDE', feature: 'together' },
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
        { day: 10, event: 'Recesso Carnaval', feature: 'feriado-recesso' },
        { day: 11, event: 'Recesso Carnaval', feature: 'feriado-recesso' },
        { day: 12, event: 'Recesso Carnaval', feature: 'feriado-recesso' },
        { day: 13, event: 'Recesso Carnaval', feature: 'feriado-recesso' },
        { day: 24, event: 'Sala Temática - ???', feature: 'sala-tematica' },
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
        { day: 21, event: '#together - Boliche - NOITE', feature: 'together' },
        { day: 23, event: 'Sala Temática - Semana Santa', feature: 'sala-tematica' },
        { day: 24, event: 'Sala Temática - Semana Santa', feature: 'sala-tematica' },
        { day: 25, event: 'Sala Temática - Semana Santa', feature: 'sala-tematica' },
        { day: 26, event: 'Sala Temática - Semana Santa', feature: 'sala-tematica' },
        { day: 27, event: 'Sala Temática - Semana Santa', feature: 'sala-tematica' },
        { day: 28, event: 'Sala Temática - Semana Santa', feature: 'sala-tematica' },
        { day: 29, event: 'Sala Temática - Semana Santa', feature: 'sala-tematica' },
        { day: 30, event: 'Sala Temática - Semana Santa', feature: 'sala-tematica' },
        { day: 29, event: 'Paixão de Cristo - Sexta-feira Santa', feature: 'feriado-recesso' },
        { day: 31, event: 'Páscoa', feature: 'feriado-recesso' },
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
        { day: 20, event: '#together - Noite da pizza (Amanda???) - NOITE', feature: 'together' },
        { day: 21, event: 'Tiradentes', feature: 'feriado-recesso' },
        { day: 27, event: 'Sala Temática - Outono', feature: 'sala-tematica' },
        { day: 27, event: 'Talk Teen - TARDE', feature: 'talk-teen' },
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
        { day: 01, event: 'Dia do Trabalho', feature: 'feriado-recesso' },
        { day: 11, event: 'Sala Temática - Dia das mães', feature: 'sala-tematica' },
        { day: 12, event: 'Dia das mães', feature: 'data-especial' },
        { day: 23, event: '#together - Jump - NOITE', feature: 'together' },
        { day: 26, event: 'Teencontro', feature: 'data-especial' },
        { day: 30, event: 'Corpus Christ - Ponto facultativo', feature: 'feriado-recesso' },
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
        { day: 15, event: 'Sala Temática - ???', feature: 'sala-tematica' },
        { day: 15, event: 'Talk Teen - TARDE', feature: 'talk-teen' },
        { day: 22, event: '#together - Invade a house - Pr. Tiago - NOITE', feature: 'together' },
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
        { day: 09, event: 'Revolução Constituc.', feature: 'feriado-recesso' },
        { day: 27, event: 'Sala Temática - Inverno', feature: 'sala-tematica' },
        { day: 27, event: '#together - Noite do fondue - Dai/Rodrigo - NOITE', feature: 'together' },
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
        { day: 10, event: 'Sala Temática - Dia dos pais', feature: 'sala-tematica' },
        { day: 11, event: 'Dia dos pais', feature: 'data-especial' },
        { day: 17, event: 'Talk Teen - TARDE', feature: 'talk-teen' },
        { day: 31, event: '#together - Invade a house - ??? - Game night - NOITE', feature: 'together' },
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
        { day: 07, event: 'Independência do Brasil', feature: 'feriado-recesso' },
        { day: 14, event: 'Talk Teen - Setembro amarelo - TARDE', feature: 'talk-teen' },
        { day: 19, event: '#together - Kart - NOITE', feature: 'together' },
        { day: 21, event: 'Dia do adolescente / Dia dos desbravadores', feature: 'data-especial' },
        { day: 21, event: 'Sala Temática - Primavera', feature: 'sala-tematica' },
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
        { day: 12, event: 'Dia das crianças', feature: 'data-especial' },
        { day: 26, event: 'Sala Temática - Festa italiana', feature: 'sala-tematica' },
        { day: 26, event: '#together - Noite da pizza - NOITE', feature: 'together' },
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
        { day: 02, event: 'Finados', feature: 'feriado-recesso' },
        { day: 15, event: 'Proclamação da República', feature: 'feriado-recesso' },
        { day: 19, event: '#together - Boliche - NOITE', feature: 'together' },
        { day: 20, event: 'Consciência Negra', feature: 'feriado-recesso' },
        { day: 23, event: 'Sala Temática - ???', feature: 'sala-tematica' },
        { day: 23, event: 'Talk Teen - TARDE', feature: 'talk-teen' },
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
        { day: 07, event: 'Sala Temática - Natal', feature: 'sala-tematica' },
        { day: 07, event: '#together - Invade a house - Confraternização - NOITE', feature: 'together' },
        { day: 25, event: 'Natal', feature: 'feriado-recesso' },
      ]
    },
  ],
  weekDays: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
}
