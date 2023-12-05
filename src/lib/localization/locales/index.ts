import en from './en.json';
import ru from './ru.json';

export enum Locale {
  RU = 'ru',
  EN = 'en',
}

export default {
  ru,
  en,
} as Locales;

export type Locales = Record<Locale, typeof en>;
