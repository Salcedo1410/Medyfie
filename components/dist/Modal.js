/* React components */
import React from 'react';

/* React native components */
import { View, ScrollView } from 'react-native';

/* Librarys */
import Modal from 'react-native-modal';

/* Styles */
import stylesX from '../../styles';

export default function ModalScreen(props) {
  const {
    children,
    isVisible,
    onBackdropPress,
    backdropOpacity,
    animationIn,
    animationOut,
    animationTime,
  } = props;

  return (
    <Modal
      style={stylesX.centerContent}
      useNativeDriver={true}
      onBackdropPress={() => onBackdropPress()}
      backdropOpacity={backdropOpacity}
      animationInTiming={animationTime}
      backdropTransitionInTiming={animationTime}
      animationOut={animationTime}
      backdropTransitionOutTiming={animationTime}
      animationIn={animationIn}
      animationOut={animationOut}
      isVisible={isVisible}>
      {children}
    </Modal>
  )
}

ModalScreen.defaultProps = {
  onBackdropPress: () => null,
  backdropOpacity: 0.7
}
