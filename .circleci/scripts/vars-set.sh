#!/usr/bin/env bash
set -e

ENVIRONMENT=QA
BASE_URL=${BASE_URL_DEV}
if [[ $CIRCLE_BRANCH =~ ^release\/v[[:digit:]]+\.[[:digit:]]+\.[[:digit:]]+$ ]]; then
  ENVIRONMENT=PROD
  BASE_URL=${BASE_URL_PROD}
fi

echo "export ENVIRONMENT=${ENVIRONMENT}" >> bash_env
eval 'for variable in "${!'"${ENVIRONMENT}"'_@}"; do
    export "${variable#'"${ENVIRONMENT}"'_}"="${!variable}"
    echo "export ${variable#'${ENVIRONMENT}'_}=${!variable}" >> bash_env
done'
cat bash_env >> $BASH_ENV
cat bash_env

if [ $PLATFORM == "android" ]; then
    echo ${KEYSTORE_FILE_BASE64} | base64 -d > ios/keystore.jks
    echo ${KEYSTORE_FILE_BASE64} | base64 -d > android/app/keystore.jks
    # echo ${GSP_SA_ANDROID_BASE64} | base64 -d > android/app/google-services.json
else
    # echo ${GSP_SA_IOS_BASE64} | base64 -d > ios/GoogleService-Info.plist
    echo ${GC_KEYS_BASE64} | base64 -d > ios/gc_keys.json
fi

# envsubst < sentry.properties.dist > $SENTRY_PROPERTIES_PATH
# envsubst < .env.dist > .env
# echo "BASE_URL='${BASE_URL}'" > .env


envsubst < .env.dist > .env.production
echo "BASE_URL='${BASE_URL}'" > .env.production
