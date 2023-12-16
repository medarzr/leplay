import { useCallback, useState } from 'react';

import { FormikConfig, useFormik } from 'formik';
import { Asserts, object, string } from 'yup';

import { i18n } from '~/lib/localization/localize';

import { MAX_EMAIL_LENGTH, emailRegExp } from './constants';

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
});

export type ForgotPasswordFields = Asserts<typeof validationSchema>;

const initialValues: ForgotPasswordFields = {
  email: '',
};

export const useForgotPasswordForm = () => {
  const [success, setSuccess] = useState(false);

  const onSubmit = useCallback<FormikConfig<ForgotPasswordFields>['onSubmit']>(
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

  const formik = useFormik<ForgotPasswordFields>({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const result = useCallback(() => {
    return { formik, success };
  }, [formik, success]);

  return result();
};
