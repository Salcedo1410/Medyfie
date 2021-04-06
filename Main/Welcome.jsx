/* React components */
import React from 'react';

/* React native components */
import { View, Image } from 'react-native';

/* Components */
import Text from '../components/elements/Text';
import Button from '../components/elements/Button';
import TextBold from '../components/elements/TextBold';

/* Libarys */
import AppIntroSlider from 'react-native-app-intro-slider';
import { ListItem } from 'react-native-elements';

/* Styles */
import stylesX from '../styles';
import colors from '../styles/colors';

/* JSON */
import data from './json/data-welcome';

export default function Welcome(props) {

  const renderMessages = ({ item }) => {
    return (
      <View
        style={
          [
            stylesX.centerContent,
            { flex: 1, paddingBottom: stylesX.height(15) }
          ]
        }
      >
        <View style={[stylesX.centerContent, { width: stylesX.width(80), maxWidth: 600, overflow: 'hidden' }]}>
          <Image
            style={{ width: item.widthImg, height: item.heightImg }}
            source={item.img}
            resizeMode="contain"
          />
          {item.title}
          <ListItem.Subtitle style={[stylesX.textCenter, stylesX.fontFamily.Electrolize, { fontSize: 15, width: stylesX.width(85), marginTop: 20 }]}>{item.text}</ListItem.Subtitle>
        </View>
      </View>
    );
  };

  return (
    <>
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <AppIntroSlider
          renderItem={renderMessages}
          data={data}
          // dotStyle={{backgroundColor: colors.whiteColorSecondary}}
          activeDotStyle={{
            // backgroundColor: colors.redColorPrimary
            backgroundColor: colors.darkredColorPrimary
          }}
          bottomButton
          nextLabel={<Text styles={[stylesX.fontFamily.BigShouldersDisplay, { letterSpacing: 2 }]}>Siguiente</Text>}
          nextStyle={{ backgroundColor: 'red' }}
          doneLabel={<Text styles={[stylesX.fontFamily.BigShouldersDisplay, { letterSpacing: 2 }]}>Comenzar</Text>}
          skipLabel={<Text size={15} color="black">OMITIR TODO</Text>}
          showSkipButton
          onDone={() => {
            props.onDone();
          }}
        />
      </View>
    </>
  )
}