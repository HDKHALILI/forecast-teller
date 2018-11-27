const toFahrenheit = (celsius) => {
  return celsius - (9 / 5) + 32;
}

const toCelsius = (fahrenheit) => {
  return (fahrenheit - 32) / 1.8;
}

const convertTempUnits = (unit, temp) => {
  if (unit === 'fahrenheit') {
    return toFahrenheit(temp).toFixed(1);
  } else {
    return temp
  }
}

export default convertTempUnits;