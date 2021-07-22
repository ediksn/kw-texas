/** @format */

const { cloneDeep } = require('lodash')
const baseConfig = require('./babel.config')

const newConfig = cloneDeep(baseConfig)

newConfig.plugins.push([
  'i18next-extract',
  {
    outputPath: 'source/i18n/extractedTranslation/{{locale}}/{{ns}}.json',
    pluralSeparator: '______',
    contextSeparator: '____',
    keySeparator: null,
    nsSeparator: null,
    keyAsDefaultValue: ['en'],
    useI18nextDefaultValue: false,
    keyAsDefaultValueForDerivedKeys: false,
    discardOldKeys: true
  }
])

module.exports = newConfig
