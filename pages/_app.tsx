import {AppProps} from "next/app";
import "../styles/scss/global.scss";
import "../styles/scss/home.scss";
import "react-slideshow-image/dist/styles.css";

function App(props: AppProps): JSX.Element {
	const {Component, pageProps} = props;
	return <Component {...pageProps} />;
}

export default App;
