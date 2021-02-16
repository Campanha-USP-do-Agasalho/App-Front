import { Animated, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export function ShowUpAnimation(offset, opacity) {
  Animated.parallel([
    Animated.spring(offset.y, {
      toValue: 40,
      speed: 4,
      bounciness: 60,
      useNativeDriver: false,
    }),
    Animated.timing(opacity, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }),
  ]).start();
}

export function keyboardDidShowAnimation(logo, offset) {
  Animated.parallel([
    Animated.timing(logo.x, {
      toValue: width * 0.6,
      duration: 20,
      useNativeDriver: false,
    }),
    Animated.timing(logo.y, {
      toValue: height * 0.08,
      duration: 20,
      useNativeDriver: false,
    }),
    Animated.timing(offset.y, {
      toValue: 0,
      speed: 4,
      bounciness: 60,
      useNativeDriver: false,
    }),
  ]).start();
}

export function keyboardDidHideAnimation(logo, offset) {
  Animated.parallel([
    Animated.timing(logo.x, {
      toValue: width,
      duration: 20,
      useNativeDriver: false,
    }),
    Animated.timing(logo.y, {
      toValue: height * 0.2,
      duration: 20,
      useNativeDriver: false,
    }),
    Animated.timing(offset.y, {
      toValue: height * 0.05,
      speed: 4,
      bounciness: 60,
      useNativeDriver: false,
    }),
  ]).start();
}
