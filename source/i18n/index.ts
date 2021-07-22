import * as RNLocalize from 'react-native-localize'
import { initReactI18next } from 'react-i18next'
import i18next from 'i18next'
import { I18nManager } from 'react-native'
import translationsES from './translation/es.json'
import translationsEN from './translation/en.json'

const translationGetters: { [index: string]: () => {} } = {
  en: () => translationsEN,
  es: () => translationsES
}

const ENGLISH_LANGUAGE = 'en'

const setI18nConfig = () => {
  const fallback = { languageTag: ENGLISH_LANGUAGE, isRTL: false }
  const { languageTag, isRTL } = RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) || fallback

  I18nManager.forceRTL(isRTL)
  i18next.use(initReactI18next).init({
    resources: {
      [languageTag]: {
        translation: translationGetters[languageTag]()
      }
    },
    lng: languageTag,
    fallbackLng: ENGLISH_LANGUAGE,
    keySeparator: false,
    nsSeparator: '::'
  })
}

export default setI18nConfig
