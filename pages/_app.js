import '../styles/globals.css'
import Head from 'next/head'
import { Provider } from 'react-redux'
import store from '../store/index'

function MyApp({ Component, pageProps }) {
  return <Provider store={store}>
  <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"></link>
      </Head>
  <header>midunext</header>
  <Component {...pageProps} />
  </Provider>

}

export default MyApp
