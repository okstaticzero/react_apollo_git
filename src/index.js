import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { Provider } from "rebass";
import * as serviceWorker from "./serviceWorker";

const httpLink = new HttpLink({
  uri: "https://api.github.com/graphql",
  headers: {
    authorization: `Bearer ${
      process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
    }`
  }
});
const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache
});

render(
  <ApolloProvider client={client}>
    <Provider>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
