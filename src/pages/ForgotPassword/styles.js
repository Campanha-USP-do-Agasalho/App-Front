import styled from 'styled-components/native'
import { colors } from '../../globalStyles';


export const GeneralContainer = styled.View`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: ${colors.primary}; 
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
    background-color: ${colors.white}; 
    border-width: 1px;
    border-color: ${colors.primary}; 
    border-radius: 5px;
    padding-left: 15px;
    padding-right: 15px;
    align-self: center;
    margin-bottom: 44px;
`;

export const SuccessButton = styled.TouchableOpacity`
    height: 8%;
    width: 75%;
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



