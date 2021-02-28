<View style={globalStyles.authContainer}>
      <View
        style={{
          ...globalStyles.input,
        }}
      >
        <TextInput
          style={{ width: '90%' }}
          secureTextEntry={securePassword}
          placeholder="Digite sua nova senha"
          autoCapitalize="none"
          keyboardType="default"
          value={password}
          onChangeText={(password) => setPassword(password)}
        />
        <TouchableOpacity onPress={passwordView} style={globalStyles.inputIcon}>
          <MaterialCommunityIcons
            name={showPassword === false ? 'eye-off' : 'eye'}
            size={20}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          ...globalStyles.input,
          marginTop: 20,
        }}
      >
        <TextInput
          style={{ width: '90%' }}
          secureTextEntry={securePassword}
          placeholder="Digite sua nova senha novamente"
          autoCapitalize="none"
          keyboardType="default"
          value={password2}
          onChangeText={(password2) => setPassword2(password2)}
        />
        <TouchableOpacity onPress={passwordView} style={globalStyles.inputIcon}>
          <MaterialCommunityIcons
            name={showPassword === false ? 'eye-off' : 'eye'}
            size={20}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={savePassword}
        style={globalStyles.successButton}
      >
        <Text style={globalStyles.buttonText}>Criar Nova Senha</Text>
      </TouchableOpacity>
    </View>