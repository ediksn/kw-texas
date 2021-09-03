#!/usr/bin/env bash
set -e

if [ $PLATFORM == "android" ]; then
    brew tap homebrew/cask
    brew install --cask homebrew/cask-versions/adoptopenjdk8
    brew install --cask android-sdk
    yes | sdkmanager --licenses || if [ $? -ne '141' ]; then exit $?; fi;
fi

cd ios && bundle install --path bundle
