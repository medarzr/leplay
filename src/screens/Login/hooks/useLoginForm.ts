import { useCallback } from 'react';

import { FormikConfig, useFormik, useFormikContext } from 'formik';
import { Asserts, object, string } from 'yup';

import { i18n } from '~/lib/localization/localize';

import useGetAuth from './apiHooks/useGetAuth';
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
});

export type LoginFields = Asserts<typeof validationSchema>;

const initialValues: LoginFields = {
  email: '',
  password: '',
};

export const useLoginForm = () => {
  const { mutate, isPending } = useGetAuth();
  const onSubmit = useCallback<FormikConfig<LoginFields>['onSubmit']>(
    (values, { setSubmitting }) => {
      try {
        mutate(values);
      } catch (error) {
        console.log('error', error);
      } finally {
        setSubmitting(false);
      }
    },
    [],
  );

  const formik = useFormik<LoginFields>({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const result = useCallback(() => {
    return { formik, isPending };
  }, [formik, isPending]);

  return result();
};

export const useLoginFormContext = () => useFormikContext<LoginFields>();
