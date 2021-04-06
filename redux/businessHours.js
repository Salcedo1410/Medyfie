let firstHour = '06',
  secondHour = '21',
  zero = '00',
  entryTime = `${firstHour}:${zero} ${firstHour < 12 ? 'am' : 'pm'}`,
  departureTime = `${secondHour}:${zero} ${secondHour < 12 ? 'am' : 'pm'}`;

const initialState = {
  firstHour: firstHour,
  firstMinutes: zero,
  secondHour: secondHour,
  secondMinutes: zero,
  entryTime: entryTime,
  departureTime: departureTime,
  businessHours: `${entryTime} - ${departureTime}`
},

  getHours = (state = initialState, action) => {
    const {
      firstHour,
      firstMinutes,
      secondHour,
      secondMinutes
    } = action;
    let entryTime = `${firstHour}:${firstMinutes} ${firstHour < 12 ? 'am' : 'pm'}`,
    departureTime = `${secondHour}:${secondMinutes} ${secondHour < 12 ? 'am' : 'pm'}`;
    switch (action.type) {
      case 'Get First Hour':
        return {
          ...state,
          firstHour: firstHour,
          firstMinutes: firstMinutes,
          entryTime: `${firstHour}:${firstMinutes} ${firstHour < 12 ? 'am' : 'pm'}`,
          businessHours: `${entryTime} - ${state.departureTime}`
        }
      case 'Get Second Hour':
        return {
          ...state,
          secondHour: secondHour,
          secondMinutes: secondMinutes,
          departureTime: `${secondHour}:${secondMinutes} ${secondHour < 12 ? 'am' : 'pm'}`,
          businessHours: `${state.entryTime} - ${departureTime}`
        }
      default:
        return state
    }
  };

export default getHours;
