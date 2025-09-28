"use client";

import { ApolloProvider } from "@apollo/client/react";
import client from "./apolloClient";
import React from "react";

export default function ApolloWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  React.useEffect(() => {
    fetch("http://127.0.0.1:8000/csrf/", {
      credentials: "include",
    });
  }, []);
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
