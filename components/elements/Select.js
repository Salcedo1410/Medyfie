/* React components */
import React, { useState } from 'react';

/* React native components*/
import { View, ScrollView } from 'react-native';

/* Component */
import Text from './Text';
import TextBold from './TextBold';
import Input from './Input';
import Button from './Button';
import Modal from '../dist/Modal';
import Tooltip from '../dist/Tooltip';

/* Librarys */
import DropDownPicker from 'react-native-dropdown-picker';
import { Icon } from 'react-native-elements';

/* Styles */
import stylesX from '../../styles';
import colors from '../../styles/colors';

export default function Select(props) {
  const {
    items,
    mode,
    defaultValue,
    onChangeOption,
    especialValue,
    width,
    widthModal,
    backgroundColor,
    borderColor,
    arrowColor,
    textSize,
    textSizeModal
  } = props,
    [initialOptionValue, setNewOptionValue] = useState(defaultValue),
    [options, showOptions] = useState(false),
    /* Show Modal */
    [modalOption, showModalOption] = useState(false),
    /* Especial Change Option */
    [modalEspecialOption, showModalEspecialOption] = useState(false),
    [valueEspecialOption, changeValueEspecialOption] = useState(null),
    [emptyInput, setEmptyInput] = useState(false);

  let elements = <View
    style={
      [
        stylesX.border(borderColor, "border", 1),
        mode === "Modal" ? stylesX.boxShadow : null,
        {
          position: mode !== 'Modal' ? 'absolute' : null,
          top: mode !== 'Modal' ? '100%' : null,
          zIndex: 99999,
          borderTopLeftRadius: mode === 'Modal' ? 10 : null,
          borderTopRightRadius: mode === 'Modal' ? 10 : null,
          borderBottomLeftRadius: mode !== 'Modal' ? 5 : 10,
          borderBottomRightRadius: mode !== 'Modal' ? 5 : 10,
          backgroundColor: backgroundColor,
          width: mode !== 'Modal' ? stylesX.width(width) : stylesX.width(widthModal)
        }
      ]}>
    {items.map((item, index, lengthArray) => {
      return <Button
        key={index}
        isWithOpacity
        onPress={() => {
          setNewOptionValue(item.title);
          mode !== 'Modal' ? showOptions(false) : showModalOption(false);
          onChangeOption(item.title);
          item.title === especialValue ? showModalEspecialOption(true) : null
        }}
        paddingVertical={10}
        styles={[index !== lengthArray.length - 1 ? stylesX.border(borderColor, "bottom", 1) : null]}>

        <Text
          size={mode !== 'Modal' ? textSize : textSizeModal}
          styles={{ marginHorizontal: mode !== 'Modal' ? 10 : 15 }}>
          {item.title}
        </Text>

      </Button>
    })}
  </View>;

  return (
    <View>
      <Button
        onPress={() => {
          mode === 'Modal' ? showModalOption(true) : showOptions(!options)
        }}
        isWithOpacity
        opacity={0.85}
        borderTopLeftRadius={5}
        borderTopRightRadius={5}
        borderBottomLeftRadius={!options ? 5 : 0}
        borderBottomRightRadius={!options ? 5 : 0}
        width={stylesX.width(width)}
        backgroundColor={backgroundColor}
        paddingHorizontal={10}
        paddingVertical={5}
        styles={[stylesX.centerContent, stylesX.displayFlex, stylesX.border(borderColor, !options ? 'border' : 'top left right', 1), { zIndex: 99999 }]}>

        <Text size={textSize} width="85%">{initialOptionValue}</Text>
        <Icon color={arrowColor} size={12} name={options ? "chevron-up" : "chevron-down"} type="font-awesome-5" />

      </Button>

      { mode === 'Modal'
        ? <Modal
          backdropOpacity={0.8}
          onBackdropPress={() => showModalOption(false)}
          isVisible={modalOption}>
          <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} style={{ maxHeight: stylesX.height(50), padding: 10 }}>
            {elements}
          </ScrollView>
        </Modal>
        : options
          ? elements
          : null
      }
      {
        modalEspecialOption ?
          <Modal
            backdropOpacity={0.8}
            onBackdropPress={() => showModalEspecialOption(false)}
            isVisible={modalEspecialOption}>
            <Tooltip
              textTooltip={<TextBold>Por favor ingrese un valor serio, este valor se mostrará en tu cuenta.</TextBold>}
              nameIcon="question-circle"
              colorIcon={"#fff"}
              locationTop={stylesX.height(35)}
              locationRight={stylesX.width(5)}
              backgroundTooltip="#fff"
              colorTextTooltip={colors.blackColorPrimary}
            />
            <Input
              value={valueEspecialOption}
              maxLength={25}
              placeholder="Ingresa un nuevo valor"
              colorPlaceholder={colors.whiteColorPrimary}
              style={
                [
                  stylesX.textCenter,
                  stylesX.border(colors.whiteColorPrimary, 'bottom', 1),
                  {
                    height: stylesX.height(5), width: stylesX.width(80),
                    color: colors.whiteColorSecondary
                  }
                ]}
                onChangeText={e => {
                  changeValueEspecialOption(e);
                  setEmptyInput(false);
                }}
            />
            {
              emptyInput
              ? <Text width={stylesX.width(80)} color="yellow">Porfavor, Ingrese un nuevo valor</Text>
              : null
            }
            <Button
              isWithOpacity
              backgroundColor="#fff"
              opacity={0.8}
              width={stylesX.width(80)}
              marginTop={stylesX.height(3)}
              paddingVertical={15}
              onPress={() => {
                !valueEspecialOption
                ? setEmptyInput(true)
                : (showModalEspecialOption(false), setNewOptionValue(valueEspecialOption));
                ;
              }}
              >
              <Text styles={stylesX.textCenter}>Aplicar Cambios</Text>
            </Button>
          </Modal>
          : null
      }
    </View>
  )
}

Select.defaultProps = {
  items: [
    {
      title: 'Opción 01'
    },
    {
      title: 'Opción 02'
    },
    {
      title: 'Opción 03'
    }
  ],
  textSize: 12,
  textSizeModal: 18,
  defaultValue: 'Elige una opción',
  width: 100,
  widthModal: 80,
  backgroundColor: '#fff',
  borderColor: '#dfdfdf',
  arrowColor: '#000'
}