import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

import App from "./components/App";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

reportWebVitals();
