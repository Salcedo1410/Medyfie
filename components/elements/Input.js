/* React components */
import React, { useState } from 'react';

/* React native components */
import { TextInput } from 'react-native';

const InputContent = props => {
  const {
    onChangeText,
    onFocus,
    onBlur,
    keyboardType,
    maxLength,
    secureTextEntry,
    style,
    placeholder,
    colorPlaceholder,
    value
  } = props,

    [placeholderText, setPlaceholderText] = useState(placeholder),

    checkTextInputEmpty = value => !value ? setPlaceholderText(placeholder) : null;

  return (
    <TextInput
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      maxLength={maxLength}
      style={style}
      value={value}
      placeholder={placeholderText}
      placeholderTextColor={colorPlaceholder}
      onChangeText={e => {
        checkTextInputEmpty(e)
        onChangeText(e)
      }}
      onFocus={() => {
        setPlaceholderText('');
        onFocus();
      }}
      onBlur={() => {
        checkTextInputEmpty(value);
        onBlur();
      }}
    />
  )
}

export default InputContent;

InputContent.defaultProps = {
  placeholder: 'Escribe algo...',
  onChangeText: () => null,
  onFocus: () => null,
  onBlur: () => null
}
