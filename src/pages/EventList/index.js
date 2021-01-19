// REACT E REACT NATIVES IMPORTS
import React, { useState, useEffect } from 'react';

import {
  FlatList,
  View,
  TextInput,
  Text,
  StatusBar,
} from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

// ESTILOS
import styles from './styles';
import globalStyles, { colors } from '../../globalStyles';

export default function EventList() {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [team, setTeam] = useState('all');
  const [loaded, setLoaded] = useState(true);

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
              placeholder="Nome do evento"
              placeholderTextColor={colors.grey3}
              style={styles.inputText}
              onChangeText={(name) => filterMembersbyName(name)}
            />
            <FontAwesome name="search" color={colors.grey2} size={28} />

          </View>
        </ShimmerPlaceHolder>
      </View>

    </View>

  );
}
