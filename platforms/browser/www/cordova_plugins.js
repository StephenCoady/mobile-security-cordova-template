cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.abarak64.screen-lock/www/screenLock.js",
        "id": "com.abarak64.screen-lock.screenLock",
        "pluginId": "com.abarak64.screen-lock",
        "clobbers": [
            "screenLock"
        ]
    },
    {
        "file": "plugins/cordova-plugin-browsertab/www/browsertab.js",
        "id": "cordova-plugin-browsertab.BrowserTab",
        "pluginId": "cordova-plugin-browsertab",
        "clobbers": [
            "cordova.plugins.browsertab"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/src/browser/DeviceProxy.js",
        "id": "cordova-plugin-device.DeviceProxy",
        "pluginId": "cordova-plugin-device",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    },
    {
        "file": "plugins/cordova-plugin-inappbrowser/src/browser/InAppBrowserProxy.js",
        "id": "cordova-plugin-inappbrowser.InAppBrowserProxy",
        "pluginId": "cordova-plugin-inappbrowser",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-iroot/www/iroot.js",
        "id": "cordova-plugin-iroot.IRoot",
        "pluginId": "cordova-plugin-iroot",
        "clobbers": [
            "IRoot"
        ]
    },
    {
        "file": "plugins/cordova-plugin-is-debug/www/isDebug.js",
        "id": "cordova-plugin-is-debug.IsDebug",
        "pluginId": "cordova-plugin-is-debug",
        "clobbers": [
            "cordova.plugins.IsDebug"
        ]
    },
    {
        "file": "plugins/cordova-plugin-pincheck/www/PinCheck.js",
        "id": "cordova-plugin-pincheck.PinCheck",
        "pluginId": "cordova-plugin-pincheck",
        "clobbers": [
            "cordova.plugins.PinCheck"
        ]
    },
    {
        "file": "plugins/cordova-plugin-secure-key-store/www/SecureKeyStore.js",
        "id": "cordova-plugin-secure-key-store.SecureKeyStore",
        "pluginId": "cordova-plugin-secure-key-store",
        "clobbers": [
            "cordova.plugins.SecureKeyStore"
        ]
    },
    {
        "file": "plugins/cordova-plugin-secure-storage/www/securestorage.js",
        "id": "cordova-plugin-secure-storage.SecureStorage",
        "pluginId": "cordova-plugin-secure-storage",
        "clobbers": [
            "SecureStorage"
        ]
    },
    {
        "file": "plugins/cordova-plugin-secure-storage/www/sjcl_ss.js",
        "id": "cordova-plugin-secure-storage.sjcl_ss",
        "pluginId": "cordova-plugin-secure-storage",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/src/browser/SplashScreenProxy.js",
        "id": "cordova-plugin-splashscreen.SplashScreenProxy",
        "pluginId": "cordova-plugin-splashscreen",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-sslcertificatechecker/www/SSLCertificateChecker.js",
        "id": "cordova-plugin-sslcertificatechecker.SSLCertificateChecker",
        "pluginId": "cordova-plugin-sslcertificatechecker",
        "clobbers": [
            "window.plugins.sslCertificateChecker"
        ]
    },
    {
        "file": "plugins/ionic-plugin-keyboard/www/browser/keyboard.js",
        "id": "ionic-plugin-keyboard.keyboard",
        "pluginId": "ionic-plugin-keyboard",
        "clobbers": [
            "cordova.plugins.Keyboard"
        ],
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.abarak64.screen-lock": "0.1.0",
    "cordova-plugin-compat": "1.2.0",
    "cordova-plugin-browsertab": "0.2.0",
    "cordova-plugin-device": "1.1.4",
    "cordova-plugin-inappbrowser": "2.0.1",
    "cordova-plugin-ionic-webview": "1.1.16",
    "cordova-plugin-iroot": "0.4.0",
    "cordova-plugin-is-debug": "1.0.0",
    "cordova-plugin-pincheck": "0.0.1",
    "cordova-plugin-privacyscreen": "0.3.1",
    "cordova-plugin-proguard": "1.0.0",
    "cordova-plugin-secure-key-store": "1.5.4",
    "cordova-plugin-secure-storage": "2.6.8",
    "cordova-plugin-splashscreen": "4.0.3",
    "cordova-plugin-sslcertificatechecker": "5.1.0",
    "cordova-plugin-whitelist": "1.3.1",
    "ionic-plugin-keyboard": "2.2.1"
}
// BOTTOM OF METADATA
});