# App-Front

Frontend do Aplicativo da Campanha USP do Agasalho

# Instalação e Configuração de Lint

Todos os pacotes do projeto estão no package.json, então apenas rode:

```Bash
    yarn install
```

Depois de terminar de instalar os pacotes, você precisa instalar algumas extensões do seu editor, caso ainda não as tenha.

No VSCode, as extensões são:

- ESLint do Dirk Baeumer
- Prettier - Code Formatter do Prettier

Agora abre as settings do seu editor. No VSCode, é só apertar **CTRL+SHIFT+P** e abrir as configurações que estão em **Preferences: Open Settings JSON** .

Na suas configurações, você deve adicionar duas novas configurações:

```json
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true,
    }
```

Feche o VSCode e abra o novamente. O ESLint deve estar funcionando e o Prettier também.

# Rodar

Caso ainda não tenha instalado o expo, olhe na
[documentação](https://docs.expo.io/get-started/installation/), e o instale antes.

Com o Expo instalado, basta rodar:

```bash
expo start
```
