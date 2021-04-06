

/* React components */
import React, { useState } from 'react';

/* React native components */
import { View } from 'react-native';

/* Librarys */
import { Icon } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector, useDispatch } from 'react-redux';

/* Components */
import Welcome from './Welcome';
import Index from '.';
import Login from './Login';
import CreateAccountPerson from './Create-Person-Account';
import CreateAccountHospital from './Create-Hospital-Account';
import Text from '../components/elements/Text';

/* Functions */
import { navigationRef } from '../components/functions/navigate';

/* Styles */
import stylesX from '../styles';

const Stack = createStackNavigator();

export default function Navigation() {

  const dispatch = useDispatch(),
    welcomeScreenIsVisible = useSelector(store => store.welcomeScreenIsVisible),

    [loaderIsVisible, setVisibilityLoader] = useState(false);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: () => ({})
        }}
      >
        {welcomeScreenIsVisible ?
          <Stack.Screen name="Welcome">
            {(props) => <Welcome {...props}
              onDone={() => {
                dispatch({ type: 'Hide Welcome Screen' });
                setVisibilityLoader(true);
              }}
            />
            }
          </Stack.Screen>
          : <>
            <Stack.Screen name="Default-Screen">
            {(props) => <Index {...props} loaderIsVisible={loaderIsVisible} />
            }
            </Stack.Screen>
            <Stack.Screen
              name="Login"
              component={Login}
            />
            <Stack.Screen
              name="Create-Account-Person"
              component={CreateAccountPerson}
            />
            <Stack.Screen
              name="Create-Account-Hospital"
              component={CreateAccountHospital}
              options={{
                headerShown: false,
                headerTitle:
                  <NavContent
                    icon="hospital"
                    sizeIcon={23}
                    text="Hospital y/o Clínica"
                  />
              }}
            />
          </>
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/* Component for Header Navigation */
const NavContent = props => {
  const { icon, sizeIcon, text } = props;
  return (
    <View style={[stylesX.spaceBetweenContent, stylesX.displayFlex]}>
      <Icon
        name={icon}
        type="font-awesome-5"
        size={sizeIcon} />
      <Text
        size={14}
        styles={stylesX.fontFamily.Electrolize}
      >{`\tCrear cuenta como ${text}`}</Text>
    </View>
  )
}
