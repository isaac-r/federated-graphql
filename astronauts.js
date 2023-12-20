// Subgraph/service
const { ApolloServer, gql } = require("apollo-server");
const { buildFederatedSchema } = require("@apollo/federation");
const fetch = require("node-fetch");

const port = 4001;
const apiUrl = "http://localhost:3000";