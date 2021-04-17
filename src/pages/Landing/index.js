import React from 'react';
import { Dimensions, FlatList } from 'react-native';

import { useAuth } from '../../contexts/auth';

import TeamIcon from '../../components/TeamIcon';
import logo_src from '../../assets/Logo/Logo_without_text_800.png';

const { height } = Dimensions.get('window');

import { colors } from '../../globalStyles';
import { GeneralContainer, Header, Logo, Username, TeamView, TeamName, WhiteRow, EventsView, ListTitle } from './styles'

// COMPONENTES
import MemberCard from '../../components/memberCard';

export default function Dashboard() {
  
    const {user} = useAuth()

  return (
    <GeneralContainer 
        heightGeneralContainer={height}
    >
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
                    team={"Divulgação"}
                />
                <TeamName>
                    {user.team.name}
                </TeamName>
            </TeamView>
        </Header>
        <WhiteRow />
        <EventsView>
            <ListTitle>
                ACONTECENDO AGORA
            </ListTitle>
            <FlatList
                data={[user]}
                vertical
                showsVerticalScrollIndicator={false}
                keyExtractor={(user) => user._id}
                renderItem={({ item: user }) => (
                    <MemberCard
                    member={user}
                    loaded={true}
                    navigateFunction={() => NavigateToViewProfile(user)}
                    />
                )}
            />
        </EventsView>
        <WhiteRow />
        <EventsView>
            <ListTitle>
                PRÓXIMOS EVENTOS
            </ListTitle>
            <FlatList
                data={[user]}
                vertical
                showsVerticalScrollIndicator={false}
                keyExtractor={(user) => user._id}
                renderItem={({ item: user }) => (
                    <MemberCard
                    member={user}
                    loaded={true}
                    navigateFunction={() => NavigateToViewProfile(user)}
                    />
                )}
            />
        </EventsView>

    </GeneralContainer>
  );
}
