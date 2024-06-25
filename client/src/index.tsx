import React from "react";
import { ReactNode } from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import "./styles/index.css";
import { PolicyholderProvider } from "./context/PolicyholderContext";
import Home from "./pages/Home";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const app: ReactNode = (
  <ApolloProvider client={client}>
    <PolicyholderProvider>
      <Home bar={""} children={undefined} />
    </PolicyholderProvider>
  </ApolloProvider>
);

root.render(app);
