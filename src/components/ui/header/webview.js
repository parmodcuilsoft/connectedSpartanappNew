import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import { logClick } from '../../apis';

const WebviewHeader = ({ title }) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    logClick('back_button');
    navigation.goBack();
  };

  return (
    <LinearGradient
        colors={['#32323A', '#000']}
        style={styles.headerContainer}
      >
        <TouchableOpacity onPress={handleBackPress} style={styles.leftButton}>
          <Text style={styles.plusIcon}>+</Text>
        </TouchableOpacity>

        <View style={styles.centerContainer}>
          {title ? <Text style={styles.titleText}>{title}</Text> : null}
        </View>
      </LinearGradient>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  leftButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusIcon: {
    transform: [{ rotate: '45deg' }],
    fontSize: 42,
    color: 'white',
    ...(Platform.OS !== 'android' && { lineHeight: 42, }),
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    color: "#fff",
    fontSize: 24,
    fontFamily: 'SourceSansPro-Semibold',
  },
});

export default WebviewHeader;
