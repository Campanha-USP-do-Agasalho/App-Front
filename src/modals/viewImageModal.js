/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import {
  Modal,
  ActivityIndicator,
  View,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text,
  ImageBackground
} from 'react-native';

import { Image } from 'react-native-expo-image-cache';
import { Avatar } from 'react-native-elements';
import { Feather, FontAwesome5 } from '@expo/vector-icons';

import styled from 'styled-components/native'

import { sendWhatsapp } from '../utils';
import { colors } from '../globalStyles';

// ICONS
import personIcon from '../assets/Icons/person.png';

const { height, width } = Dimensions.get('window');

export default function ViewImageModal({ visible, image, cancel, name, realName, infoFunction, wpp }) {
  const [loading, setLoading] = useState(image !== null);

  function starts() {
    setLoading(image !== 'none');
  }

  return (
    <Modal
      statusBarTranslucent
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={cancel}
    >
      <ModalContainer
        activeOpacity={1}
        onPress={cancel}
      >
        <InfoContainer >
               
                {(image)
                    ? (
                        <TitleImageView>
                            <StyledAvatar source={{ uri: image }} >
                                <TitleView opacity={0.7}>
                                    <TitleName >{realName}</TitleName>
                                </TitleView> 
                            </StyledAvatar>
                        </TitleImageView>
                    )
                    : (
                        <TitleImageView>
                            <TitleView opacity={1}>
                                <TitleName >{realName}</TitleName>
                            </TitleView>
                            <StandartAvatar
                                size="large"
                                title={name ? name.slice(0, 2) : 'UN'}
                                activeOpacity={0.8}
                                source={{ uri: 'none' }}
                            />
                        </TitleImageView>

                )}
            
            <ButtonsView>
                <TouchableOpacity  onPress={()=>console.log("email")}>
                    <Feather name="mail" size={30} color={colors.white}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => sendWhatsapp(wpp)}>
                    <FontAwesome5 name="whatsapp" size={30} color={colors.white}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={infoFunction}>
                    <Feather name="info" size={30} color={colors.white}/>
                </TouchableOpacity>
            </ButtonsView>

            <StyledActivityIndicator
                animating={loading}
                size="large"
            />
        </InfoContainer>
      </ModalContainer>
    </Modal>
  );
}

const ModalContainer = styled.TouchableOpacity`
    display: flex;    
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.7);
`;

const InfoContainer =  styled.View`
    width: 90%;
    height: 50%;
    justify-content: center;
`;

const TitleImageView = styled.View`
    width: 100%;
    height: 100%;
    justify-content: center;

`;

const TitleView =  styled.View`
    display: flex;
    align-items:flex-start;
    justify-content: center;
    background-color: rgba(0,59,93, ${props => props.opacity});
    height: 15%;
    padding-left: 3%;
`; 

const TitleName = styled.Text`
    color: ${colors.white};
    font-size: 22px;
`;

const StyledAvatar = styled(ImageBackground)`
    height: 100%;
    width: 100%;
`;

const StandartAvatar = styled(Avatar)`
    height: 100%;
    width: 100%;
    background-color: ${colors.white};
`;

const StyledActivityIndicator = styled(ActivityIndicator)`
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
`;

const ButtonsView = styled.View`
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    background-color: ${colors.primary};
    height: 15%;
`;
