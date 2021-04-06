import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const width = x => wp(x),
  height = x => hp(x),
  border = (color, border, size) => {
    return {
      /* Border */
      borderWidth: border.includes('border') ? size : null,
      borderColor: border.includes('border') ? color : null,
      /* Border Top */
      borderTopWidth: border.includes('top') ? size : null,
      borderTopColor: border.includes('top') ? color : null,
      /* Border Left */
      borderLeftWidth: border.includes('left') ? size : null,
      borderLeftColor: border.includes('left') ? color : null,
      /* Border Bottom */
      borderBottomWidth: border.includes('bottom') ? size : null,
      borderBottomColor: border.includes('bottom') ? color : null,
      /* Border Right */
      borderRightWidth: border.includes('right') ? size : null,
      borderRightColor: border.includes('right') ? color : null,
    }
  };

module.exports = {
  /* Width responsive */
  width,

  /* Height responsive */
  height,

  /* Border responsive */
  border,

  /* Center Content */
  centerContent: {
    alignItems: "center",
    justifyContent: "center"
  },

  /* Space Around Content */
  spaceAroundContent: {
    alignItems: "center",
    justifyContent: "space-around"
  },

  /* Space Around Content */
  spaceBetweenContent: {
    alignItems: "center",
    justifyContent: "space-between"
  },

  /* Left Content */
  leftContent: {
    alignItems: "center",
    justifyContent: "flex-start"
  },

  /* Left Content */
  rightContent: {
    alignItems: "center",
    justifyContent: "flex-end"
  },

  /* Display Flex */
  displayFlex: {
    flexDirection: 'row',
    flexWrap: "wrap"
  },

  /* Display Block */
  displayBlock: {
    flexDirection: 'column',
  },

  /* Text Center */
  textCenter: {
    textAlign: 'center'
  },

  /* Text Uppercase */
  uppercase: {
    textTransform: 'uppercase'
  },

  /* Underline */
  underlined: {
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
  },

  /* Positions */
  position: {
    absolute: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    }
  },

  /* Box Shadow */
  boxShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 9
  },

  /* Fonts */
  fontFamily: {
    Audiowide: {
      fontFamily: 'Audiowide-Regular'
    },
    BigShouldersDisplay: {
      fontFamily: 'BigShouldersDisplay-Regular'
    },
    Electrolize: {
      fontFamily: 'Electrolize-Regular'
    },
    Fascinate: {
      fontFamily: 'Fascinate-Regular'
    },
    GloriaHallelujah: {
      fontFamily: 'GloriaHallelujah-Regular'
    },
    PoiretOne: {
      fontFamily: 'PoiretOne-Regular'
    }
  }
}