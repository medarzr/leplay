import { useCallback } from 'react';

import { FormikConfig, useFormik, useFormikContext } from 'formik';
import { Asserts, object, string, ref } from 'yup';

import { i18n } from '~/lib/localization/localize';

import usePostRegistration from './apiHooks/usePostRegistration';
import {
  MAX_EMAIL_LENGTH,
  MAX_NAME_LENGTH,
  MAX_PASS_LENGTH,
  MIN_NAME_LENGTH,
  MIN_PASS_LENGTH,
  emailRegExp,
} from './constants';

const validationSchema = object({
  firstName: string()
    .default('')
    .required(i18n.t('errors.fieldRequired'))
    .min(
      MIN_NAME_LENGTH,
      i18n.t('errors.notLessThanSymbols', { count: MIN_NAME_LENGTH }),
    )
    .max(
      MAX_NAME_LENGTH,
      i18n.t('errors.notMoreThanSymbols', { count: MAX_NAME_LENGTH }),
    ),
  lastName: string()
    .default('')
    .required(i18n.t('errors.fieldRequired'))
    .min(
      MIN_NAME_LENGTH,
      i18n.t('errors.notLessThanSymbols', { count: MIN_NAME_LENGTH }),
    )
    .max(
      MAX_NAME_LENGTH,
      i18n.t('errors.notMoreThanSymbols', { count: MAX_NAME_LENGTH }),
    ),
  email: string()
    .default('')
    .required(i18n.t('errors.fieldRequired'))
    .max(
      MAX_EMAIL_LENGTH,
      i18n.t('errors.notMoreThanSymbols', { count: MAX_EMAIL_LENGTH }),
    )
    .matches(emailRegExp, i18n.t('errors.email'))
    .email(i18n.t('errors.email'))
    .matches(emailRegExp, i18n.t('errors.email')),
  password: string()
    .default('')
    .required(i18n.t('errors.fieldRequired'))
    .min(
      MIN_PASS_LENGTH,
      i18n.t('errors.notLessThanSymbols', { count: MIN_PASS_LENGTH }),
    )
    .max(
      MAX_PASS_LENGTH,
      i18n.t('errors.notMoreThanSymbols', { count: MAX_PASS_LENGTH }),
    ),
  passwordTwo: string()
    .default('')
    .required(i18n.t('errors.fieldRequired'))
    .oneOf([ref('password')], i18n.t('errors.passwordsMustMatch'))
    .min(
      MIN_PASS_LENGTH,
      i18n.t('errors.notLessThanSymbols', { count: MIN_PASS_LENGTH }),
    )
    .max(
      MAX_PASS_LENGTH,
      i18n.t('errors.notMoreThanSymbols', { count: MAX_PASS_LENGTH }),
    ),
});

export type RegistrationFields = Asserts<typeof validationSchema>;

const initialValues: RegistrationFields = {
  firstName: 'Михаил',
  lastName: 'Загребаев',
  email: 'raizor@bk.ru',
  password: '12345678',
  passwordTwo: '12345678',
};

export const useRegistrationForm = () => {
  const { mutate, isPending } = usePostRegistration();

  const onSubmit = useCallback<FormikConfig<RegistrationFields>['onSubmit']>(
    async values => {
      try {
        mutate(values);
      } catch (error) {
        console.log('error', error);
      }
    },
    [],
  );
  const formik = useFormik<RegistrationFields>({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const result = useCallback(() => {
    return { formik, isPending };
  }, [formik, isPending]);

  return result();
};

export const useRegistrationFormContext = () =>
  useFormikContext<RegistrationFields>();
