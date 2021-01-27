// REACT E REACT NATIVES IMPORTS
import React, { useState, useEffect } from 'react';

import {
  FlatList,
  View,
  TextInput,
  Text,
  StatusBar,
} from 'react-native';

import { Picker } from '@react-native-picker/picker';

import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

// ESTILOS
import styles from './styles';
import globalStyles, { colors } from '../../globalStyles';

export default function EventList() {
  const navigation = useNavigation();

  const [allEvents, setAllEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [name, setName] = useState('');
  const [eventGroup, setEventGroup] = useState('all');
  const [team, setTeam] = useState('all');
  const [loaded, setLoaded] = useState(true);

  function filterEvents(events, searchName, searchTeam, searchEventGroup) {
    const newData = events.filter((event) => {
      const textData = searchName.toUpperCase();
      if (team === 'all') {
        if (eventGroup === 'all') {
          return (event.name.indexOf(textData) > -1);
        }
        return (
          event.name.indexOf(textData) > -1
                && event.group.name.toUpperCase() === searchEventGroup.toUpperCase()
        );
      }

      if (eventGroup === 'all') {
        return (event.name.indexOf(textData) > -1
        && event.team.name.toUpperCase() === searchTeam.toUpperCase());
      }

      return (event.name.indexOf(textData) > -1
        && event.team.name.toUpperCase() === searchTeam.toUpperCase()
        && event.group.name.toUpperCase() === searchEventGroup.toUpperCase());
    });

    return newData;
  }

  function filterEventsbyName(newName) {
    setName(newName);
    const newData = filterEvents(allEvents, newName, team, eventGroup);
    setFilteredEvents(newData);
  }

  return (
    <View style={globalStyles.container}>
      <StatusBar
        backgroundColor={colors.primary}
        barStyle="light-content"
        translucent
      />
      <View>
        <StatusBar hidden={false} />
      </View>
      {/* SEARCH BAR */}
      <View style={styles.searchBar}>
        {/* VIEW COM LEITURA DO NOME DO MEMBRO E
                        ICONE DE PESQUISA */}
        <ShimmerPlaceHolder
          style={styles.nameSearchPlaceholder}
          autoRun
          visible={loaded}
        >
          <View style={styles.nameSearch}>

            <TextInput
              autoCapitalize="words" // sem a primeira letra maiuscula
              placeholder="Nome do Evento"
              placeholderTextColor={colors.grey3}
              style={styles.inputText}
              value={name}
              onChangeText={(name) => filterEventsbyName(name)}
            />
            <FontAwesome name="search" color={colors.grey2} size={28} />

          </View>
        </ShimmerPlaceHolder>
        {/* VIEW COM OS FILTROS DE CARRO E NÚCLEO */}
        <ShimmerPlaceHolder
          style={styles.filterPlaceholder}
          autoRun
          visible={loaded}
        >
          <View style={styles.filter}>
            <View style={styles.PickerView}>
              <Picker
                selectedValue={team}
                onValueChange={(itemValue) => {
                  filterEventsbyTeam(itemValue);
                }}
                style={styles.Picker}
              >
                <Picker.Item
                  color={colors.grey3}
                  value="all"
                  label="Grupo"
                />
                <Picker.Item label="Entidades" value="Entidades" />
                <Picker.Item label="Divulgação" value="Divulgação" />
                <Picker.Item label="Infra" value="Infraestrutura" />
                <Picker.Item label="RE" value="Relações Externas" />
                <Picker.Item label="Geral" value="Geral" />
              </Picker>
            </View>

            <View style={styles.PickerView}>
              <Picker
                selectedValue={team}
                onValueChange={(itemValue) => {
                  filterEventsbyTeam(itemValue);
                }}
                style={styles.Picker}
              >
                <Picker.Item
                  color={colors.grey3}
                  value="all"
                  label="Núcleo"
                />
                <Picker.Item label="Entidades" value="Entidades" />
                <Picker.Item label="Divulgação" value="Divulgação" />
                <Picker.Item label="Infra" value="Infraestrutura" />
                <Picker.Item label="RE" value="Relações Externas" />
                <Picker.Item label="Geral" value="Geral" />
              </Picker>
            </View>
          </View>
        </ShimmerPlaceHolder>
      </View>

    </View>

  );
}
