import React, {FunctionComponent} from 'react';
import {Text, TextProps} from 'react-native';

interface CustomText extends TextProps {
  typography:
    | 'Lato-Black'
    | 'Lato-BlackItalic'
    | 'Lato-Bold'
    | 'Lato-BoldItalic'
    | 'Lato-Italic'
    | 'Lato-Light'
    | 'Lato-LightItalic'
    | 'Lato-Regular'
    | 'Lato-Thin'
    | 'Lato-ThinItalic';
}

const CustomText: FunctionComponent<CustomText> = props => {
  return (
    // @ts-ignore
    <Text {...props} style={{...props.style, fontFamily: props.typography}}>
      {props.children}
    </Text>
  );
};

export default CustomText;
