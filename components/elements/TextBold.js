/* React components */
import React from 'react';

/* React native components */
import Text from './Text';

export default function TextBold(props) {
  const {
    onPress,
    children,
    lines,
    textBreak,
    size,
    color,
    width,
    styles
  } = props;
  return (
    <Text
      onPress={onPress}
      size={size}
      color={color}
      width={width}
      numberOfLines={lines}
      textBreakStrategy={textBreak}
      styles={[styles, { fontWeight: 'bold' }]}
    >{ children }</Text>
  )
}