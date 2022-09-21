import {Icon, icons, Image as RNImage} from '@happy/common/src/components';
import React, {FC, useState} from 'react';
import {Image} from 'react-native-image-crop-picker';
import {StyleSheet, View, FlatList, TouchableOpacity} from 'react-native';
import {FileSelecterModal} from '@happy/mobile/src/components/molecules/FileSlecterModal';

interface IImageSelector {}

interface IImage {
  image: Image | null;
}

const imageConfig = {image: null};

const ImageSelector: FC<IImageSelector> = () => {
  const [selectedImages, setSelectedImages] = useState(
    Array(2).fill(imageConfig),
  );
  const [showFileModal, setShowFileModal] = useState(false);

  const totalImages = selectedImages.length;
  const styles = getStyles(totalImages);

  const renderImageBox = ({item}: {item: IImage}) => {
    const {image} = item;

    const hasImage = !!image;

    return (
      <>
        {hasImage ? (
          <RNImage source={{uri: image.path}} style={styles.imageContainer} />
        ) : (
          <TouchableOpacity onPress={() => setShowFileModal(true)}>
            <View style={styles.imageContainer}>
              <Icon name={icons.rightArrow} size={20} />
            </View>
          </TouchableOpacity>
        )}
      </>
    );
  };

  console.log(selectedImages, 'selectedImages$$$');

  return (
    <>
      <FlatList
        style={styles.flatList}
        data={selectedImages}
        renderItem={renderImageBox}
        keyExtractor={(item, index) => `${index}`}
        columnWrapperStyle={styles.columnContainer}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        numColumns={totalImages > 2 ? 3 : 2}
      />
      <FileSelecterModal
        isModalVisible={showFileModal}
        closeModal={() => setShowFileModal(false)}
        getSelectedImage={selectedImage => {
          setSelectedImages(prevState => {
            const newSelectedImages = [...prevState];

            const emptyImage: IImage = newSelectedImages.find(
              (image: IImage) => image.image === null,
            );

            emptyImage.image = selectedImage;

            return newSelectedImages;
          });
        }}
      />
    </>
  );
};

const getStyles = (totalImages: number) =>
  StyleSheet.create({
    imageContainer: {
      width: totalImages > 2 ? 200 : 100,
      height: totalImages > 2 ? 200 : 100,
      backgroundColor: 'red',
    },
    separator: {
      width: 20,
    },
    columnContainer: {
      flex: 1,
      justifyContent: 'space-around',
    },
    flatList: {
      marginTop: 20,
    },
  });

const imageSelector = React.memo(ImageSelector);
export {imageSelector as ImageSelector};
