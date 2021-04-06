/* React components */
import React, { useCallback } from "react";

/* React native components */
import { Alert, Linking } from "react-native";

/* Components */
import Text from '../elements/Text';

/* Styles */
import stylesX from '../../styles';

export default function Link(props){
  const { url, text, textColor, textSize } = props,
  handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);
    supported
    ? await Linking.openURL(url)
    : Alert.alert(`Don't know how to open this URL: ${url}`);
  }, [url]);

  return <Text color={textColor} styles={stylesX.underlined} size={textSize} onPress={() => handlePress()}>{text}</Text>;
};
