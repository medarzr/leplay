import { useMutation } from '@tanstack/react-query';

import api from '~/api/axiosApi';
import { useNavigation } from '~/navigation/navigators/hooks/useNavigation';
import { Routes } from '~/navigation/routes';

const getAuth = async (email: string, password: string) => {
  const { data } = await api.auth(email, password);
  return data;
};
export type RegistrationDataType = {
  email: string;
  password: string;
};

const useGetAuth = () => {
  const navigation = useNavigation();
  return useMutation({
    mutationFn: (variables: RegistrationDataType) =>
      getAuth(variables.email, variables.password),
    onSuccess: (data, variables) =>
      navigation.navigate(Routes.CodeScreen, {
        email: variables.email,
        numberOfAuth: 2,
      }),
  });
};
export default useGetAuth;
