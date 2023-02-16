import * as React from 'react';
import { Provider } from 'react-redux'

import Head from 'next/head'
import { AppProps } from 'next/app'

import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';

import createEmotionCache from '../utils/createEmotionCache';
import lightTheme from '../styles/theme/lightTheme';

import { store } from './store/store.js';

import '../styles/globals.css';

const clientSideEmotionCache = createEmotionCache();

export default function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Badar Expo Solutions</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/Badar-icon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/Badar-icon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/"></link>
        <meta name="theme-color" content="#317EFB" />

      </Head>
      <CacheProvider value={emotionCache}>
        <Provider store={store}>
          <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </Provider>
      </CacheProvider>
    </>
  )
}
