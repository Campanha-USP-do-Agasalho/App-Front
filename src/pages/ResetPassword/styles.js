import styled from 'styled-components/native'
import {StyleSheet,Dimensions } from 'react-native';
import { colors } from '../../globalStyles';
const { height, width } = Dimensions.get('window');



export const GeneralContainer = styled.View`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: ${colors.primary};
    padding-top: 48px;
    padding-bottom: 48px;
    height: ${props => `${props.heightGeneralContainer}px`};
    
`;

export const PasswordInputContainer = styled.View`
    display: flex;
    align-self: center;
    flex-direction: row;
    justify-content: flex-start;
    width: ${props => `${props.widthPasswordInputContainer*0.86}px`};
    height: ${props => `${props.heightPasswordInputContainer*0.07}px`};
    background-color: ${colors.white};
    border-width: 1px;
    border-color: ${colors.primary};
    border-radius: 5px;
    margin-bottom: 44px;
    padding-left: 24px;
    font-size:16px;

`;

export const PasswordInput = styled.TextInput`
    width:${props => `${props.widthPasswordInput*0.8}px`};
`;

export const PasswordView = styled.TouchableOpacity`
    justify-content: center;
`;

export const SuccessButton = styled.TouchableOpacity`
    width: ${props => `${props.widthSuccessButton*0.75}px`};
    height: ${props => `${props.heightSuccessButton*0.08}px`};
    background-color: ${colors.secondary};
    align-items: center;
    justify-content: center;
    border-width: 1px;
    border-color: ${colors.primary};
    border-radius: 30px;
`;

export const ButtonText = styled.Text`
    align-self: center;
    font-weight: 900;
    font-size: 16px;
    color: ${colors.white};
`;