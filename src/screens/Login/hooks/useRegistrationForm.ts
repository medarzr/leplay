import { useCallback, useState } from 'react';

import { FormikConfig, useFormik, useFormikContext } from 'formik';
import { Asserts, object, string, ref } from 'yup';

import { i18n } from '~/lib/localization/localize';

import {
  MAX_EMAIL_LENGTH,
  MAX_PASS_LENGTH,
  MIN_PASS_LENGTH,
  emailRegExp,
} from './constants';

const validationSchema = object({
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
  passwordOne: string()
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
    .oneOf([ref('passwordOne')], i18n.t('errors.passwordsMustMatch'))
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
  email: '',
  passwordOne: '',
  passwordTwo: '',
};

export const useRegistrationForm = () => {
  const [success, setSuccess] = useState(false);

  const onSubmit = useCallback<FormikConfig<RegistrationFields>['onSubmit']>(
    async (values, { setSubmitting }) => {
      try {
        setSuccess(true);
        console.log('values', values);
      } catch (error) {
        console.log('error', error);
      } finally {
        setSubmitting(false);
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
    return { formik, success };
  }, [formik, success]);

  return result();
};

export const useRegistrationFormContext = () =>
  useFormikContext<RegistrationFields>();
