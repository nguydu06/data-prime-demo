// pages/_app.js

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';  // You can include other global styles here

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}

export default MyApp;
