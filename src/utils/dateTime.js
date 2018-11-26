export function getDate(timestamp) {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec'
  ];

  const weekDays = [
    'Sun',
    "Mon",
    "Tue",
    "Wed",
    "Thur",
    "Fri",
    "Sat"
  ];

  const dateObj = new Date(timestamp * 1000);
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth();
  const date = dateObj.getDate();
  const day = dateObj.getDay();
  return {
    month: months[month],
    date,
    year,
    day: weekDays[day]
  }
}

export function getTime(timestamp) {
  const date = new Date(timestamp * 1000);
  const hours = date.getHours();
  const minutes = `0${date.getMinutes()}`.slice(-2);
  return `${hours}:${minutes}`
}