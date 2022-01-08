import {AppProps} from "next/app";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "../public/fonts/index.css";
import "../styles/scss/global.scss";
import "../styles/scss/home.scss";

function App(props: AppProps): JSX.Element {
	const {Component, pageProps} = props;
	return <Component {...pageProps} />;
}

export default App;
