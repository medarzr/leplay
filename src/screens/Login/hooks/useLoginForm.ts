import { useCallback, useState } from 'react';

import { FormikConfig, useFormik, useFormikContext } from 'formik';
import { Asserts, object, string } from 'yup';

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

export type ApplicationFields = Asserts<typeof validationSchema>;

const initialValues: ApplicationFields = {
  email: '',
  password: '',
};

export const useLoginForm = () => {
  const [success, setSuccess] = useState(false);

  const onSubmit = useCallback<FormikConfig<ApplicationFields>['onSubmit']>(
    async (values, { setSubmitting }) => {
      try {
        setSuccess(true);
      } catch (error) {
        console.log('error', error);
      } finally {
        setSubmitting(false);
      }
    },
    [],
  );

  const formik = useFormik<ApplicationFields>({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const result = useCallback(() => {
    return { formik, success };
  }, [formik, success]);

  return result();
};

export const useLoginFormContext = () => useFormikContext<ApplicationFields>();
