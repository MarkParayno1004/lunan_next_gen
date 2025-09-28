import Cookies from "js-cookie";
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
} from "@apollo/client";

const csrfLink = new ApolloLink((operation, forward) => {
  const token = Cookies.get("csrftoken");
  console.log("token", token);
  if (token) {
    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        "X-CSRFToken": token,
      },
    }));
  }
  return forward(operation);
});

const client = new ApolloClient({
  link: csrfLink.concat(
    new HttpLink({
      uri: "http://127.0.0.1:8000/graphql/",
      credentials: "include",
    })
  ),
  cache: new InMemoryCache(),
});

export default client;
