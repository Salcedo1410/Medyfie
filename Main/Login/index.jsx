/* React components */
import React, { Fragment, useState } from 'react';

/* React native components */
import { View, Animated, Alert } from 'react-native';

/* Librarys */
import { Icon, ListItem } from 'react-native-elements';
import { useFocusEffect } from "@react-navigation/native";
import { Checkbox } from 'react-native-paper';

/* Components */
import Container from '../../components/dist/Container';
import Button from '../../components/elements/Button';
import Text from '../../components/elements/Text';
import Input from '../../components/elements/Input';
import NameApp from '../../components/app/NameApp';
import LogoApp from '../../components/app/LogoApp';

/* Functions */
import animateSlide from '../../components/functions/animateSlide';

/* Styles */
import stylesX from '../../styles';
import loginStyles from './css/styles';

/* JSON */
import colors from '../../styles/colors';

let slideUp = new Animated.Value(0);

const Login = props => {
  let correo = "husdadymena@gmail.com",
    contraseña = "mayita";

  const [checked, setChecked] = useState(false),
    [showEye, setShowEye] = useState(false),
    [user, setUser] = useState({
      email: '',
      password: ''
    }),

    checkUser = (property, value) => {
      setUser({ ...user, [property]: value });
    },

    /* Error message */

    [errorMessage, setErrorMessage] = useState(''),

    login = () => {
      let x = user.email === "",
        y = user.password === "",
        c = user.email !== correo,
        z = user.password !== contraseña;
      if (x && y) {
        setErrorMessage(1);
      } else if (x) {
        setErrorMessage(2);
      } else if (y) {
        setErrorMessage(3);
      } else if (c || z) {
        setErrorMessage(4);
      } else if (!c && !z) {
        setErrorMessage('');
        Alert.alert('Bienvenido !!!')
      }
    },

    ConditionErrorMessage = () => {
      return (
        <Fragment>
          {
            errorMessage === 1
              ? <ErrorMessage text="Por favor, ingresa tu correo electrónico y/o contraseña" />
              : errorMessage === 2
                ? <ErrorMessage text="Por favor, ingresa tu correo electrónico" />
                : errorMessage === 3
                  ? <ErrorMessage text="Por favor, ingresa tu contraseña" />
                  : errorMessage === 4
                    ? <ErrorMessage text="El correo electrónico y/o contraseña no son válidos" />
                    : null
          }
        </Fragment>
      )
    }

  useFocusEffect(
    React.useCallback(() => {
      animateSlide(slideUp, 1, 1500);
      return () => {
        animateSlide(slideUp, 0, 1000);
      };
    }, [])
  );

  return (
    <Container
      animation={slideUp}
      contentHeader={
        <Fragment>
          <LogoApp width={120} height={120}
            logoColorDarkRed
          />
          <Text
            color={colors.blackColorPrimary}
            size={16}
            styles={stylesX.fontFamily.Electrolize}
          >Inicia sesión en </Text>
          <View style={[stylesX.centerContent, stylesX.displayFlex, { marginBottom: 20 }]}>
            <Text
              color={colors.blackColorPrimary}
              size={25}
            >- </Text>
            <NameApp size={24} />
            <Text
              color={colors.blackColorPrimary}
              size={25}
            > -</Text>
          </View>
        </Fragment>
      }
      contentBody={
        <Fragment>
          <Text
            size={18}
            width="90%"
            styles={stylesX.fontFamily.PoiretOne}
          >Correo electrónico:</Text>

          <View style={loginStyles.boxTextInput}>
            <Icon
              name="user"
              type="font-awesome-5"
              size={20}
              color={colors.whiteColorSecondary}
              style={[loginStyles.icon, stylesX.centerContent, { backgroundColor: colors.darkredColorPrimary }]}
            />
            <Input
              maxLength={40}
              value={user.email}
              style={loginStyles.textInput}
              placeholder="Ingresa tu correo electrónico"
              colorPlaceholder="rgba(0,0,0,0.25)"
              onChangeText={e => checkUser('email', e)}
            />
          </View>

          <Text
            size={18}
            width="90%"
            content="Contraseña:"
            styles={[stylesX.fontFamily.PoiretOne, stylesX.border('rgba(0,0,0,0.15)', 'top', 1), { paddingTop: 10, marginTop: 10 }]}
          >Contraseña:</Text>

          <View style={[loginStyles.boxTextInput, { zIndex: 10, marginBottom: errorMessage ? 20 : 10 }]}>
            <Icon
              name="key"
              type="font-awesome-5"
              size={17}
              color={colors.whiteColorSecondary}
              style={[loginStyles.icon, stylesX.centerContent, { backgroundColor: colors.darkredColorPrimary }]}
            />
            <Input
              maxLength={40}
              secureTextEntry={showEye ? false : true}
              value={user.password}
              style={loginStyles.textInput}
              placeholder="Ingresa tu contraseña"
              colorPlaceholder="rgba(0,0,0,0.25)"
              onChangeText={e => checkUser('password', e)}
            />
            <View style={{ position: 'absolute', top: 17, right: 12 }}>
              <Icon
                onPress={() => setShowEye(!showEye)}
                name={showEye ? "eye" : "eye-slash"}
                size={23}
                type="font-awesome-5"
                style={{ zIndex: 50 }}
              />
            </View>
          </View>

          <ConditionErrorMessage />

          <Button
            onPress={() => login()}
            width="90%"
            backgroundColor={colors.darkredColorPrimary}
            borderRadius={20}
            marginTop={20}
            paddingVertical={15}
            contentIsCenter
          >
            <Text
              size={14}
              color={colors.whiteColorSecondary}
              styles={stylesX.fontFamily.Electrolize}
            >Entrar</Text>
          </Button>

          <View style={[stylesX.displayFlex, { width: '90%', marginTop: 25 }]}>

            <View style={[stylesX.displayFlex, { alignItems: 'center', width: '45%', marginBottom: 35 }]}>
              <Checkbox
                color={colors.darkredColorPrimary}
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => setChecked(!checked)}
              />
              <Text
                size={14}
                color={colors.blackColorPrimary}
                styles={stylesX.fontFamily.Electrolize}
                onPress={() => setChecked(!checked)}
              >Recuérdame</Text>
            </View>

            <ListItem.Subtitle
              style={[stylesX.underlined, { width: '55%' }]}
            >¿Olvidaste tu contraseña o tu nombre de usuario?</ListItem.Subtitle>
          </View>

          <ListItem.Subtitle
            style={stylesX.fontFamily.Electrolize}
            onPress={() => {
              animateSlide(slideUp, 0, 1500);
              setTimeout(() => props.navigation.navigate('Default-Screen'), 700)
            }}>¿No tienes una cuenta?,&nbsp;
            <Text
              size={14}
              color={colors.blackColorPrimary}
              styles={stylesX.underlined}
            >Registrate</Text>
          </ListItem.Subtitle>
        </Fragment>
      }
    />
  )
}

export default Login;

const ErrorMessage = props => {
  const { text } = props;
  return (
    <Text
      width="85%"
      color={colors.darkredColorPrimary}
      size={12}
      content={text}
      styles={{ textAlign: 'left' }}
    />
  )
}
