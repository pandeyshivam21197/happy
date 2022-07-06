import React, {FC, useState} from 'react';
import {StyleSheet, View, Modal, ViewStyle, StyleProp} from 'react-native';
import RNDatetimePicker from '@react-native-community/datetimepicker';
import {Button} from '@happy/common/src/components';

interface IProps {
  value: string;
  mode: 'time' | 'date';
  onChange: (value: string) => void;
  onClose: () => void;
  style?: StyleProp<ViewStyle>;
  is24Hour?: boolean;
  minimumDate?: Date;
  visible: boolean;
}

export const DateTimePicker: FC<IProps> = props => {
  const {
    value,
    mode,
    onChange,
    style,
    is24Hour = false,
    minimumDate,
    visible,
    onClose,
  } = props;

  const [pickerValue, setPickerValue] = useState('');

  return (
    <Modal
      animationType={'none'}
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View>
        <View>
          <Button
            buttonText="Done"
            buttonType="transparent"
            onPress={() => onChange(pickerValue)}
          />
          <Button
            buttonText="Cancel"
            buttonType="transparent"
            onPress={onClose}
          />
        </View>
        <RNDatetimePicker
          testID="dateTimePicker"
          value={value}
          mode={mode}
          is24Hour={is24Hour}
          display={'spinner'}
          onChange={setPickerValue}
          // style={[styles.container, style]}
          minimumDate={minimumDate}
          maximumDate={new Date()}
          // textColor={theme.palette.textColors.titleTextColor}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({});
