/* React components */
import React, { Fragment } from 'react';

/* React native components */
import {
  StyleSheet,
  Animated
} from 'react-native';

/* Librarys */
import LinearGradient from 'react-native-linear-gradient';

/* Components */
import LogoApp from '../app/LogoApp';
import NameApp from '../app/NameApp';

/* Styles */
import stylesX from '../../styles';

/* Colors */
import colors from '../../styles/colors';

const Container = props => {

  const {
    conditionImage,
    contentBody,
    contentHeader,
    animation
  } = props,

  styles = StyleSheet.create({
    div: {
      marginTop: 10,
      flex: 0.9,
      maxHeight: stylesX.height(88),
      width: stylesX.width(90),
      maxWidth: 600,
      borderRadius: 10,
      backgroundColor: colors.opacityWhiteColor
    },
    slideUp: {
      transform: [
        {
          translateY: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [1500, 0]
          })
        }
      ]
    }
  });

  return (
    <LinearGradient
      colors={["rgba(216,249,63,0.75)", "#c33838", "rgba(5,181,161, 0.5)"]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={[ stylesX.centerContent, {flex: 1, overflow: 'hidden'} ]}>

      <Animated.View style={[styles.div, stylesX.centerContent, styles.slideUp]}>
        {conditionImage
          ? <Fragment>
            <LogoApp width={120} height={120}
              logoColorDarkRed
              styles={{marginBottom: 10}}
            />
            <NameApp size={25} />
          </Fragment>
          : contentHeader}

        {contentBody}

      </Animated.View>
    </LinearGradient>
  );
}

export default Container;
