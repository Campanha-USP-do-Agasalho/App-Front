import { Divider } from 'react-native-elements';
import { colors } from '../../globalStyles';
import styled from 'styled-components/native'

export const GeneralContainer = styled.View`
    display: flex;
    justify-content: flex-start;
    background-color: ${colors.primary};
    padding-top: ${props => `${props.paddingTopGeneralContainer}px`};
    padding-bottom: 15%;
    height: ${props => `${props.heightGeneralContainer}px`};
`;

export const Header = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
`;

export const Logo = styled.Image`
    flex: 1;
    width: 70px;
    height: 70px;
`;

export const Username = styled.Text`
    flex: 3;
    font-size: 30px;
    color: ${colors.white};
    text-align: center;
    font-weight: bold;
`;

export const TeamView =  styled.View`
    display:flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center

`;

export const TeamName = styled.Text`
    font-size: 16px;
    color: ${colors.white};
    text-align: center;
`;

export const WhiteRow = styled(Divider)`
    display: flex;
    align-self: center;
    background-color: ${colors.white};
    width: 85%;
    margin-bottom: 16px;
    height: ${props => `${props.heightWhiteRow}px`};
`;

export const WhiteRow2 = styled(Divider)`
    display: flex;
    align-self: center;
    height: 0.2%;
    background-color: ${colors.white};
    width: 85%;
    margin-bottom: 16px;
`;

export const EventsScrollView = styled.ScrollView`
    display: flex;
    padding-bottom: 10%;
`;

export const ListTitle = styled.Text`
    font-size: 24px;
    color: ${colors.white};
    align-self: flex-start;
    margin-left: 8%;
    font-weight: bold;
    padding-bottom: 24px;
`;

export const ListEvents = styled.View`
    display: flex;
    align-items: center;
    justify-content: space-around;
`; 