import {Icon, icons, Image as RNImage} from '@happy/common/src/components';
import React, {FC, useEffect, useState} from 'react';
import {Image} from 'react-native-image-crop-picker';
import {StyleSheet, View, FlatList, TouchableOpacity} from 'react-native';
import {FileSelecterModal} from '@happy/mobile/src/components/molecules/FileSlecterModal';
import theme from '@happy/common/src/styles/theme';

interface IImageSelector {
  onImageSelected: (images: IImage[]) => void;
}

export interface IImage {
  image: Image | null;
}

let imageConfig: IImage = {image: null};

const ImageSelector: FC<IImageSelector> = props => {
  const {onImageSelected} = props;

  const [selectedImages, setSelectedImages] = useState(
    new Array(6).fill('').map(() => ({...imageConfig})),
  );
  const [showFileModal, setShowFileModal] = useState(false);
  const [clickedImageIndex, setClickedImageIndex] = useState(0);

  useEffect(() => {
    onImageSelected(selectedImages);
  }, [selectedImages]);

  const removeSelectedImage = (index: number) => {
    setSelectedImages(prevState => {
      const newSelectedImages = [...prevState];

      newSelectedImages[index].image = null;

      return newSelectedImages;
    });
  };

  const renderImageBox = ({item, index}: {item: IImage; index: number}) => {
    const {image} = item;

    const hasImage = !!image;

    if (hasImage) {
      return (
        <View>
          <RNImage
            source={{uri: image.path}}
            resizeMode="cover"
            style={styles.imageContainer}
          />
          <Icon
            style={styles.crossIcon}
            onPress={() => removeSelectedImage(index)}
            name={icons.crossSolid}
            size={20}
          />
        </View>
      );
    }

    return (
      <TouchableOpacity
        onPress={() => {
          setShowFileModal(true);
          setClickedImageIndex(index);
        }}>
        <View style={styles.imageContainer}>
          <Icon name={icons.addSolid} size={20} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        extraData={selectedImages}
        style={styles.flatList}
        data={selectedImages}
        renderItem={renderImageBox}
        keyExtractor={(item, index) => `${index}`}
        columnWrapperStyle={styles.columnContainer}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        numColumns={3}
      />
      <FileSelecterModal
        isModalVisible={showFileModal}
        closeModal={() => setShowFileModal(false)}
        getSelectedImage={selectedImage => {
          setSelectedImages(prevState => {
            const newSelectedImages = [...prevState];

            newSelectedImages[clickedImageIndex].image = selectedImage;

            return newSelectedImages;
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: 100,
    height: 100,
    backgroundColor: theme.palette.neutral.manteeBorder,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  separator: {
    width: 24,
  },
  columnContainer: {
    flex: 1,
    justifyContent: 'space-around',
    marginTop: 24,
  },
  flatList: {
    marginBottom: 20,
  },
  crossIcon: {
    position: 'absolute',
    right: -10,
    top: -10,
  },
});

const imageSelector = React.memo(ImageSelector);
export {imageSelector as ImageSelector};
