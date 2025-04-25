import RNFetchBlob from 'rn-fetch-blob';
import {Platform} from 'react-native';

const platformIsAndroid = Platform.OS === 'android';
const dir = platformIsAndroid
  ? RNFetchBlob.fs.dirs.DownloadDir
  : RNFetchBlob.fs.dirs.DocumentDir;
const fileName = file => `${dir}/${file}.pdf`;

const configure = async file => {
  return platformIsAndroid
    ? RNFetchBlob.config({
        fileCache: true,
        appendExt: 'pdf',
        addAndroidDownloads: {
          useDownloadManager: true,
          notification: true,
          mime: 'application/pdf',
          path: fileName(file),
        },
      })
    : RNFetchBlob.config({
        fileCache: true,
        appendExt: 'pdf',
        path: dir + '/' + file + '.pdf',
      });
};

export const downloadPDF = async (file, loc) => {
  const rNFetch = await configure(file);
  return rNFetch
    .fetch('GET', loc)
    .then(res => res.path())
    .catch(err => {
      console.error('Error downloading PDF: ', err);
      return null;
    });
};
