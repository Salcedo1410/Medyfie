/* Librarys */
import { combineReducers, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

/* Modules */
import date from './date';
import businessHours from './businessHours';
import imagesProfile from './imagesProfile';
import welcomeScreenIsVisible from './showWelcome';

const persistConfig = {
  key: 'defaultScreen',
  storage: AsyncStorage,
  whitelist: ['welcomeScreenIsVisible']
},

reducers = combineReducers({
  /* Date Opening Hospital/Clinic Account */
  date: date,
  /* Hours Opening Hospital/Clinic Acoount */
  hour: businessHours,
  /* Images Hospital - Person */
  imagesProfile: imagesProfile,
  /* Welcome Screen */
  welcomeScreenIsVisible: welcomeScreenIsVisible
}),

persistedReducer = persistReducer(persistConfig, reducers);

export default () => {
  let store = createStore(persistedReducer),
  persistor = persistStore(store);
  return { store, persistor }
}
