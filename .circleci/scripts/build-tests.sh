#!/usr/bin/env bash
set -e

if [ $PLATFORM == "android" ]; then
    detox build --configuration android.debug
else
    detox build --configuration ios.debug
fi
