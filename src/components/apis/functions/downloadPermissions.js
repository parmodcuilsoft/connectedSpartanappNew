import {PermissionsAndroid} from 'react-native';

export async function requestExternalWritePermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: 'Spartan Connected Care Write Permission',
        message:
          'In order to download and show warranty documents, Spartan Connected Care needs access to write the files',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  } catch (err) {
    console.error('Error checking permissions: ', err);
  }
}
