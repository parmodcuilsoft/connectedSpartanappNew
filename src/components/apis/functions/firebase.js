import firebase from '@react-native-firebase/app';
import analytics from '@react-native-firebase/analytics';

export const logClick = async buttonName => {
  return await firebase.analytics().logEvent('button_click', {
    button: buttonName,
  });
};

export const setScreen = async screenName => {
  return analytics().logScreenView({
    screen_name: screenName,
    screen_class: screenName,
  });
};

export const pdfOpen = async pdfName => {
  return await firebase.analytics().logEvent('pdf_open', {
    pdf: pdfName,
  });
};

export const expandableClick = async expandableName => {
  return await firebase.analytics().logEvent('exp_open', {
    name: expandableName,
  });
};

export const diagCodeSearch = async diagCode => {
  return await firebase.analytics().logEvent('search_diagCodes', {diagCode});
};
