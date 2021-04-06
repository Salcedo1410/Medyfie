/* React components */
import React, { useState, Fragment } from 'react';

/* React native components */
import { View, Image } from 'react-native';

/* Components */
import Text from '../elements/Text';
import Button from '../elements/Button';

/* Librarys */
import { Icon } from 'react-native-elements';
import CountryPicker from 'react-native-country-picker-modal';

/* Styles */
import stylesX from '../../styles';

export default function ShowCountry(props) {
  const [visible, isVisible] = useState(false),
    [countrySelected, setCountrySelected] = useState('Selecciona un país'),
    [imageCountry, setImageCountry] = useState('');

  let imageEmpty = imageCountry !== '';

  return (
    <Fragment>
      <CountryPicker
        placeholder={null}
        renderFlagButton={false}
        visible={visible}
        onSelect={e => {
          setImageCountry(e.flag);
          setCountrySelected(e.name);
          props.onSelect(e);
        }}
        onClose={() => isVisible(false)}
        containerButtonStyle={{ position: 'absolute' }}
        filterProps={{ placeholder: 'Busca un país...' }}
        withFilter
        withEmoji={false}
      />
      <View style={stylesX.centerContent}>
        <Button
          opacity={0.65}
          isWithOpacity
          onPress={() => isVisible(true)}
          backgroundColor='#fff'
          paddingVertical={10}
          paddingHorizontal={15}
          borderRadius={15}
          styles={stylesX.boxShadow}
        >
          <View>
            <Icon size={stylesX.width(8)} name="globe" type="font-awesome-5" />
            <View
              style={
                [
                  stylesX.displayFlex,
                  stylesX.centerContent,
                  {
                    marginTop: imageEmpty ? 10 : 5,
                  }
                ]
              }>
              <Image
                style={{
                  marginRight: imageEmpty ? stylesX.width(2) : 0,
                  width: imageEmpty ? stylesX.width(6.25) : 0,
                  height: imageEmpty ? stylesX.width(5) : 0
                }}
                resizeMode="contain"
                source={imageEmpty ? { uri: imageCountry } : null}
              />
              <Text
                styles={
                  [
                    stylesX.fontFamily.Electrolize,
                    stylesX.textCenter
                  ]
                }
                size={13}
                content={`${countrySelected}`}
              >{`${countrySelected}`}</Text>
            </View>
          </View>
        </Button>
      </View>
    </Fragment>
  )
}
