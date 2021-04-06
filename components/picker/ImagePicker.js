/* React components */
import React, { useState } from 'react';

/* React native components */
import { View, Image } from 'react-native';

/* Components */
import Button from '../elements/Button';

/* Librarys */
import { launchImageLibrary } from 'react-native-image-picker';
import { useSelector, useDispatch } from 'react-redux';

/* Styles */
import colors from '../../styles/colors';
import stylesX from '../../styles';

const ImagePickera = props => {

  let getImagesStore = useSelector(store => store.imagesProfile),
    backgroundHospital = getImagesStore.backgroundImageHospitalAccount,
    imageProfileHospital = getImagesStore.profileImageHospitalAccount,
    backgroundPerson = getImagesStore.backgroundImagePersonAccount,
    imageProfilePerson = getImagesStore.profileImagePersonAccount,
    dispatch = useDispatch();

  const { src, imagePickerIsWithBackground, imageToUpdate } = props,

    chooseImage = () => {
      let options = {
        title: 'Select Image',
        mediaType: 'photo',
        maxWidth: 1920,
        maxHeight: 1080,
        includeBase64: true,
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
      launchImageLibrary(options, (response) => {
        // console.log('Response = ', response);

        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else {
          // const source = { uri: response.uri };

          // You can also display the image using data:
          // const source = { uri: 'data:image/jpeg;base64,' + response.data };
          // alert(JSON.stringify(response));
          // console.log('response', JSON.stringify(response));
          // setImage({
          //   src: response.uri
          // });
          const source = response.uri;

          imageToUpdate === "backgroundImageHospitalAccount"
            ? dispatch({
              type: 'Update Background Image Hospital Account',
              newBackgroundImageHospitalAccount: source
            })
            : imageToUpdate === "profileImageHospitalAccount"
              ? dispatch({
                type: 'Update Profile Image Hospital Account',
                newProfileImageHospitalAccount: source
              })
              : imageToUpdate === "backgroundImagePersonAccount"
                ? dispatch({
                  type: 'Update Background Image Person Account',
                  newBackgroundImagePersonAccount: source
                })
                : imageToUpdate === "profileImagePersonAccount"
                  ? dispatch({
                    type: 'Update Profile Image Person Account',
                    newProfileImagePersonAccount: source
                  })
                  : null

        }

        // setImage({
        //   src: response.uri
        // })
        // console.log(response.uri)


      });
    };
  return (
    <>
      {
        imagePickerIsWithBackground
          ? <OpenImagePicker
            onPress={() => chooseImage()}
            withOpacityBackground
            index={300}
            opacityClick={0.8}
          />
          : null
      }
      <OpenImagePicker
        onPress={() => {
          chooseImage();
          console.log(getImagesStore)
        }}
      >
        <Image
          source={
            imageToUpdate === "backgroundImageHospitalAccount"
              ? { uri: backgroundHospital === null ? src : backgroundHospital }
              : imageToUpdate === "profileImageHospitalAccount"
                ? { uri: imageProfileHospital === null ? src : imageProfileHospital }
                : imageToUpdate === "backgroundImagePersonAccount"
                  ? { uri: backgroundPerson === null ? src : backgroundPerson }
                  : imageToUpdate === "profileImagePersonAccount"
                    ? { uri: imageProfilePerson === null ? src : imageProfilePerson }
                    : null
          }
          style={stylesX.position.absolute}
        />
      </OpenImagePicker>
    </>
  )
}

export default ImagePickera;

function OpenImagePicker(props) {
  const { onPress, children, withOpacityBackground, index, opacityClick } = props;

  return (
    <Button
      onPress={onPress}
      isWithOpacity
      opacity={opacityClick}
      backgroundColor={withOpacityBackground ? colors.blackColorSecondary : null}
      styles={[stylesX.position.absolute, { zIndex: index }]}
    >
      { children }
    </Button>
  )
}