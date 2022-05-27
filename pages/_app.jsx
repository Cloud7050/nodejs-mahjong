/* [Imports] */
import Head from "next/head";

// [Global CSS]
import "bootstrap/dist/css/bootstrap.css";


/* [Exports] */
export default function App({ Component, pageProps }) {
	return <>
		<Head>
			{/* Responsive meta tag for bootstrap */}
			<meta name="viewport" content="width=device-width, initial-scale=1" />
		</Head>

		<Component {...pageProps} />
	</>;
}
