import { Animated } from 'react-native';

const showSlide = (defaultAnimated, value, duration) => {
  Animated.timing(defaultAnimated, {
    toValue: value,
    duration: duration,
    useNativeDriver: true
  }).start();
};

export default showSlide;