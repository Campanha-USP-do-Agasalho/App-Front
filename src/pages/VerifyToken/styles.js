import styled from 'styled-components/native'
import {StyleSheet,Dimensions } from 'react-native';
import { colors } from '../../globalStyles';
const { height, width } = Dimensions.get('window');


export const GeneralContainer = styled.View`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: #003D5C; /*primary*/
    padding-top: 48px;
    padding-bottom: 48px;
    height: ${props => `${props.heightGeneralContainer}px`};
    
`;

export const EmailContainer = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    
`;

export const TokenInput = styled.TextInput`
    display: flex;
    align-self: center;
    flex-direction: row;
    justify-content: flex-start;
    width: ${props => `${props.widthTextInput*0.86}px`};
    height: ${props => `${props.heightTextInput*0.07}px`};
    background-color: #FFFFFF; /*white*/
    border-width: 1px;
    border-color: #003D5C; /*primary*/
    border-radius: 5px;
    margin-bottom: 44px;
    padding-left: 24px;
    font-size:16px;

`;

export const SuccessButton = styled.TouchableOpacity`
    width: ${props => `${props.widthSuccessButton*0.75}px`};
    height: ${props => `${props.heightSuccessButton*0.08}px`};
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

export const FailedButton = styled.View`
    margin-top: ${props => `${props.heightFailedButton * 0.06}px` };
`;

export const FailedText = styled.Text`
    margin-top: ${props => `${props.heightFailedText * 0.03}px` };
    font-weight: bold;
    font-size: 16px;
    color: #FFFFFF;
    align-self: center;
`;

export const ErrorButton = styled.TouchableOpacity`
    margin-top: ${props => `${props.heightErrorButton * 0.03}px` };
    background-color: #F79839; /*Orange*/ 
    align-items: center;
    justify-content: center;
    width: ${props => `${props.widthErrorButton * 0.75}px` };
    height: ${props => `${props.heightErrorButton * 0.07}px` };
    border-width: 1px;
    border-color: #003D5C; /*Primary*/ 
    border-radius: 30px;
`;


/*
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
*/