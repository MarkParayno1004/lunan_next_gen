import type { AppProps } from "next/app";
import createApolloClient from "../lib/apolloClient";
import { ApolloProvider } from "@apollo/client/react";

const client = createApolloClient();

export default function Page({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
