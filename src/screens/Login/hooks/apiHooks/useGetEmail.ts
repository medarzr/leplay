import { useQuery } from '@tanstack/react-query';

import api from '~/api/axiosApi';

const getEmail = async (url: string) => {
  const { data } = await api.checkEmail(url);
  return data;
};

const useGetEmail = (email: string) =>
  useQuery({
    queryKey: ['getEmail', email],
    queryFn: () => getEmail(email),
  });

export default useGetEmail;
