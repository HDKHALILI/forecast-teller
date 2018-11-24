export function getDate(timestamp) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const date = new Date(timestamp * 1000);
  const month = date.getMonth()
  const day = date.getDate()
  return {
    month: months[month],
    day
  }
}

export function getTime(timestamp) {
  const date = new Date(timestamp * 1000);
  const hours = date.getHours();
  const minutes = `0${date.getMinutes()}`.slice(-2);
  return `${hours}:${minutes}`
}