#!/usr/bin/env bash
set -e

npm install -g react-native-cli
npm install -g detox-cli
yarn install

if [ $PLATFORM == "android" ]; then
    brew tap homebrew/cask
    brew install --cask homebrew/cask-versions/adoptopenjdk8
    brew install --cask android-sdk
    yes | sdkmanager --licenses || if [ $? -ne '141' ]; then exit $?; fi;
    avdmanager list device
    (yes | sdkmanager "platform-tools" "platforms;android-30" "extras;intel;Hardware_Accelerated_Execution_Manager" "build-tools;30.0.3" "system-images;android-30;google_apis;x86" "emulator" --verbose) || true
    avdmanager create avd -n Pixel_API_30 -k "system-images;android-30;google_apis;x86" -g google_apis -d "pixel"
    avdmanager list device
else
    brew tap wix/brew
    brew install applesimutils
    cd ios && pod install
fi
