/* ReacT components */
import React from 'react';

/* React native components */
import { View, TouchableOpacity, TouchableHighlight } from 'react-native';

/* Styles */
import stylesX from '../../styles';

export default function Button(props) {
  const {
    onPress,
    onPressIn,
    opacity,
    styles,
    height,
    width,
    backgroundColor,
    borderRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    paddingVertical,
    paddingHorizontal,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    marginVertical,
    marginHorizontal,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    children,
    contentIsCenter,
    isWithOpacity,
    underlayColor
  } = props;

  let stylesButton = [
    styles,
    contentIsCenter ? stylesX.centerContent : null,
    {
      height: height,
      width: width,
      backgroundColor: backgroundColor,
      borderRadius: borderRadius,
      borderTopLeftRadius: borderTopLeftRadius,
      borderTopRightRadius: borderTopRightRadius,
      borderBottomLeftRadius: borderBottomLeftRadius,
      borderBottomRightRadius: borderBottomRightRadius,
      paddingVertical: paddingVertical,
      paddingHorizontal: paddingHorizontal,
      paddingTop: paddingTop,
      paddingBottom: paddingBottom,
      paddingLeft: paddingLeft,
      paddingRight: paddingRight,
      marginVertical: marginVertical,
      marginHorizontal: marginHorizontal,
      marginTop: marginTop,
      marginBottom: marginBottom,
      marginLeft: marginLeft,
      marginRight: marginRight
    }
  ];

  return (
    <>
      { isWithOpacity
        ? <TouchableOpacity
          onPress={onPress}
          onPressIn={onPressIn}
          activeOpacity={opacity}
          style={[
            styles,
            contentIsCenter ? stylesX.centerContent : null,
            {
              height: height,
              width: width,
              backgroundColor: backgroundColor,
              borderRadius: borderRadius,
              borderTopLeftRadius: borderTopLeftRadius,
              borderTopRightRadius: borderTopRightRadius,
              borderBottomLeftRadius: borderBottomLeftRadius,
              borderBottomRightRadius: borderBottomRightRadius,
              paddingVertical: paddingVertical,
              paddingHorizontal: paddingHorizontal,
              paddingTop: paddingTop,
              paddingBottom: paddingBottom,
              paddingLeft: paddingLeft,
              paddingRight: paddingRight,
              marginVertical: marginVertical,
              marginHorizontal: marginHorizontal,
              marginTop: marginTop,
              marginBottom: marginBottom,
              marginLeft: marginLeft,
              marginRight: marginRight
            }
          ]}>
          {children}
        </TouchableOpacity>
        : <TouchableHighlight
          underlayColor={underlayColor}
          onPress={onPress}
          onPressIn={onPressIn}
          style={stylesButton}>
          {children}
        </TouchableHighlight>
      }
    </>
  )
}