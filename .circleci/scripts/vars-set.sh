#!/usr/bin/env bash
set -e

ENVIRONMENT=QA
if [[ $CIRCLE_BRANCH =~ ^release\/v[[:digit:]]+\.[[:digit:]]+\.[[:digit:]]+$ ]]; then
  ENVIRONMENT=PROD
fi

echo "export ENVIRONMENT=${ENVIRONMENT}" >> bash_env
eval 'for variable in "${!'"${ENVIRONMENT}"'_@}"; do
    export "${variable#'"${ENVIRONMENT}"'_}"="${!variable}"
    echo "export ${variable#'${ENVIRONMENT}'_}=${!variable}" >> bash_env
done'
cat bash_env >> $BASH_ENV
cat bash_env

envsubst < .env.development
