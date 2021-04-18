import React from 'react';
import {
    Text
} from 'react-native';
import styled from 'styled-components/native'
import { Image } from 'react-native-expo-image-cache';


import { FontAwesome5, MaterialIcons } from '@expo/vector-icons'; 
import TeamIcon from './TeamIcon';
import logo_src from '../assets/Logo/Logo_without_text_800.png';

import { colors } from '../globalStyles';
import { color } from 'react-native-reanimated';

function EventCard({event, user}){


    return (
        <CardView>
            {/* <Text>Evento</Text> */}
            <EventImage uri={user.image.url}/>
            <InfoView>
                <EventTitle>
                    {event && event.title.length && event.title.length <= 16 ?
                        event.title
                    :
                    "ola"
                    }
                </EventTitle>
                <HourView>
                    <FontAwesome5 name="clock" size={20} color={colors.primary} />
                    <Time>
                        De 12:10 (17/04) Até 12:10 (18/04)
                    </Time>
                </HourView>
                <PlaceView>
                    <MaterialIcons name="place" size={24} color={colors.primary} />
                    <PlaceName>
                        {event.place}
                    </PlaceName>
                </PlaceView>
            </InfoView>
            <TeamView>
                <TeamIcon 
                    color={colors.primary}
                    size={20}
                    team={event.team}
                />
                <TeamName>
                    {event.team && event.team === 'relacoes-externas'?
                        "RE"
                    :
                        event.team}
                </TeamName>
            </TeamView>
        </CardView>

    )
}

const CardView = styled.View`
    display:flex;
    flex-direction: row;
    align-self: center; 
    align-items: center;
    justify-content: center;
    padding: 20px;
    
    background-color: ${colors.white};
    border-width: 1px;
    border-color: ${colors.white};
    border-radius: 20px;
    width: 90%;
    height: 120px;
    margin-bottom: 24px;
`
const EventImage = styled(Image)`
    width: 80px;
    height: 80px;
    border-width: 1px;
    border-color: ${colors.white};
    border-radius: 20px;
    
`;

const InfoView = styled.View`
    display:flex;
    justify-content: center;
    align-items: center;
`;

const EventTitle = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: ${colors.black};
`;

const HourView = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 60%;

`;
const Time = styled.Text`
    font-size: 12px;
    color: ${colors.black};
    text-align: center;
`;

const PlaceView = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 60%;
`;

const PlaceName = styled.Text`
    font-size: 12px;
    color: ${colors.black};
    text-align: center;
`;

export const TeamView =  styled.View`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
`;

export const TeamName = styled.Text`
    font-size: 12px;
    color: ${colors.primary};
    text-align: center;
    width: 60%;
`;


export default React.memo(EventCard);