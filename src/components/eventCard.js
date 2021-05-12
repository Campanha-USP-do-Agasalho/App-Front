import React from 'react';
import {
    Text,
    Dimensions
} from 'react-native';
import styled from 'styled-components/native'
import { Image } from 'react-native-expo-image-cache';
import TextTicker from 'react-native-text-ticker'
import moment from 'moment'

import { FontAwesome5, MaterialIcons } from '@expo/vector-icons'; 
import TeamIcon from './TeamIcon';

import { colors } from '../globalStyles';

const { height } = Dimensions.get('window');

function EventCard({event, user}){


    return (
        <CardView>
            <EventInfoView>
                <ImageView>
                    <EventImage uri={user.image.url}/>
                </ImageView>
                
                <InfoView>
                    <TextTicker
                        style={{fontSize: 20, marginBottom: 2, fontWeight: 'bold', paddingLeft: 2}}
                        duration={5000}
                        loop
                        bounce
                        marqueeDelay={2000}
                    >
                        {event.title}
                    </TextTicker>
                    <DateView>
                        <FontAwesome5 name="clock" size={20} color={colors.primary} />
                        <TimeView>
                            <Date>
                            De {moment(event.date.begin).format('HH:mm (DD/MM)')}
                            </Date>
                            <Date>
                                Até {moment(event.date.end).format('HH:mm (DD/MM)')}
                            </Date>
                        </TimeView>
                    </DateView>
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
                        : event.team && event.team === 'infraestrutura' ?
                            'Infra'
                        : event.team && event.team === 'divulgacao' ?
                            'Divulga'
                        :
                            "Entidades"}
                    </TeamName>
                </TeamView>
            </EventInfoView>
            {event.inscriptionLink ? 
            (
                <SubscribePresenceButton>
                <SubscribePresenceText >
                {
                    user.coord ?
                        "MARCAR PRESENÇAS"
                    : 
                        "INSCREVA-SE"
                }
                </SubscribePresenceText>
                </SubscribePresenceButton>
            )
            :
            null
                
        }
            
        </CardView>

    )
}

const CardView = styled.TouchableOpacity`
    display:flex;
    flex-direction: column;
    align-self: center; 
    align-items: center;

    background-color: ${colors.white};
    border-width: 1px;
    border-color: ${colors.white};
    border-radius: 20px;
    width: 90%;
    margin-bottom: 24px;
`
const EventInfoView = styled.View`
    flex: 1;
    flex-direction: row;
    align-self: center; 
    align-items: center;
    padding-left: 20px;

    margin-top: 13px;
    margin-bottom: 13px;
`;
const ImageView = styled.View`
    flex: 3;
`;
const EventImage = styled(Image)`
    width: 100px;
    height: 100px;
    border-width: 1px;
    border-color: ${colors.white};
    border-radius: 20px;
`;

const InfoView = styled.View`
    display:flex;
    flex: 4;
    align-items: flex-start;
    justify-content: space-around;
`;

const DateView = styled.View`
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 2px;

`;
const TimeView = styled.View`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin-left: 8px;
`;
const Date = styled.Text`
    font-size: 12px;
    color: ${colors.black};
    text-align: center;
`;

const PlaceView = styled.View`
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;

const PlaceName = styled.Text`
    font-size: 12px;
    color: ${colors.black};
    max-width: 80%;
    margin-left: 6px;
`;

const TeamView =  styled.View`
    flex: 2;
    display:flex;
    flex-direction: column;
    align-items: center
    
`;

const TeamName = styled.Text`
    font-size: 12px;
    color: ${colors.primary};
    text-align: center;
    margin-top: 3px;
`;

const SubscribePresenceButton = styled.TouchableOpacity`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;

    margin-bottom: 13px;
    width: 80%;

    background-color: ${colors.orange};
    border-width: 1px;
    border-color: ${colors.white};
    border-radius: 30px;

`;

const SubscribePresenceText = styled.Text`
    font-size: 16px;
    color: ${colors.white};
    text-align: center;
    font-weight: bold;
`;



export default React.memo(EventCard);