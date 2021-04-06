/* React components */
import React, { useState, Fragment } from 'react';

/* React native components */
import { View, ScrollView } from "react-native";

/* Components */
import Text from '../elements/Text';
import Button from '../elements/Button';
import Modal from '../dist/Modal';

/* Librarys */
import { Icon } from 'react-native-elements';

/* JSON */
import colors from '../../styles/colors';

const Tooltip = props => {

  const {
    textTooltip,
    sizeIcon,
    nameIcon,
    colorIcon,
    locationTop,
    locationLeft,
    locationRight,
    backgroundTooltip,
    colorTextTooltip
  } = props,

    [tooltip, setTooltip] = useState(false),
    [modal, showModal] = useState(false),

    /* Lines of Text */
    [lines, setLines] = useState(''),
    onTextLayout = e => setLines(e.nativeEvent.lines.length);

  return (
    <Fragment>
      <Modal
        onBackdropPress={() => showModal(false)}
        animationTime={3000}
        animationIn="fadeInDown"
        animationOut="fadeOutUpBig"
        isVisible={modal}>
        <View style={{ position: 'absolute', top: 0, right: 0 }}>
          <Icon
            onPress={() => showModal(false)}
            color={colorTextTooltip}
            size={36}
            name="window-close"
            type="font-awesome-5"
          />
        </View>
        <View
          style={{
            maxHeight: 500,
            borderRadius: 8,
            backgroundColor: colorTextTooltip,
            paddingHorizontal: 15,
            paddingVertical: 35,
            borderRadius: 15
          }}>
          <ScrollView>
            <Text size={14}>{textTooltip}</Text>
          </ScrollView>
        </View>
      </Modal>

      {tooltip ? <View
        style={[
          {
            backgroundColor: backgroundTooltip,
            position: 'absolute',
            top: lines === 1 ? locationTop - 46 : lines === 2 ? locationTop - 62 : lines > 2 ? locationTop - 77 : null,
            left: locationLeft >= 0 ? locationLeft - 4 : locationLeft,
            right: locationRight >= 0 ? locationRight - 4 : locationRight,
            padding: 10,
            borderRadius: 8,
            zIndex: 99999,
            width: '70%'
          }
        ]}
      >
        <Text
          onPress={() => {
            lines > 3 && showModal(true);
            setTooltip(false);
          }}
          onTextLayout={e => onTextLayout(e)}
          lines={3}
          color={colorTextTooltip}
          size={12}
        >{textTooltip}</Text>
        <View
          style={{
            position: 'absolute',
            zIndex: 1,
            bottom: -13.5,
            borderTopColor: backgroundTooltip,
            borderLeftColor: 'transparent',
            borderRightColor: 'transparent',
            borderBottomColor: 'transparent',
            borderWidth: 7,
            left: locationLeft >= 0 ? 6 : locationLeft, right: locationRight >= 0 ? 6 : locationRight
          }}>
        </View>
      </View>
        : null
      }
      <Button
        styles={{
          position: 'absolute',
          top: locationTop,
          left: locationLeft,
          right: locationRight,
          zIndex: 100
        }}
      >
        <Icon
          onPress={() => setTooltip(!tooltip)}
          size={sizeIcon}
          name={nameIcon}
          color={colorIcon}
          type="font-awesome-5"
        />
      </Button>
    </Fragment>
  );
};

export default Tooltip;

Tooltip.defaultProps = {
  backgroundTooltip: colors.blackColorSecondary,
  colorTextTooltip: colors.whiteColorSecondary
}