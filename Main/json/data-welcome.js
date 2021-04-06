/* React components */
import React, { Fragment } from 'react';

/* React components */
import { View } from 'react-native';

/* Components */
import Text from '../../components/elements/Text';
import TextBold from '../../components/elements/TextBold';
import NameApp from '../../components/app/NameApp';

/* Styles */
import stylesX from '../../styles';
import colors from '../../styles/colors';

module.exports =
  [
    {
      "id": "screen1",
      "title": <View style={stylesX.centerContent}>
        <View style={[stylesX.displayFlex, stylesX.centerContent, { width: stylesX.width(90) }]}>
          <Text
            size={28}
            color={colors.darkredColorPrimary}
            styles={stylesX.fontFamily.Electrolize}
          >Bienvenidos a</Text>
          <NameApp size={36} />
        </View>
        <View style={[stylesX.border(colors.opacityBlackColor, 'bottom', 1), { width: stylesX.width(80), height: 1, marginTop: 7 }]}></View>
      </View>,
      "img": require("../../assets/img/logo.png"),
      "widthImg": stylesX.width(35),
      "heightImg": stylesX.width(35),
      "text": "Es una aplicación en la que podrás pagar tus consultas y tratamientos, además, tiene muchas más características que te gustarán...."
    },
    {
      "id": "screen2",
      "title": <Text
        size={25}
        styles={
          [
            stylesX.textCenter,
            stylesX.fontFamily.BigShouldersDisplay
          ]
        }>Senserit mediocrem vis ex, et dicunt deleniti gubergren mei</Text>,
      "img": require("../../assets/img/ilustrations/ilustration1.png"),
      "widthImg": stylesX.width(75),
      "heightImg": stylesX.width(75),
      "text": "In mel saperet expetendis. Vitae urbanitas sadipscing nec ut, at vim quis lorem labitur. Exerci electram has et, vidit solet tincidunt quo ad, moderatius contentiones nec no."
    },
    {
      "id": "screen3",
      "title": <Text
        size={25}
        styles={
          [
            stylesX.textCenter,
            stylesX.fontFamily.BigShouldersDisplay
          ]
        }>Senserit mediocrem vis ex, et dicunt deleniti gubergren mei</Text>,
      "img": require("../../assets/img/ilustrations/ilustration1.png"),
      "widthImg": stylesX.width(75),
      "heightImg": stylesX.width(75),
      "text": "In mel saperet expetendis. Vitae urbanitas sadipscing nec ut, at vim quis lorem labitur. Exerci electram has et, vidit solet tincidunt quo ad, moderatius contentiones nec no.",
      "img": require("../../assets/img/ilustrations/ilustration12.png"),
      "widthImg": stylesX.width(45),
      "heightImg": stylesX.width(45),
      "text": "In mel saperet expetendis. Vitae urbanitas sadipscing nec ut, at vim quis lorem labitur. Exerci electram has et, vidit solet tincidunt quo ad, moderatius contentiones nec no. Nam et puto abhorreant scripserit, et cum inimicus accusamus."
    },
    {
      "id": "screen4",
      "title": <Text
        size={20}
        styles={
          [
            stylesX.textCenter,
            stylesX.fontFamily.BigShouldersDisplay,
            { marginTop: 10 }
          ]
        }>Senserit mediocrem vis ex, et dicunt deleniti gubergren mei</Text>,
      "img": require("../../assets/img/ilustrations/ilustration1.png"),
      "widthImg": stylesX.width(75),
      "heightImg": stylesX.width(75),
      "text": "In mel saperet expetendis. Vitae urbanitas sadipscing nec ut, at vim quis lorem labitur. Exerci electram has et, vidit solet tincidunt quo ad, moderatius contentiones nec no.",
      "img": require("../../assets/img/ilustrations/ilustration8.png"),
      "widthImg": stylesX.width(35),
      "heightImg": stylesX.width(35),
      "text": "In mel saperet expetendis. Vitae urbanitas sadipscing nec ut, at vim quis lorem labitur."
    },
    {
      "id": "screen5",
      "title": <Text
        size={25}
        styles={
          [
            stylesX.textCenter,
            stylesX.fontFamily.BigShouldersDisplay
          ]
        }>Senserit mediocrem vis ex, et dicunt deleniti gubergren mei</Text>,
      "img": require("../../assets/img/ilustrations/ilustration1.png"),
      "widthImg": stylesX.width(75),
      "heightImg": stylesX.width(75),
      "text": "In mel saperet expetendis. Vitae urbanitas sadipscing nec ut, at vim quis lorem labitur. Exerci electram has et, vidit solet tincidunt quo ad, moderatius contentiones nec no.",
      "img": require("../../assets/img/ilustrations/ilustration9.png"),
      "widthImg": stylesX.width(75),
      "heightImg": stylesX.width(75),
      "text": "In mel saperet expetendis. Vitae urbanitas sadipscing nec ut, at vim quis lorem labitur. Exerci electram has et, vidit solet tincidunt quo ad, moderatius contentiones nec no. Nam et puto abhorreant scripserit, et cum inimicus accusamus."
    },
    {
      "id": "screen6",
      "title": <Text
        size={20}
        styles={
          [
            stylesX.textCenter,
            stylesX.fontFamily.BigShouldersDisplay
          ]
        }>Senserit mediocrem vis ex, et dicunt deleniti gubergren mei</Text>,
      "img": require("../../assets/img/ilustrations/ilustration1.png"),
      "widthImg": stylesX.width(75),
      "heightImg": stylesX.width(75),
      "text": "In mel saperet expetendis. Vitae urbanitas sadipscing nec ut, at vim quis lorem labitur. Exerci electram has et, vidit solet tincidunt quo ad, moderatius contentiones nec no.",
      "img": require("../../assets/img/ilustrations/ilustration11.png"),
      "widthImg": stylesX.width(75),
      "heightImg": stylesX.width(75),
      "text": "In mel saperet expetendis. Vitae urbanitas sadipscing nec ut, at vim quis lorem labitur. Exerci electram has et, vidit solet tincidunt quo ad, moderatius contentiones nec no."
    },
    {
      "id": "screen7",
      "title": <Text
        size={25}
        styles={
          [
            stylesX.textCenter,
            stylesX.fontFamily.BigShouldersDisplay
          ]
        }>Senserit mediocrem vis ex, et dicunt deleniti gubergren mei</Text>,
      "img": require("../../assets/img/ilustrations/ilustration1.png"),
      "widthImg": stylesX.width(75),
      "heightImg": stylesX.width(75),
      "text": "In mel saperet expetendis. Vitae urbanitas sadipscing nec ut, at vim quis lorem labitur. Exerci electram has et, vidit solet tincidunt quo ad, moderatius contentiones nec no.",
      "img": require("../../assets/img/ilustrations/ilustration10.png"),
      "widthImg": stylesX.width(75),
      "heightImg": stylesX.width(75),
      "text": "In mel saperet expetendis. Vitae urbanitas sadipscing nec ut, at vim quis lorem labitur. Exerci electram has et, vidit solet tincidunt quo ad, moderatius contentiones nec no. Nam et puto abhorreant scripserit, et cum inimicus accusamus."
    }
  ]