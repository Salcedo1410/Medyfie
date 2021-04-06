const initialState = true,

  hideWelcomeScreen = (state = initialState, action) => {
    switch (action.type) {
      case 'Hide Welcome Screen':
        return false
      default:
        return state
    }
  };

export default hideWelcomeScreen;
