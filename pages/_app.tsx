import { AppProps } from 'next/app';
import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import MainLayout from '../components/layout/MainLayout';
import settings from '../components/lib/settings';
import { SearchProvider } from '../components/context/SearchContext';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme={settings.theme}>
      <SearchProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </SearchProvider>
    </ThemeProvider>
  );
};

export default App;
