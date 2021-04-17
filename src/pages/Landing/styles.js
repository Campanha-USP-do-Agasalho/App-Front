import { Divider } from 'react-native-elements';
import { colors } from '../../globalStyles';
import styled from 'styled-components/native'

export const GeneralContainer = styled.View`
    display: flex;
    justify-content: flex-start;
    background-color: ${colors.primary};
    padding-top: 10px;
    padding-bottom: 10px;
    height: ${props => `${props.heightGeneralContainer}px`};
`;

export const Header = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding-bottom: 10px;
`;

export const Logo = styled.Image`
    width: 70px;
    height: 70px;
`;

export const Username = styled.Text`
    font-size: 30px;
    color: ${colors.white};
    text-align: center;
    font-weight: bold;
`;

export const TeamView =  styled.View`
    display:flex;
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
    height: 0.5%;
    background-color: ${colors.white};
    width: 85%;
    margin-bottom: 16px;
`;

export const EventsView = styled.View`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-bottom: 24px;
`;

export const ListTitle = styled.Text`
    font-size: 24px;
    color: ${colors.white};
    align-self: flex-start;
    margin-left: 8%;
    font-weight: bold;
    padding-bottom: 24px;
`;