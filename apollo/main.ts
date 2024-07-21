import { ApolloClient, InMemoryCache } from "@apollo/client";

// Initialized ApolloClient with the uri of the GraphQL server.
// The uri is the endpoint of the GraphQL server.
// The cache is the cache implementation that Apollo Client uses to store the data.
// InMemoryCache is the cache implementation that stores the data in memory. I used it in this example for this simple application.

const client = new ApolloClient({
    uri: "https://spacex-production.up.railway.app/",
    cache: new InMemoryCache(),
});

export default client;