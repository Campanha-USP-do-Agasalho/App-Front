import styled from 'styled-components/native'


export const colorsTest = {
    primary: '#003D5C',
    secondary: '#3DACE1',
    orange: '#F79839',
    black: '#000000',
    transBlack: '#000000aa',
    grey1: '#222222',
    grey2: '#7D7D7D',
    grey3: '#B7B7B7',
    grey4: '#DDD',
    grey5: '#ECECEC',
    white: '#FFFFFF',
    green: '#8EA604',
    red: '#F22B29',
  };


export const GeneralContainer = styled.View`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: #003D5C; /*primary*/
    padding-top: 48px;
    padding-bottom: 48px;
    height: ${props => `${props.height}px`};

`;

export const EmailInput = styled.TextInput`
    width: 86%;
    height: 8%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    background-color: #FFFFFF; /*white*/
    border-width: 1px;
    border-color: #003D5C; /*primary*/
    border-radius: 5px;
    padding-left: 15px;
    padding-right: 15px;
    align-self: center;
    margin-bottom: 44px;
`;

export const SuccessButton = styled.TouchableOpacity`
    height: 8%;
    width: 75%;
    background-color: #3DACE1; /*secondary*/
    align-items: center;
    justify-content: center;
    border-width: 1px;
    border-color: #003D5C; /*primary*/
    border-radius: 30px;
`;

export const ButtonText = styled.Text`

    align-self: center;
    font-weight: 900;
    font-size: 16px;
    color: #FFFFFF /*white*/;
`;



