import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "react-loading-skeleton/dist/skeleton.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { SkeletonTheme } from "react-loading-skeleton";

const clinet = new ApolloClient({
	uri: "https://api.ss.dev/resource/api",
	cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<SkeletonTheme baseColor='#313131' highlightColor='#525252'>
			<ApolloProvider client={clinet}>
				<App />
			</ApolloProvider>
		</SkeletonTheme>
	</React.StrictMode>
);
