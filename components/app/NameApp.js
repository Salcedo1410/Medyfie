/* React components */
import React from 'react';

/* React components */
import { View } from 'react-native';

/* Components */
import Text from '../elements/Text';

/* Styles */
import stylesX from '../../styles';

export default function NameApp(props) {
  const { size } = props;
  return (
    <View style={[ stylesX.displayFlex, stylesX.centerContent ]}>
      <Text
        size={size}
        color="#800000"
        styles={[stylesX.fontFamily.Fascinate, {letterSpacing: 3}]}
      >Medyfie</Text>
    </View>
  )
}