import React from 'react';
import { HeaderBar, ScreenWrapper, WebviewHeader } from '../ui';
// import Pdf from 'react-native-pdf';

const PdfPage = ({ loc }) => {

  console.log(loc, "loclocloc");

  return (
    <ScreenWrapper>
      <HeaderBar />
      {/* <Pdf source={loc} style={{flex: 1}} /> */}
    </ScreenWrapper>
  );
};

export default PdfPage;
