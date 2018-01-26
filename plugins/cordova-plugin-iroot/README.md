## Cordova Jailbreak/Root Detection Plugin

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/WuglyakBolgoink/cordova-plugin-iroot/master/LICENSE)
[![Android](https://img.shields.io/badge/android-success-green.svg)](https://shields.io)
[![iOS](https://img.shields.io/badge/iOS-success-green.svg)](https://shields.io)


Use this plugin to add an extra layer of security for your app, by detecting if the device running the app is jailbroken.

Based on:

- https://github.com/leecrossley/cordova-plugin-jailbreak-detection (iOS)
- https://github.com/trykovyura/cordova-plugin-root-detection (Android)
- https://github.com/scottyab/rootbeer/blob/master/README.md (Android)

## Platform Support

- iOS
- Android

> todo: check versions...

## Installation

```
cordova plugin add cordova-plugin-iroot --save
```


## Usage


```
IRoot.isRooted(successCallback, failureCallback);
```

- `successCallback(result:boolean:ios|number:android)` is called with `true/1` if the device is Jailbroken/rooted, otherwise `false/0`.
- `failureCallback(error:string)` is called if there was an error determining if the device is Jailbroken/rooted.


## Demo

### Android

[APK - iRoot v1.1.0](https://github.com/WuglyakBolgoink/cordova-plugin-iroot/raw/master/demo/android/iRoot_v1_1_0.apk)


### Screens

![Rooted device](https://github.com/WuglyakBolgoink/cordova-plugin-iroot/raw/master/demo/images/rooted.png "Rooted device")
![Not rooted device](https://github.com/WuglyakBolgoink/cordova-plugin-iroot/raw/master/demo/images/notrooted.png "Not rooted device")



## License

MIT License
