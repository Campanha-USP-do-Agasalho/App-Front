import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { showMessage } from 'react-native-flash-message';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import globalStyles, { colors } from '../../globalStyles';

// UTILS
import { checkSpace } from '../../utils';

// API
import api from '../../services/api';
import { GeneralContainer, PasswordInputContainer, PasswordInput, PasswordView, SuccessButton, ButtonText } from './styles';

const { height, width } = Dimensions.get('window');

export default function ResetPassword() {
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [securePassword, setSecurePassword] = useState(true);
  const [id, setId] = useState('');
  const [token, setToken] = useState('');

  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    const { memberId: ID } = route.params;
    setId(ID);
    const { token } = route.params;
    setToken(token);
  }, []);

  function passwordView() {
    if (showPassword === false) {
      setShowPassword(true);
      setSecurePassword(false);
    } else {
      setShowPassword(false);
      setSecurePassword(true);
    }
  }

  async function savePassword() {
    if (
      password === '' ||
      checkSpace(password) === true ||
      password2 === '' ||
      checkSpace(password2) === true
    ) {
      showMessage({
        message: 'Por favor, preencha os campos designados!',
        type: 'info',
        backgroundColor: colors.red,
        position: { top: 330, left: 20, right: 20 },
        style: { alignItems: 'center' },
      });
      return;
    }
    if (password !== password2) {
      showMessage({
        message: 'As senhas digitadas devem ser iguais!',
        type: 'info',
        backgroundColor: colors.red,
        position: { top: 330, left: 20, right: 20 },
        style: { alignItems: 'center' },
      });
      return;
    }
    try {
      const resp = await api.put(`/members/${id}/password/${token}`, {
        password,
      });
      showMessage({
        message: resp.data.message,
        type: 'info',
        backgroundColor: colors.green,
        position: { top: 330, left: 20, right: 20 },
        style: { alignItems: 'center' },
      });
      navigation.navigate('Login');
    } catch (error) {
      const { data } = error.response;
      showMessage({
        message: data.err,
        type: 'info',
        backgroundColor: colors.red,
        position: { top: 330, left: 20, right: 20 },
        style: { alignItems: 'center' },
      });
    }
  }

  return (
    <GeneralContainer
      heightGeneralContainer={height}
    >
      <PasswordInputContainer
        heightPasswordInputContainer={height}
        widthPasswordInputContainer={width}
      >
        <PasswordInput
          widthPasswordInput={width*0.86}
          secureTextEntry={securePassword}
          placeholder="Digite sua nova senha"
          autoCapitalize="none"
          keyboardType="default"
          fontSize={15}
          value={password}
          onChangeText={(password) => setPassword(password)}
        />
        <PasswordView onPress={passwordView}>
          <MaterialCommunityIcons
            name={showPassword === false ? 'eye-off' : 'eye'}
            size={20}
          />
        </PasswordView>
      </PasswordInputContainer>

      <PasswordInputContainer
        heightPasswordInputContainer={height}
        widthPasswordInputContainer={width}
        marginTop={20}
      >
        <PasswordInput
          widthPasswordInput={width*0.86}
          secureTextEntry={securePassword}
          placeholder="Digite sua nova senha novamente"
          fontSize={15}
          autoCapitalize="none"
          keyboardType="default"
          value={password2}
          onChangeText={(password2) => setPassword2(password2)}
        />
        <PasswordView onPress={passwordView}>
          <MaterialCommunityIcons
            name={showPassword === false ? 'eye-off' : 'eye'}
            size={20}
          />
        </PasswordView>
      </PasswordInputContainer>
      <SuccessButton
        onPress={savePassword}
        widthSuccessButton={width}
        heightSuccessButton={height}
      >
        <ButtonText>Criar Nova Senha</ButtonText>
      </SuccessButton>
    </GeneralContainer>
  );
}
