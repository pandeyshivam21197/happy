import { Alert } from "react-native";
import {
  check,
  request,
  checkNotifications,
  requestNotifications,
  checkMultiple,
  requestMultiple,
  openSettings,
  openLimitedPhotoLibraryPicker,
  checkLocationAccuracy,
  RESULTS,
  Permission,
} from "react-native-permissions";
import { showAlert } from "@happy/common/src/utils";

export const checkPermission = (permission: Permission, isMandatory: boolean) =>
  new Promise((resolve, reject) => {
    check(permission)
      .then((result) => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
            showAlert(
              "This feature is not available (on this device / in this context)"
            );
            reject(
              "This feature is not available (on this device / in this context)"
            );
            break;
          case RESULTS.DENIED:
            requestPermission(permission, isMandatory)
              .then((result) => {
                if (result === "denied") {
                  reject(
                    "The permission has not been requested / is denied but requestable"
                  );
                } else {
                  resolve(result);
                }
              })
              .catch((e) => {
                reject(
                  "The permission has not been requested / is denied but requestable"
                );
              });
            break;
          case RESULTS.LIMITED:
            showAlert(
              "This feature is not available (on this device / in this context)"
            );
            reject("The permission is limited: some actions are possible");
            break;
          case RESULTS.GRANTED:
            resolve("The permission is granted");
            break;
          case RESULTS.BLOCKED:
            isMandatory && showPermissionBlockedPopup();
            reject("The permission is denied and not requestable anymore");
            break;
        }
      })
      .catch((error) => {
        reject(error);
      });
  });

export const requestPermission = (
  permission: Permission,
  isMandatory: boolean
) =>
  new Promise((resolve, reject) => {
    request(permission)
      .then((result) => {
        isMandatory && result === "blocked" && showPermissionBlockedPopup();
        resolve(result);
      })
      .catch((error) => reject(error));
  });

export const checkNotificationPermission = () =>
  new Promise((resolve, reject) => {
    checkNotifications()
      .then(({ status }) => resolve(status))
      .catch((error) => reject(error));
  });

export const requestNotificationPermission = (isMandatory: boolean) =>
  new Promise((resolve, reject) => {
    requestNotifications(["alert", "sound"])
      .then(({ status }) => {
        isMandatory && status === "blocked" && showPermissionBlockedPopup();
        resolve(status);
      })
      .catch((error) => reject(error));
  });

export const checkMultiplePermission = (permissionArray: []) =>
  new Promise((resolve, reject) => {
    checkMultiple(permissionArray)
      .then((statuses) => resolve(statuses))
      .catch((error) => reject(error));
  });

export const requestMultiplePermission = (permissionArray: []) =>
  new Promise((resolve, reject) => {
    requestMultiple(permissionArray)
      .then((statuses) => resolve(statuses))
      .catch((error) => reject(error));
  });

export const openAppSettings = () =>
  new Promise((resolve, reject) => {
    openSettings()
      .then(() => resolve("Success"))
      .catch(() => reject("cannot open settings"));
  });

export const openLimitedPhotoLibraryIOS = () =>
  new Promise((resolve, reject) => {
    openLimitedPhotoLibraryPicker()
      .then(() => resolve("success"))
      .catch(() => reject("Cannot open photo library picker"));
  });

export const checkForLocationAccuracy = () =>
  new Promise((resolve, reject) => {
    checkLocationAccuracy()
      .then((accuracy) => resolve(accuracy))
      .catch(() => reject("Cannot check location accuracy"));
  });

const showPermissionBlockedPopup = () =>
  Alert.alert(
    "The permissions has been denied earlier",
    "it can be enabled from the settings",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "Open Settings", onPress: () => openAppSettings() },
    ]
  );
