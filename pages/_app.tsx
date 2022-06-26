import { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';

// Themes:
import { darkTheme } from '../themes';

// CSS:
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <NextUIProvider theme={darkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
