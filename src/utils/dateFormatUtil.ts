interface dictionaryProps {
    [key: number]: string
}

const monthDictionary: dictionaryProps = {
  0: 'Jan',
  1: 'Fev',
  2: 'Mar',
  3: 'Abr',
  4: 'Mai',
  5: 'Jun',
  6: 'Jul',
  7: 'Ago',
  8: 'Set',
  9: 'Out',
  10: 'Nov',
  11: 'Dez',
};

const dayDictionary: dictionaryProps = {
  0: 'Dom',
  1: 'Seg',
  2: 'Ter',
  3: 'Qua',
  4: 'Qui',
  5: 'Sex',
  6: 'Sab',
};

function formatToDateString(date: Date) {
  const dateToFormat = new Date(date);

  const day = dateToFormat.getDate();
  const month = dateToFormat.getMonth();
  const hour = `${dateToFormat.getHours()}:${dateToFormat.getMinutes()}`;

  const monthLabel = monthDictionary[month];

  return `Hoje, ${monthLabel} ${day} ${hour}`;
}

function getDayLabel(index: number) {
  const currentDayOfWeek = new Date().getDay();
  if (currentDayOfWeek + index === 6) {
    return dayDictionary[currentDayOfWeek + index - 6];
  }

  // eslint-disable-next-line no-plusplus
  return dayDictionary[index];
}

export { formatToDateString, getDayLabel };
