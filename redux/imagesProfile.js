const initialState = {
  backgroundImageHospitalAccount: null,
  profileImageHospitalAccount: null,
  backgroundImagePersonAccount: null,
  profileImagePersonAccount: null,
},

  updateImage = (state = initialState, action) => {
    const {
      newBackgroundImageHospitalAccount,
      newProfileImageHospitalAccount,
      newBackgroundImagePersonAccount,
      newProfileImagePersonAccount
    } = action;
    switch (action.type) {
      case 'Update Background Image Hospital Account':
        return {
          ...state,
          backgroundImageHospitalAccount: newBackgroundImageHospitalAccount
        }
      case 'Update Profile Image Hospital Account':
        return {
          ...state,
          profileImageHospitalAccount: newProfileImageHospitalAccount
        }
      case 'Update Background Image Person Account':
        return {
          ...state,
          backgroundImagePersonAccount: newBackgroundImagePersonAccount
        }
      case 'Update Profile Image Person Account':
        return {
          ...state,
          profileImagePersonAccount: newProfileImagePersonAccount
        }
      default:
        return state
    }
  };

export default updateImage;
