export const showResults = () => {
  return {
    type: 'SHOW_RESULTS'
  }
}

export const hideResults = () => {
  return {
    type: 'SHOW_RESULTS'
  }
}

export const addCity = (name, temperature, humidity, wind) => {
  return {
    type: 'ADD_CITY',
    payload: {name, temperature, humidity, wind}
  }
}

export const cleanCities = () => {
  return {
    type: 'CLEAN_CITIES'
  }
}