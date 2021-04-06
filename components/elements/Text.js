/* React components */
import React from 'react';

/* React native components */
import { Text } from 'react-native';

export default function TextContent(props) {
  const {
    onPress,
    onTextLayout,
    lines,
    textBreak,
    size,
    color,
    width,
    styles,
    children
  } = props;
  return (
    <Text
      onPress={onPress}
      onTextLayout={onTextLayout}
      numberOfLines={lines}
      textBreakStrategy={textBreak}
      style={[ styles, { fontSize: size, color: color, width: width }]}
    >{ children }</Text>
  )
}