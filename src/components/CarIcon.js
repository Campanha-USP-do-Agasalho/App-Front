import React from 'react';
import { Image } from 'react-native';

export default function CustomIcon({ iconUrl, style }) {
  return (
    <Image
      source={iconUrl}
      style={style}
    />
  );
}
