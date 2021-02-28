<View style={globalStyles.authContainer}>
      <View style={styles.emailContainer}>
        <TextInput
          style={globalStyles.input}
          placeholder="Cole aqui o token recebido"
          autoCapitalize="none"
          keyboardType="default"
          value={token}
          onChangeText={(token) => setToken(token)}
        />
        <TouchableOpacity
          onPress={resetPassword}
          style={globalStyles.successButton}
        >
          <Text style={globalStyles.buttonText}>Criar Nova Senha</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.failedButton}>
        <Text style={styles.text}>Não recebeu o código?</Text>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={globalStyles.errorButton}
        >
          <Text style={globalStyles.buttonText}>
            Reenviar Código de Segurança
          </Text>
        </TouchableOpacity>
      </View>
    </View>


import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../globalStyles';

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  emailContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    marginTop: height * 0.03,
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.white,
    alignSelf: 'center',
  },
  failedButton: {
    marginTop: 0.06 * height,
  },
});


export const TokenInput = styled.TextInput`
    display: flex;
    width: ${props => `${props.width}px`};
    flex-direction: row;
    justify-content: flex-start;
    background-color: #FFFFFF; /*white*/
    border-width: 1px;
    border-color: #003D5C; /*primary*/
    border-radius: 5px;
    padding-left: 50px;
    align-self: center;
    margin-bottom: 44px;
    height: 48px;
`;