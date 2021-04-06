/* React components */
import React, { Fragment, useState, useEffect } from 'react';

/* React native components */
import { View, Alert, ScrollView, Image } from 'react-native';

/* Components */
import Text from '../../components/elements/Text';
import TextBold from '../../components/elements/TextBold';
import Button from '../../components/elements/Button';
import Input from '../../components/elements/Input';
import Select from '../../components/elements/Select';
import Link from '../../components/dist/Link';
import Loader from '../../components/dist/Loader';
import Tooltip from '../../components/dist/Tooltip';
import DatePicker from '../../components/picker/DatePicker';
import TimePicker from '../../components/picker/TimePicker';
import CountryPicker from '../../components/picker/CountryPicker';
import ImagePicker from '../../components/picker/ImagePicker';

/* Librarys */
import { Icon, ListItem } from 'react-native-elements';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

/* Functions */
import useAsyncStorage from '../../components/functions/useAsyncStorage';

/* Styles */
import stylesX from '../../styles';
import colors from '../../styles/colors.json';

const CreateAccountHospital = props => {

  let getStateStore = useSelector(store => store),
    getDateNow = getStateStore.date,
    getHourNow = getStateStore.hour,
    getProfileImageHospitalAccount = getStateStore.imagesProfile.profileImageHospitalAccount;

  const [informationHospital, saveInformationHospital] = useState({}),

    /* Type Data Hospital */
    typeData = [
      'typeOrganization',
      'hospitalName',
      'password',
      'confirmPassword',
      'address',
      'city',
      'postalCode',
      'ruc',
      'phone',
      'email'
    ],

    /* Date Opening */
    date = {
      nameDayOpening: getDateNow.nameDay,
      numberDayOpening: getDateNow.numberDay,
      monthOpening: getDateNow.nameMonth,
      numberMonthOpening: getDateNow.numberMonth,
      yearOpening: getDateNow.year,
      opening: getDateNow.opening
    },

    /* Business Hours */
    schedule = {
      entryTime: getHourNow.entryTime,
      departureTime: getHourNow.departureTime,
      businessHours: getHourNow.businessHours
    },

    checkInformationHospital = (property, value) => {
      saveInformationHospital({ ...informationHospital, [property]: value });
    },

    [typeErrorMessage, setTypeErrorMessage] = useState(false);

  useEffect(() => {
    AsyncStorage.multiGet(typeData).then(x => {
      saveInformationHospital({
        typeOrganization: x[0][1],
        hospitalName: x[1][1],
        password: x[2][1],
        confirmPassword: x[3][1],
        address: x[4][1],
        city: x[5][1],
        postalCode: x[6][1],
        ruc: x[7][1],
        phone: x[8][1],
        email: x[9][1]
      })
    });
  }, [])

  return (
    <Fragment>
      <Loader
        routName={props.route.name}
        headerShown={() => props.navigation.setOptions({ headerShown: true })}
        headerHidden={() => props.navigation.setOptions({ headerShown: false })}
      />
      <ScrollView>
        <View style={{ marginTop: stylesX.height(3.5), marginBottom: stylesX.height(3), paddingHorizontal: '5%' }}>

          {/* Background Profile */}

          <View style={{
            backgroundColor: colors.blackColorSecondary,
            height: stylesX.width(49),
            width: stylesX.width(100),
            position: 'absolute',
            top: stylesX.height(-3.5),
            left: 0
          }}>

            <View style={[stylesX.displayFlex, stylesX.centerContent, { marginTop: stylesX.height(5), zIndex: 500 }]}>
              <Icon
                color={colors.whiteColorPrimary}
                name="image"
                type="evilicon"
                size={stylesX.width(10)}
              />
              <Text
                size={stylesX.width(3)}
                color={colors.whiteColorPrimary}
                styles={stylesX.textCenter}
              >Actualiza tu imagen de portada</Text>
            </View>
            <ImagePicker
              imagePickerIsWithBackground
              imageToUpdate="backgroundImageHospitalAccount"
              src='http://asilasventas.com/wp-content/uploads/2018/11/man-in-office.jpg'
            />
          </View>

          {/* Image Profile */}

          <View
            style={[stylesX.displayFlex, stylesX.centerContent, { marginTop: stylesX.width(26) }]}>
            <View
              style={
                [
                  stylesX.centerContent,
                  stylesX.border('#fff', 'border', 3),
                  {
                    borderRadius: stylesX.width(25),
                    backgroundColor: colors.blackColorSecondary,
                    height: stylesX.width(30.5),
                    width: stylesX.width(30.5),
                    overflow: 'hidden'
                  }
                ]
              }>
              <Icon
                color={colors.whiteColorPrimary}
                name="camera"
                type="evilicon"
                size={stylesX.width(10)}
              />
              <Text
                width="80%"
                size={stylesX.width(2.15)}
                color={colors.whiteColorPrimary}
                styles={stylesX.textCenter}
              >{getProfileImageHospitalAccount === null ? "Añade una foto de perfil" : "Actualiza tu foto de perfil"}</Text>
              <ImagePicker
                imageToUpdate="profileImageHospitalAccount"
              />

            </View>
          </View>

          {/* Type Organization */}
          <View style={[stylesX.displayFlex, stylesX.spaceAroundContent, { marginTop: 15 }]}>
            <CustomText
              width={stylesX.width(40)}
              withOutBorder
            >Tipo de Organización:</CustomText>
            <View>
              <Select
                mode="Modal"
                defaultValue="Hospital"
                width={50}
                onChangeOption={item => {
                  saveInformationHospital({
                    ...informationHospital,
                    typeOrganization: item
                  })
                }}
                especialValue="Otro"
                items={
                  [
                    {
                      title: 'Hospital'
                    },
                    {
                      title: 'Clínica'
                    },
                    {
                      title: 'Otro'
                    }
                  ]
                }
              />
            </View>
          </View>

          {/* Hospital Name */}
          <CustomText>Nombre del Hospital/Clínica:</CustomText>
          <CustomInput
            value={informationHospital.hospitalName}
            onChangeText={e => {
              checkInformationHospital(typeData[1], e);
              useAsyncStorage.storeData(typeData[1], e);
            }}
            placeholder="Ejm: Hospital Nacional Arzobispo Loayza"
          />

          {/* Password */}
          <CustomText>Contraseña</CustomText>
          <CustomInput
            value={informationHospital.password}
            onChangeText={e => {
              checkInformationHospital(typeData[2], e);
              useAsyncStorage.storeData(typeData[2], e);
            }}
            placeholder="Ejm: lf$IH!h!2^8s"
          />

          {/* Confirm password */}
          <CustomText>Confirmar contraseña:</CustomText>
          <CustomInput
            value={informationHospital.confirmPassword}
            onChangeText={e => {
              checkInformationHospital(typeData[3], e);
              useAsyncStorage.storeData(typeData[3], e);
              if (e === informationHospital.password) {
                setTimeout(() => {
                  setTypeErrorMessage(null)
                }, 2000);
                setTypeErrorMessage('Contraseñas coinciden')
              } else {
                setTypeErrorMessage('Contraseñas no coinciden')
              }
            }}
            placeholder="Ejm: lf$IH!h!2^8s"
          />

          {typeErrorMessage === 'Contraseñas coinciden' && informationHospital.password === informationHospital.confirmPassword
            ? <ErrorMessage
              color="green"
              message={`\xA0Las contraseñas son iguales`}
              iconVisible
              iconName="check"
            />
            : typeErrorMessage === 'Contraseñas no coinciden'
              ? <ErrorMessage
                color="red"
                message={`\xA0Ambas contraseñas deben ser iguales`}
                iconVisible
                iconName="times-circle"
              />
              : null
          }

          {/* Address */}
          <CustomText>Dirección:</CustomText>
          <CustomInput
            value={informationHospital.address}
            onChangeText={e => {
              checkInformationHospital(typeData[4], e);
              useAsyncStorage.storeData(typeData[4], e);
            }}
            placeholder="Ejm: Avenida Alfonso Ugarte 848"
          />

          {/* Country */}
          <CustomText>País:</CustomText>
          <CountryPicker
            onSelect={e => {
              saveInformationHospital({
                ...informationHospital,
                country: e.name
              })
            }}
          />

          {/* City */}
          <CustomText>Ciudad/Región:</CustomText>
          <CustomInput
            value={informationHospital.city}
            onChangeText={e => {
              checkInformationHospital('city', e);
              useAsyncStorage.storeData(typeData[5], e);
            }}
            placeholder="Ejm: Lima"
          />

          {/* Opening */}
          <CustomText>Fecha de Inauguración del Hospital/Clínica:</CustomText>
          <DatePicker width={stylesX.width(80)} />

          {/* Postal Code */}
          <View>
            <Tooltip
              textTooltip="El código postal es un esquema que se asigna a distintas zonas o lugares de un país."
              sizeIcon={20}
              nameIcon="question-circle"
              locationTop={stylesX.height(2)}
              locationRight={0}
            />
          </View>
          <CustomText>Código Postal:</CustomText>
          <CustomInput
            maxLength={10}
            keyboardType="numeric"
            value={informationHospital.postalCode}
            onChangeText={e => {
              checkInformationHospital(typeData[6], e);
              useAsyncStorage.storeData(typeData[6], e);
            }}
            placeholder="Ejm: 20566"
          />

          {/* RUC */}
          <View>
            <Tooltip
              textTooltip={
                <Fragment>
                  <Text>La </Text>
                  <TextBold>identificación tributaria </TextBold>
                  <Text>{"es un código único, generalmente de carácter alfanumérico, utilizado con el fin de poder identificar inequívocamente a toda persona natural o jurídica susceptible de tributar.\n\nAsignado a éstas por los Estados, con el que confeccionan el registro o censo de las mismas, para efectos administrativo-tributarios.\n\nEn Perú también es llamado "}</Text>
                  <TextBold>Registro Único de Contribuyentes (RUC): </TextBold>
                  <Text>{"es el número que identifica como contribuyente a una Persona Jurídica o Persona Natural.\n\nEl "}</Text>
                  <TextBold>RUC</TextBold>
                  <Text>{" contiene los datos de identificación de la actividad económica, es único y consta de once dígitos. Su uso es obligatorio en toda declaración o trámite que se realice ante la Sunat.\n\nPor favor visite el siguiente "}</Text>
                  <Link
                    text="enlace"
                    textColor={colors.chocolateColorPrimary}
                    url="https://es.wikipedia.org/wiki/Identificaci%C3%B3n_tributaria#Identificaci%C3%B3n_tributaria_por_pa%C3%ADses"
                  />
                  <Text> para ver su </Text>
                  <TextBold>identificación tributaria</TextBold>
                  <Text> en su respectivo país.</Text>
                </Fragment>
              }
              sizeIcon={20}
              nameIcon="question-circle"
              locationTop={stylesX.height(2)}
              locationRight={0}
            />
          </View>
          <CustomText>RUC:</CustomText>
          <CustomInput
            maxLength={11}
            keyboardType="numeric"
            value={informationHospital.ruc}
            onChangeText={e => {
              checkInformationHospital(typeData[7], e);
              useAsyncStorage.storeData(typeData[7], e);
            }}
            placeholder="Ejm: 10238901487"
          />

          {/* Phone */}
          <CustomText>Número de teléfono del Hospital/Clínica:</CustomText>
          <CustomInput
            maxLength={9}
            keyboardType="numeric"
            value={informationHospital.phone}
            onChangeText={e => {
              checkInformationHospital(typeData[8], e);
              useAsyncStorage.storeData(typeData[8], e);
            }}
            placeholder="Ejm: (091) 891200"
          />

          {/* Business hours */}
          <CustomText>Horario de atención:</CustomText>
          <TimePicker width={stylesX.width(80)} />

          {/* E-mail */}
          <CustomText>E-mail:</CustomText>
          <CustomInput
            keyboardType="email-address"
            value={informationHospital.email}
            onChangeText={e => {
              checkInformationHospital('email', e);
              useAsyncStorage.storeData(typeData[9], e);
            }}
            placeholder="Ejm: myhospital@gmail.com"
          />

          <Button
            onPress={e => console.log(informationHospital.typeOrganization)}
            isWithOpacity
            opacity={0.7}
            contentIsCenter
            paddingVertical={20}
            borderRadius={20}
            marginTop={stylesX.height(5)}
            backgroundColor={colors.blackColorSecondary}
          >
            <Text
              size={13}
              styles={
                [
                  stylesX.fontFamily.Electrolize,
                  stylesX.underlined,
                  {
                    letterSpacing: 1
                  }
                ]
              }
              color={colors.whiteColorSecondary}
            >Registrarse</Text>
          </Button>
        </View>
      </ScrollView>
    </Fragment>
  )
}

