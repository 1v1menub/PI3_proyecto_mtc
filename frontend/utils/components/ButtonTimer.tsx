import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {buttonTimerStyles} from '../../styles/TimerPage';
import CustomText from './CustomText';

interface ButtonTimerProps {
  action: () => void;
  title: string;
}

const ButtonTimer: React.FC<ButtonTimerProps> = props => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.action}>
      <View style={buttonTimerStyles.root}>
        <CustomText style={buttonTimerStyles.text} typography="Lato-Regular">
          {props.title}
        </CustomText>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonTimer;
