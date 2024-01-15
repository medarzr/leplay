import React, { FC, PropsWithChildren } from 'react';

import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import errorHandler from '~/api/errorHandler';

export const QueryProvider: FC<PropsWithChildren> = ({ children }) => {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: (count, error) => {
              const { status, code } = error;
              console.log('retry', status, error);
              return false;
            },
          },
          mutations: {
            retry: (count, error) => {
              const { status, code } = error;
              return false;
            },
          },
        },
        queryCache: new QueryCache({
          onError: error => {
            errorHandler(error);
          },
        }),
        mutationCache: new MutationCache({
          onError: (error, variables, context) => {
            console.log('mutation, mutation2', error, variables, context);
            errorHandler(error);
          },
        }),
      }),
  );
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
