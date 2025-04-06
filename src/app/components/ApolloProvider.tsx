'use client';

import { ReactNode } from 'react';
import { ApolloProvider as BaseApolloProvider } from '@apollo/client';
import apolloClient from '../lib/apollo-client';

export default function ApolloProvider({ children }: { children: ReactNode }) {
  return (
    <BaseApolloProvider client={apolloClient}>
      {children}
    </BaseApolloProvider>
  );
}