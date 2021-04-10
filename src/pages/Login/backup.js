import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../globalStyles';

const { height } = Dimensions.get('window');


<View style={styles.container}>
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
          ([styles.content],
          {
            opacity,
            transform: [{ translateY: offset.y }],
          })
        }
      >
        <TextInput
          style={{ ...globalStyles.input, marginTop: height * 0.01 }}
          placeholder="Email"
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
        <View
          style={{
            ...globalStyles.input,
            marginTop: height * 0.03,
          }}
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
          <TouchableOpacity
            onPress={passwordView}
            style={globalStyles.inputIcon}
          >
            <MaterialCommunityIcons
              name={showPassword === false ? 'eye' : 'eye-off'}
              size={20}
            />
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity onPress={forgotPassword}>
            <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleSubmit}
            style={globalStyles.successButton}
          >
            <Text style={{ ...globalStyles.buttonText, fontSize: 18 }}>
              Entrar
            </Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>



export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  content: {
    justifyContent: 'space-between',
  },
  forgotPassword: {
    marginBottom: height * 0.03,
    marginLeft: 2,
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.orange,
  },
});

