import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./styles";
import Pages from "./pages";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://catsronauts-tutorial-be.herokuapp.com",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client} >
      <GlobalStyles />
      <Pages />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
