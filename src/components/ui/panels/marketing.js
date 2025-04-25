import React, { useEffect } from 'react';
import { Image, TouchableWithoutFeedback, Platform } from 'react-native';

import { useApiWithImageStorage, logClick } from '../../apis';
import { useNavigation } from '@react-navigation/native';

// Styling
const imageStyling = { width: '100%', height: 300 };

//Constant variables
const marketingInfoKey = 'MARKETING_V1';
const url =
  'https://www.spartanrvchassis.com/wp-json/api/v1/connected-care/promos';

const Marketing = () => {
  const navigation = useNavigation();
  const [marketingImage, updateMarketingImage] = useApiWithImageStorage(
    marketingInfoKey,
    url,
  );

  const imageSource = () =>
    marketingImage
      ? {
        uri:
          Platform.OS === 'android'
            ? 'file://' + marketingImage.imagePath
            : marketingImage.Image,
      }
      : null;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => updateMarketingImage(), []);
  return (
    <TouchableWithoutFeedback
      onPress={
        marketingImage
          ? () => {
            logClick(`open_link_${marketingImage.Link}`);
            navigation.navigate('External', { uri: marketingImage.Link });
          }
          : () => { }
      }>
      <Image source={imageSource()} style={imageStyling} />
    </TouchableWithoutFeedback>
  );
};

export default Marketing;
