/* React components */
import React from 'react';

/* React native components */
import { Image } from 'react-native';

export default function LogoApp(props) {
  const { width, height, styles, logoColorDarkRed } = props;
  let logo = logoColorDarkRed
  ? require('../../assets/img/logo.png')
  : require('../../assets/img/logo-loading.png');
  return (
    <Image
      source={logo}
      style={[ styles, { width: width, height: height }]}
    />
  )
}