export default CreateAccountHospital;

function CustomText(props) {
  const {
    onPress,
    width,
    children,
    customMarginVertical,
    customMarginTop,
    withOutBorder
  } = props;
  return (
    <Text
      width={width}
      onPress={onPress}
      size={18}
      styles={[
        stylesX.fontFamily.BigShouldersDisplay,
        !withOutBorder ? stylesX.border(colors.opacityBlackColor, 'bottom') : null,
        {
          letterSpacing: 1,
          marginVertical: !customMarginVertical ? 10 : customMarginVertical,
          marginTop: customMarginTop,
          paddingBottom: !withOutBorder ? stylesX.width(2) : 0
        }
      ]}
    >{children}</Text>
  )
}

function CustomInput(props) {
  const {
    value,
    onChangeText,
    maxLength,
    placeholder,
    keyboardType
  } = props;
  return (
    <Input
      maxLength={maxLength}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      style={[
        stylesX.fontFamily.BigShouldersDisplay,
        {
          borderRadius: 20,
          paddingHorizontal: 15,
          backgroundColor: colors.redColorPrimary,
          letterSpacing: 2,
          color: colors.whiteColorSecondary,
          zIndex: -9999999
        }
      ]}
      placeholder={placeholder}
      colorPlaceholder={colors.whiteColorPrimary}
    />
  )
}

function ErrorMessage(props) {
  const {
    color,
    children,
    iconVisible,
    iconName
  } = props;
  return (
    <View
      style={
        [
          stylesX.displayFlex,
          stylesX.leftContent,
          { marginTop: stylesX.width(2), marginLeft: stylesX.width(1) }
        ]
      }>
      {
        iconVisible
          ? <Icon
            size={20}
            color={color}
            name={iconName}
            type="font-awesome-5"
          />
          : null
      }
      <Text
        size={12}
        color={color}
      >{children}</Text>
    </View>
  )
}
