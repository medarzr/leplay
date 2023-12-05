import { I18n } from 'i18n-js';
import * as RNLocalize from 'react-native-localize';

import defaultLocales from './locales';

const currentLocalization = RNLocalize.getLocales()[0]?.languageCode;

export const i18n = new I18n(defaultLocales);

i18n.defaultLocale = currentLocalization;
i18n.locale = currentLocalization;
i18n.enableFallback = true;
