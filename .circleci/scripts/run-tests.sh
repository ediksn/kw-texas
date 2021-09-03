#!/usr/bin/env bash
set -e

mkdir -p test-results/jest
TEST=$(circleci tests glob "**/*.e2e.*" | circleci tests split --total=5 --split-by=filesize)

if [ $PLATFORM == "android" ]; then
    detox test --configuration android.debug $TEST
else
    detox test --configuration ios.debug --cleanup $TEST
fi
