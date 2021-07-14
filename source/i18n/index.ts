import * as RNLocalize from 'react-native-localize';
import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';
import { I18nManager } from 'react-native';

const translationGetters = {
  en: () => require('./extractedTranslation/en/translation.json'),
};

const ENGLISH_LANGUAGE = 'en';

const setI18nConfig = () => {
  let fallback = { languageTag: ENGLISH_LANGUAGE, isRTL: false };
  let { languageTag, isRTL } = RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) || fallback;

  I18nManager.forceRTL(isRTL);
  i18next.use(initReactI18next).init({
    resources: {
      [languageTag]: {
        translation: (translationGetters as any) [languageTag](),
      },
    },
    lng: languageTag,
    fallbackLng: ENGLISH_LANGUAGE,
    keySeparator: false,
    nsSeparator: '::',
  });
};

export default setI18nConfig;
