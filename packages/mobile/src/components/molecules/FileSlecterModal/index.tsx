import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import RNImageCropPicker from 'react-native-image-crop-picker';
import Modal from '@happy/mobile/src/components/atoms/Modal';
import theme from '@happy/common/src/styles/theme';
import {Heading, Icon} from '@happy/common/src/components';
import {isIOS} from '@happy/common/src/utils/PlatformUtils';
import {Logger} from '@happy/common/src/utils/logger';
import lang from '@happy/common/src/assets/languages';
import {Button} from '@happy/common/src/components/atoms/Button';
import {icons} from '@happy/common/src/components';
import {ResponsiveSize} from '@happy/mobile/src/utils/responsiveUtils';

interface IProps {
  isModalVisible: boolean;
  closeModal: () => void;
  getSelectedImage: (image: Image) => void;
}

interface IFileOptions {
  id: number;
  icon: string;
  heading: string;
}

const fileOptions: IFileOptions[] = [
  {id: 0, icon: icons.camera, heading: 'Camera'},
  {id: 1, icon: icons.image, heading: 'Photo & Video Library'},
];

async function openCamera(setImage) {
  try {
    const images = await RNImageCropPicker.openCamera({
      multiple: false,
      includeBase64: true,
    });

    Logger.info(images, 'image from camera');

    let newImage = {
      ...images,
      uri: images.path,
      filename: images.path.split('/').pop(),
    };

    setImage(newImage);
  } catch (e) {
    Logger.error('Error in opening camera:', e);
  }
}

async function openGallery(setImage) {
  try {
    const images = await RNImageCropPicker.openPicker({
      multiple: false,
      includeBase64: true,
    });

    Logger.info(images, 'image from gallery picker');

    let newImage = {
      ...images,
      uri: images.path,
      filename: images.path.split('/').pop(),
    };

    setImage(newImage);
  } catch (e) {
    Logger.error('Error in opening gallery', e);
  }
}

function setSelectedOption(id, setImage, closeModal) {
  closeModal();

  setTimeout(() => {
    switch (id) {
      case 0:
        return openCamera(setImage);
      case 1:
        return openGallery(setImage);
    }
  }, 700);
}

const renderFileOptions = (
  option: IFileOptions,
  closeModal: () => void,
  setImage: (image: Image) => {},
) => {
  const {id, icon, heading} = option;

  return (
    <Button
      buttonType="transparent"
      onPress={() => {
        setSelectedOption(id, setImage, closeModal);
      }}>
      <View style={styles.options}>
        <Icon name={icon} size={24} />
        <Heading style={styles.heading}>{heading}</Heading>
      </View>
    </Button>
  );
};

export const FileSelecterModal: React.FC<IProps> = props => {
  const {isModalVisible, closeModal, getSelectedImage = () => {}} = props;
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (image && getSelectedImage) {
      getSelectedImage(image);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [image]);

  return (
    <Modal onClose={closeModal} visible={isModalVisible}>
      <View style={styles.container}>
        <View style={styles.modalContent}>
          <FlatList
            data={fileOptions}
            renderItem={({item}) =>
              renderFileOptions(item, closeModal, setImage)
            }
            keyExtractor={item => `${item.id}`}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        </View>
        {closeModal && (
          <TouchableOpacity style={styles.cancel} onPress={closeModal}>
            <Heading textColor={theme.palette.neutral.azureRadiance}>
              {lang.common}
            </Heading>
          </TouchableOpacity>
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: theme.palette.neutral.athensGray,
    borderRadius: 15,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: ResponsiveSize(31),
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: ResponsiveSize(16),
    paddingHorizontal: ResponsiveSize(22),
  },
  cancel: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 16,
    backgroundColor: theme.palette.neutral.white,
    marginTop: ResponsiveSize(8),
    borderRadius: 15,
  },
  separator: {
    borderBottomColor: theme.palette.neutral.manatee,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  heading: {
    marginLeft: ResponsiveSize(21),
  },
});
