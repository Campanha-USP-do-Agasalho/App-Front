import React from 'react';
import { Dimensions, FlatList, View, StatusBar } from 'react-native';
import Constants from 'expo-constants'

import { useAuth } from '../../contexts/auth';

import TeamIcon from '../../components/TeamIcon';
import logo_src from '../../assets/Logo/Logo_without_text_800.png';
import Events  from '../../assets/events.json'

const { height } = Dimensions.get('window');

import { colors } from '../../globalStyles';
import { GeneralContainer, Header, Logo, Username, TeamView, TeamName, WhiteRow, WhiteRow2, EventsScrollView, ListEvents, ListTitle } from './styles'

// COMPONENTES
import EventCard from '../../components/eventCard';

export default function Dashboard() {
  
    const {user} = useAuth()
    const nowEvents = Events.slice(0,4)
    const nextEvents = Events.slice(5, 10)

  return (
    <GeneralContainer 
        heightGeneralContainer={height}
        paddingTopGeneralContainer={Constants.statusBarHeight}
    >
        <StatusBar
        backgroundColor={colors.primary}
        barStyle="light-content"
        translucent
      />
      <View>
        <StatusBar hidden={false} />
      </View>
        <Header>
            <Logo
                source = { logo_src }
            />
            <Username>
                {user.realName}
            </Username>
            <TeamView>
                <TeamIcon 
                    color={colors.white}
                    size={40}
                    team={user.team.name}
                />
                <TeamName>
                    {user.team.name}
                </TeamName>
            </TeamView>
        </Header>
        <WhiteRow heightWhiteRow={height*0.005}/>
        <EventsScrollView>
            <ListTitle>
                ACONTECENDO AGORA
            </ListTitle>
            <ListEvents>
                {
                    nowEvents && nowEvents.length && nowEvents.map((event) => {
                        return (
                            <EventCard
                                key={event.title}
                                event={event}
                                user={user}
                            />
                        )
                    })
                }
            </ListEvents>
            <WhiteRow heightWhiteRow={height*0.005}/>
            <ListTitle>
                PRÓXIMOS EVENTOS
            </ListTitle>
            <ListEvents>
                {
                    nextEvents && nextEvents.length && nextEvents.map((event) => {
                        return (
                            <EventCard
                                key={event.title}
                                event={event}
                                user={user}
                            />
                        )
                    })
                }
            </ListEvents>
            
        </EventsScrollView>


    </GeneralContainer>
  );
}
