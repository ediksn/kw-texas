#!/usr/bin/env bash
set -e

cd ios && bundle install --path bundle
bundle exec fastlane ios push
bundle exec fastlane android push
