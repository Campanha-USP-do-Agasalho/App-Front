
  <View style={globalStyles.authContainer}>
      <TextInput
        style={globalStyles.input}
        placeholder="Digite seu Email"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={(email) => setEmail(email)}
      />
      <TouchableOpacity
        onPress={sendToken}
        style={{
          ...globalStyles.successButton,
        }}
      >
        <Text style={globalStyles.buttonText}>Enviar Código de Segurança</Text>
      </TouchableOpacity>
    </View>


    <GeneralContainer>
      <EmailInput
        placeholder="Digite seu Email"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={(email) => setEmail(email)}
      />
      <SuccessButton onPress={sendToken}>
        <ButtonText >Enviar Código de Segurança</ButtonText >
      </SuccessButton>
    </GeneralContainer>