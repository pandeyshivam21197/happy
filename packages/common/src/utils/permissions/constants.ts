import { PERMISSIONS } from 'react-native-permissions';
import { Platform } from 'react-native'

const CameraPermissionString = Platform.select({
    android: PERMISSIONS.ANDROID.CAMERA,
    ios: PERMISSIONS.IOS.CAMERA
})

const GalleryPermissionString = Platform.select({
    android: PERMISSIONS.ANDROID.CAMERA,
    ios: PERMISSIONS.IOS.PHOTO_LIBRARY
})

export {
    CameraPermissionString,
    GalleryPermissionString
}
