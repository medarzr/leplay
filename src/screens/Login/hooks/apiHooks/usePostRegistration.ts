import { useMutation } from '@tanstack/react-query';

import api from '~/api/axiosApi';
import { RegistrationDataType } from '~/api/types';
import { useNavigation } from '~/navigation/navigators/hooks/useNavigation';
import { Routes } from '~/navigation/routes';

const postRegistration = async (regData: RegistrationDataType) => {
  const { data } = await api.registration(regData);
  return data;
};
const usePostRegistration = () => {
  const navigation = useNavigation();
  return useMutation({
    mutationFn: (regData: RegistrationDataType) => postRegistration(regData),
    onSuccess: (data, variables) =>
      navigation.navigate(Routes.CodeScreen, {
        email: variables.email,
        numberOfAuth: 1,
      }),
  });
};

export default usePostRegistration;
