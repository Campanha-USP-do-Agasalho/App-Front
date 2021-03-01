import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../globalStyles';
import styled from 'styled-components/native'

const { height } = Dimensions.get('window');


export const GeneralContainer = styled.View`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary};
  height: ${props => `${props.heightContainer}px` };
`
export const EmailInput = styled.TextInput`
    width: ${props => `${props.widthEmailInput *0.86}px` };
    height: ${props => `${props.heightEmailInput *0.08}px` };
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
    margin-bottom: 20px;
`;

export const PasswordView = styled.View`
    width: ${props => `${props.widthPasswordView *0.86}px` };
    height: ${props => `${props.heightPasswordView *0.08}px` };
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
    margin-bottom: 20px;
`;

export const InputPasswordIcon = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
`

export const ForgotPasswordView = styled.View`
  display: flex;
  align-items: center;
`

export const ForgotPasswordText = styled.Text`
  margin-bottom: ${props => `${props.heightForgotPasswordText *0.03}px` };
  margin-left: 2px;
  align-self: center;
  font-weight: bold;
  font-size: 16px;
  color: ${colors.orange};
`

export const SubmitButton = styled.TouchableOpacity`
  margin-top: ${props => `${props.heightSubmitButton *0.03}px` };
  background-color: ${colors.secondary};
  align-items: center;
  justify-content: center;
  width: ${props => `${props.widthSubmitButton *0.75}px` };
  height: ${props => `${props.heightSubmitButton *0.07}px` };
  border-width: 1px;
  border-color: ${colors.primary};
  border-radius: 30px;
`

export const SubmitButtonText = styled.Text`
  align-self: center;
  font-weight: 900;
  font-size: 18px;
  color: ${colors.white};
`

export default StyleSheet.create({
  content: {
    justifyContent: 'space-between',
  },
});

