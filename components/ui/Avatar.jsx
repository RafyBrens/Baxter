import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const colors = Colors.light;
const BAXTER_LOGO = require('../../assets/baxter-logo.jpg');

export default function Avatar({ source, fallback, size = 32, style }) {
  const imgSource = source || BAXTER_LOGO;

  return (
    <View style={[styles.container, { width: size, height: size, borderRadius: size / 2 }, style]}>
      <Image source={imgSource} style={[styles.image, { width: size, height: size, borderRadius: size / 2 }]} resizeMode="cover" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryBg,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  image: {
    resizeMode: 'contain',
  },
  fallback: {
    fontWeight: '700',
    color: colors.primary,
  },
});
