import React, { useState, useEffect } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import { showMessage } from 'react-native-flash-message';

import { useNavigation, useRoute } from '@react-navigation/native';

import styles, { EmailContainer, GeneralContainer, SuccessButton, TokenInput, ButtonText, FailedButton, FailedText, ErrorButton } from './styles';
import globalStyles, { colors } from '../../globalStyles';

// UTILS
import { checkSpace } from '../../utils';

const { height, width } = Dimensions.get('window');

export default function ForgotPassword() {
  const [token, setToken] = useState('');

  const route = useRoute();
  const navigation = useNavigation();

  const [id, setId] = useState('');

  useEffect(() => {
    const { memberId: ID } = route.params;
    setId(ID);
  }, []);

  function resetPassword() {
    if (token === '' || checkSpace(token) === true) {
      showMessage({
        message:
          'Por favor, preencha o campo designado\nOU\nVerifique se há espaços em branco no codígo!',
        type: 'info',
        backgroundColor: colors.red,
        position: { top: 330, left: 20, right: 20 },
        style: { alignItems: 'center' },
      });
      return;
    }
    navigation.navigate('Criar Nova Senha', { token, memberId: id });
  }
  return (

    <GeneralContainer
      heightGeneralContainer={height}
      >
      <EmailContainer
        h={height}
        w={width}
      >
        <TokenInput
          heightTextInput={height}
          widthTextInput={width}
          placeholder="Cole aqui o token recebido"
          autoCapitalize="none"
          keyboardType="default"
          value={token}
          onChangeText={(token) => setToken(token)}
        />
        <SuccessButton
          heightSuccessButton={height}
          widthSuccessButton={width}
          onPress={resetPassword}
        >
          <ButtonText>Criar Nova Senha</ButtonText>
        </SuccessButton>
      </EmailContainer>

      <FailedButton
        heightFailedButton={height}
      >
        <FailedText
          heightFailedText={height}
        >
          Não recebeu o código?
        </FailedText>
        <ErrorButton
          heightErrorButton={height}
          widthErrorButton={width}
          onPress={() => navigation.goBack()}
        >
          <ButtonText>
            Reenviar Código de Segurança
          </ButtonText>
        </ErrorButton>
      </FailedButton>
    </GeneralContainer>
    
  );
}
