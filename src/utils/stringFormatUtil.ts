function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function formatTemperature(temperature: number) {
  return `${Math.round(temperature)} º`;
}

export { capitalizeFirstLetter, formatTemperature };
