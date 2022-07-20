import React, {FC, useState} from 'react';
import {StyleSheet, View, ViewStyle, StyleProp} from 'react-native';
import RNDatetimePicker from '@react-native-community/datetimepicker';
import {Button} from '@happy/common/src/components';
import Modal from '@happy/mobile/src/components/atoms/Modal';
import theme from '@happy/common/src/styles/theme';
import {isAndroid, isIOS} from '@happy/common/src/utils/PlatformUtils';

interface IProps {
  value: Date | null;
  mode: 'time' | 'date';
  onChange: (value: Date) => void;
  onClose: () => void;
  style?: StyleProp<ViewStyle>;
  is24Hour?: boolean;
  minimumDate?: Date;
  maximumDate?: Date;
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
    maximumDate,
    visible,
    onClose,
  } = props;

  const [pickerValue, setPickerValue] = useState(value || new Date());

  return (
    <>
      {isAndroid() && visible ? (
        <RNDatetimePicker
          testID="dateTimePicker"
          value={pickerValue}
          mode={mode}
          is24Hour={is24Hour}
          display={isIOS() ? 'spinner' : 'default'}
          onChange={(e, date) => {
            date && onChange(date);
          }}
          minimumDate={minimumDate}
          maximumDate={maximumDate}
          textColor={theme.palette.textColors.titleTextColor}
        />
      ) : (
        <Modal visible={visible} onClose={onClose}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Button
              buttonText="Done"
              buttonType="transparent"
              onPress={() => onChange(pickerValue)}
              fontWeight="semiBold"
              textType="subHeading"
            />
            <Button
              buttonText="Cancel"
              buttonType="transparent"
              onPress={onClose}
              fontWeight="semiBold"
              textType="subHeading"
            />
          </View>
          <RNDatetimePicker
            testID="dateTimePicker"
            value={pickerValue}
            mode={mode}
            is24Hour={is24Hour}
            display={isIOS() ? 'spinner' : 'default'}
            onChange={(e, date) => {
              console.log(date, 'date%%%%%');
              date && setPickerValue(date);
            }}
            minimumDate={minimumDate}
            maximumDate={maximumDate}
            textColor={theme.palette.textColors.titleTextColor}
          />
        </Modal>
      )}
    </>
  );
};

const styles = StyleSheet.create({});
