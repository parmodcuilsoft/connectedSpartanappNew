import React, {useEffect} from 'react';
import {View, Platform} from 'react-native';
import {Text, Button, ThemeProvider} from 'react-native-elements';

import {
  useApiWithStorage,
  downloadPDF,
  usePermissions,
  pdfOpen,
} from '../../apis';

import CustomIcon from '../customIcon';

import theme from '../../../styles/warrantyTheme';
import { useNavigation } from '@react-navigation/native';
const background = {backgroundColor: '#3d3d3d', paddingBottom: 50};
const iconStyle = {
  flex: 1,
  marginLeft: 20,
  color: '#CCC',
};

const warrantyInfoKey = 'WARRANTY_V1';
const isAndroid = Platform.OS === 'android';
const url =
  'https://www.spartanrvchassis.com/wp-json/api/v1/connected-care/warranty';

const Warranties = () => {
  const navigation = useNavigation();
  const permission = usePermissions();
  const [warrantyInfo, updateWarrantyInfo] = useApiWithStorage(
    warrantyInfoKey,
    url,
  );

  const readyToDownload = () => (isAndroid && permission) || !isAndroid;
  const download = async key => {
    const warranty = warrantyInfo[key];
    const loc = await downloadPDF(warranty.Title, warranty.Link);
    loc && pdfOpen(warranty.Title);
    loc && navigation.navigate('PDFScreen', {loc: {uri: loc}});
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => updateWarrantyInfo(), []);
  return (
    <View style={background}>
      <ThemeProvider theme={theme}>
        <Text h4>Warranty By Model Year</Text>
        {warrantyInfo &&
          warrantyInfo
            .sort((a, b) => a.Year < b.Year)
            .map((warranty, key) => (
              <Button
                icon={
                  <CustomIcon name="cloud-download-outline" style={iconStyle} size={25} />
                }
                title={warranty.Title}
                key={`${warranty.Title}--${key}`}
                disabled={!readyToDownload()}
                onPress={() => download(key)}
              />
            ))}
      </ThemeProvider>
    </View>
  );
};

export default Warranties;
