import Head from "next/head";
import { AppProps } from "next/app";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import siteMetadata from "../components/helper/siteMetadata";
import MainLayout from "../components/layout/MainLayout";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  );
};

export default App;
