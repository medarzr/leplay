import { useQuery } from '@tanstack/react-query';

import api from '~/api/axiosApi';

const validateEmail = async (login: string, code: string, area: number) => {
  const { data } = await api.validateEmail(login, code, area);
  return data;
};

const useValidateEmail = (login: string, code: string, area: number) =>
  useQuery({
    queryKey: ['validateEmail', login],
    queryFn: () => validateEmail(login, code, area),
    enabled: false,
  });

export default useValidateEmail;
