import React, { useState, useEffect } from 'react';

import {
  Animated,
  Dimensions,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import LoaderModal from '../../modals/loaderModal';

import Logo from '../../assets/Logo/Logo.png';

import styles, {GeneralContainer, EmailInput, PasswordView, InputPasswordIcon, ForgotPasswordView, ForgotPasswordText, SubmitButton, SubmitButtonText} from './styles';
import globalStyles, { colors } from '../../globalStyles';

import {
  ShowUpAnimation,
  keyboardDidHideAnimation,
  keyboardDidShowAnimation,
} from './Animations';

// CONTEXTS
import { useAuth } from '../../contexts/auth';

const { height, width } = Dimensions.get('window');

export default function Login() {
  const { SignIn } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  function passwordView() {
    if (showPassword === false) {
      setShowPassword(true);
    } else {
      setShowPassword(false);
    }
  }

  // ANIMATIONS PROPS
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: height * 0.2 }));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({ x: width, y: height * 0.2 }));
  const [loaderVisible, setLoaderVisible] = useState(false);

  // NAVIGATION PROPS
  const navigation = useNavigation();

  // STATES
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    SignIn(email, password, setLoaderVisible);
  }

  useEffect(() => {
    // eslint-disable-next-line no-undef
    keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      // eslint-disable-next-line no-use-before-define
      keyboardDidShow
    );
    // eslint-disable-next-line no-undef
    keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      // eslint-disable-next-line no-use-before-define
      keyboardDidHide
    );

    ShowUpAnimation(offset, opacity);

    return function cleanup() {
      // eslint-disable-next-line no-undef
      keyboardDidShowListener.remove();
      // eslint-disable-next-line no-undef
      keyboardDidHideListener.remove();
    };
  }, []);

  function keyboardDidShow() {
    keyboardDidShowAnimation(logo, offset);
  }

  function keyboardDidHide() {
    keyboardDidHideAnimation(logo, offset);
  }

  function forgotPassword() {

    navigation.navigate('Resetar Senha');
  }

  return (
    <GeneralContainer
      heightContainer={height}
    >
      <StatusBar
        backgroundColor={colors.primary}
        barStyle="light-content"
        translucent
      />
      <View>
        <StatusBar hidden={false} />
      </View>
      <LoaderModal visible={loaderVisible} />
      <View>
        <Animated.Image
          style={{
            width: logo.x,
            height: logo.y,
            opacity,
          }}
          resizeMode="contain"
          source={Logo}
        />
      </View>

      <Animated.View
        style={
          ({
            justifyContent: 'space-between',
            opacity,
            transform: [{ translateY: offset.y }],
          })
        }
      >
        <EmailInput
          widthEmailInput={width}
          heightEmailInput={height}
          marginTop={height * 0.01}
          placeholder="Email"
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
        <PasswordView
          marginTop={height * 0.03}
          widthPasswordView={width}
          heightPasswordView={height}
        >
          <TextInput
            style={{ width: '90%' }}
            placeholder="Senha"
            secureTextEntry={showPassword}
            autoCapitalize="none" // sem a primeira letra maiuscula
            autoCorrect={false}
            value={password}
            onChangeText={(password) => setPassword(password)}
          />
          <InputPasswordIcon
            onPress={passwordView}
          >
            <MaterialCommunityIcons
              name={showPassword === false ? 'eye' : 'eye-off'}
              size={20}
            />
          </InputPasswordIcon>
        </PasswordView>
        <ForgotPasswordView>
          <TouchableOpacity onPress={forgotPassword}>
            <ForgotPasswordText
              heightForgotPasswordText={height}
            >
              Esqueci minha senha
            </ForgotPasswordText>
          </TouchableOpacity>
          <SubmitButton
            heightSubmitButton={height}
            widthSubmitButton={width}
            onPress={handleSubmit}
          >
            <SubmitButtonText>
              Entrar
            </SubmitButtonText>
          </SubmitButton>
        </ForgotPasswordView>
      </Animated.View>
    </GeneralContainer>
  );
}
