const initState = {
  results: false,
  cities: [],
}

const weather = (state = initState, action) => {
  switch (action.type) {
    case 'SHOW_RESULTS':
      return {
        ...state,
        results: true,
      };
    case 'ADD_CITY':
      return {
        ...state,
        cities: [...state.cities, {
          name: action.payload.name,
          temperature: action.payload.temperature,
          humidity: action.payload.humidity,
          wind: action.payload.wind,
        }],
      };
    case 'CLEAN_CITIES':
      return {
        ...state,
        cities: [],
        results: false
      }
    default:
      return state
  }
}

export default weather;