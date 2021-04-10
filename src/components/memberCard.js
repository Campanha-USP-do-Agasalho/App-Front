import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import { Image } from 'react-native-expo-image-cache';
import { Avatar } from 'react-native-elements';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import ViewImageModal from '../modals/viewImageModal';

import styles from '../pages/MemberList/styles';
import { colors } from '../globalStyles';

function MemberCard({ member, loaded, navigateFunction }) {
  const [ViewImageVisible, setViewImageVisible] = useState(false);

    function infoFunction(){
        setViewImageVisible(false)
        navigateFunction()
    }

  return (
    <ShimmerPlaceHolder
      style={{
        height: 120, width: '100%', marginTop: 10, borderRadius: 6,
      }}
      autoRun
      visible={loaded}
    >
      <ViewImageModal
        visible={ViewImageVisible}
        cancel={() => setViewImageVisible(false)}
        image={member.image ? member.image.url : null}
        name={member.name}
        realName={member.realName}
        wpp={member.wpp}
        infoFunction={infoFunction}
      />
      <TouchableOpacity style={styles.card} onPress={navigateFunction}>
        {(member.image && member.image.url)
          ? (
            <View>
                <TouchableOpacity onPress={() => setViewImageVisible(true)}>
                    <Image style={styles.avatar} uri={member.image.url} />
                </TouchableOpacity>
              
            </View>
          )
          : (
            <View>
              <Avatar
                containerStyle={styles.standartAvatar}
                size="large"
                rounded
                title={member.name ? member.name.slice(0, 2) : 'UN'}
                onPress={() => setViewImageVisible(true)}
                activeOpacity={0.8}
                source={{ uri: 'none' }}
              />
            </View>

          )}

        <View style={styles.memberInfo}>
          <View>
            <Text style={styles.nickname}>{member.realName}</Text>
            <Text style={styles.name}>{member.name}</Text>
          </View>
          <Text style={styles.team}>{member.team.name}</Text>
        </View>
        <View style={styles.iconsInfo}>
          <FontAwesome5
            name="crown"
            color={member.coord === true ? colors.primary : colors.white}
            size={28}
          />
          <FontAwesome5
            name="car-alt"
            color={member.hasCar === 1 ? colors.primary : colors.white}
            size={32}
          />
        </View>
      </TouchableOpacity>
    </ShimmerPlaceHolder>
  );
}

export default React.memo(MemberCard);
