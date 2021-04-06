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
import { useSelector, useDispatch } from "react-redux";

/* Modules */
import dateNow from '../modules/dateNow';

/* Styles */
import stylesX from '../../styles';

let getTime = new Date();

const TimePicker = props => {

  let getStateStore = useSelector(store => store),
    getHourNow = getStateStore.hour,
    dispatch = useDispatch();

  const [isTimePickerVisible, setTimePickerVisibility] = useState(false),
    [firstTime, setFirstTime] = useState(true);

  getTime.setHours(
    firstTime ? getHourNow.firstHour : getHourNow.secondHour,
    firstTime ? getHourNow.firstMinutes : getHourNow.secondMinutes
  );

  return (
    <Fragment>
      <View style={stylesX.centerContent}>
        <Button
          borderRadius={10}
          paddingVertical={5}
          isWithOpacity
          opacity={1}
          backgroundColor="#ffffff"
          width={props.width}
          styles={[
            stylesX.centerContent,
            stylesX.displayFlex,
            stylesX.boxShadow,
            { zIndex: 50 }
          ]}
        >
          <Fragment>
            <Icon
              size={40}
              name="clock"
              type="evilicon"
            />
            <Button
              isWithOpacity
              onPress={() => {
                setFirstTime(true);
                setTimePickerVisibility(true);
              }}>
              <Text>{`\t${getHourNow.entryTime} `}</Text>
            </Button>
            <Button
              isWithOpacity
              onPress={() => {
                setFirstTime(false);
                setTimePickerVisibility(true);
              }}
            >
              <Text>{` -  ${getHourNow.departureTime}`}</Text>
            </Button>
          </Fragment>
        </Button>
      </View>
      <DateTimePickerModal
        date={getTime}
        mode="time"
        isVisible={isTimePickerVisible}
        onConfirm={e => {
          let hour = dateNow.getTypeDate(e.getHours()),
            minutes = dateNow.getTypeDate(e.getMinutes());

          setTimePickerVisibility(false);

          firstTime
            ? dispatch({
              type: 'Get First Hour',
              firstHour: hour,
              firstMinutes: minutes
            })
            : dispatch({
              type: 'Get Second Hour',
              secondHour: hour,
              secondMinutes: minutes
            });

        }}
        onCancel={() => setTimePickerVisibility(false)}
      />
    </Fragment>
  )
}

export default TimePicker;
