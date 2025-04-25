import RNFetchBlob from 'rn-fetch-blob';
import shorthash from 'shorthash';

const dirs = RNFetchBlob.fs.dirs;
const ext = /\.(\w+)$/;

const configure = (extension, file) => {
  return RNFetchBlob.config({
    fileCache: true,
    appendExt: extension,
    path: file,
  });
};
export const storeImage = async imageURI => {
  const extension = imageURI.match(ext)[1];
  const fileName = shorthash.unique(imageURI);
  const rnFetch = configure(extension, dirs.CacheDir + '/' + fileName);
  return rnFetch.fetch('GET', imageURI).then(res => {
    if (res.respInfo.status === 200) {
      return res.path();
    }
    return imageURI;
  });
};
export const deleteImage = async filePath => RNFetchBlob.fs.unlink(filePath);

export const imageExists = async filePath => RNFetchBlob.fs.exists(filePath);
