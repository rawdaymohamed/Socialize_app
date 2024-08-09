import type { AppProps } from 'next/app'
import { AppCacheProvider } from '@mui/material-nextjs/v13-pagesRouter';
export default function App({ Component, pageProps }: AppProps) {
    return <AppCacheProvider>
        <Component {...pageProps} />
    </AppCacheProvider>
}