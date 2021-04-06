/* React components */
import React, { Fragment, useCallback, useState } from 'react';

/* React native components */
import { Animated } from 'react-native';

/* Librarys */
import {
  Icon,
  ListItem
} from 'react-native-elements';
import { useFocusEffect } from "@react-navigation/native";
import { useNetInfo } from "@react-native-community/netinfo";

/* Components */
import Button from '../components/elements/Button';
import Text from '../components/elements/Text';
import Container from '../components/dist/Container';
import Loader from '../components/dist/Loader';

/* Functions */
import animateSlide from '../components/functions/animateSlide';

/* Styles */
import colors from '../styles/colors';
import stylesX from '../styles';

let slide = new Animated.Value(0);

const UserRegister = props => {

  let netInfo = useNetInfo();

  const { loaderIsVisible, navigation, route } = props;

  useFocusEffect(
    useCallback(() => {
      // Alert.alert(netInfo.isConnected.toString())
      animateSlide(slide, 1, 2000);
      return () => {
        animateSlide(slide, 0, 2000);
      };
    }, [])
  );

  return (
    <Fragment>
    { loaderIsVisible ? <Loader routName={route.name} /> : null } 
      <Container
        animation={slide}
        conditionImage={true}
        contentBody={
          <Fragment>
            <Button
              onPress={() => navigation.navigate('Create-Account-Person')}
              width="90%"
              isWithOpacity
              backgroundColor={colors.blackColorPrimary}
              opacity={.65}
              paddingVertical={20}
              paddingHorizontal="3%"
              borderRadius={20}
              marginTop={225}
              marginBottom={10}
              styles={[stylesX.spaceAroundContent, stylesX.displayFlex]}
            >
              <Fragment>
                <Icon
                  name='person'
                  color={colors.whiteColorPrimary}
                />
                <Text
                  size={16}
                  color="white"
                  styles={[stylesX.fontFamily.PoiretOne, stylesX.textCenter]}
                >Crear cuenta como persona común</Text>
              </Fragment>
            </Button>

            <Button
              onPress={() => navigation.navigate('Create-Account-Hospital')}
              underlayColor={colors.redColorPrimary}
              width="90%"
              opacity={.65}
              backgroundColor={colors.darkredColorPrimary}
              paddingVertical={20}
              paddingHorizontal="3%"
              borderRadius={20}
              marginVertical={10}
              styles={[stylesX.displayFlex, stylesX.centerContent]}
            >
              <Fragment>
                <Icon
                  name='hospital'
                  type="font-awesome-5"
                  color={colors.whiteColorPrimary}
                />
                <Text
                  size={16}
                  width="85%"
                  color="white"
                  styles={[stylesX.fontFamily.PoiretOne, stylesX.textCenter]}
                >Crear cuenta como Hospital o Clínica</Text>
              </Fragment>
            </Button>

            <ListItem.Subtitle
              style={[stylesX.fontFamily.Electrolize, { marginTop: 20 }]}
              onPress={() => {
                animateSlide(slide, 0, 2000);
                setTimeout(() => props.navigation.navigate('Login'), 700)
              }}
            >¿Ya tienes una cuenta?,&nbsp;
            <Text
                size={14}
                content="Inicia Sesión"
                color="rgba(0,0,0,0.45)"
                styles={stylesX.underlined}
              />
            </ListItem.Subtitle>
          </Fragment>
        } />
    </Fragment>
  );
}

export default UserRegister;

