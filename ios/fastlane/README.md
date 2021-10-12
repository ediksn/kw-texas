fastlane documentation
================
# Installation

Make sure you have the latest version of the Xcode command line tools installed:

```
xcode-select --install
```

Install _fastlane_ using
```
[sudo] gem install fastlane -NV
```
or alternatively using `brew install fastlane`

# Available Actions
### inc
```
fastlane inc
```

### changelog
```
fastlane changelog
```


----

## iOS
### ios increment
```
fastlane ios increment
```
IOS increment
### ios package
```
fastlane ios package
```
IOS package AppStore
### ios packagedev
```
fastlane ios packagedev
```
IOS package Development
### ios build
```
fastlane ios build
```
IOS build
### ios push
```
fastlane ios push
```
AppCenter push
### ios connect_feedback
```
fastlane ios connect_feedback
```
Retrieve TestFlight Feedback

----

## Android
### android increment
```
fastlane android increment
```
Android increment
### android build
```
fastlane android build
```
Android build
### android push
```
fastlane android push
```
AppCenter push

----

This README.md is auto-generated and will be re-generated every time [_fastlane_](https://fastlane.tools) is run.
More information about fastlane can be found on [fastlane.tools](https://fastlane.tools).
The documentation of fastlane can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
