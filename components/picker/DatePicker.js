/* React components */
import React, { useState, Fragment } from 'react';

/* React native components */
import { View } from 'react-native';

/* Components */
import Text from '../elements/Text';
import Button from '../elements/Button';

/* Librarys */
import { Icon } from 'react-native-elements';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useSelector, useDispatch } from 'react-redux';

/* Modules */
import dateNow from '../modules/dateNow';

/* Styles */
import stylesX from '../../styles';

let date = new Date();

const DatePicker = props => {

  let getDateStore = useSelector(store => store.date),
    dispatch = useDispatch();

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false),
    getDateNow = {
      dd: date.getDate(),
      mm: date.getMonth(),
      yyyy: date.getFullYear()
    };

  return (
    <Fragment>
      <View style={[stylesX.centerContent, { zIndex: 1 }]}>
        <Button
          paddingVertical={5}
          isWithOpacity
          borderRadius={10}
          opacity={.5}
          backgroundColor="#ffffff"
          onPress={() => setDatePickerVisibility(true)}
          width={props.width}
          styles={[
            stylesX.spaceAroundContent,
            stylesX.displayFlex,
            stylesX.boxShadow
          ]}>
          <Fragment>
            <Icon
              size={40}
              name="calendar"
              type="evilicon"
            />
            <Text>{getDateStore.opening}</Text>
          </Fragment>
        </Button>
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        onConfirm={e => {
          setDatePickerVisibility(false);
          dispatch({
            type: 'Get Date Now',
            nameDay: dateNow.getDate(e, 'dddd'),
            numberDay: dateNow.getTypeDate(e.getDate()),
            nameMonth: dateNow.getDate(e, 'MMMM'),
            numberMonth: dateNow.getTypeDate(e.getMonth()),
            year: dateNow.getFullYear(e),
            opening: `${dateNow.getDate(e, 'dddd')}, ${dateNow.getTypeDate(e.getDate())} de ${dateNow.getDate(e, 'MMMM')} - ${dateNow.getFullYear(e)}`
          });
        }}
        onCancel={() => setDatePickerVisibility(false)}
        date={new Date(
          getDateStore.year,
          getDateStore.numberMonth,
          getDateStore.numberDay
        )}
        minimumDate={new Date(1800, 0, 2)}
        maximumDate={new Date(
          getDateNow.yyyy,
          getDateNow.mm,
          getDateNow.dd
        )}
      />
    </Fragment>
  )
}

export default DatePicker;
