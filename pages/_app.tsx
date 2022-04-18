import { AppProps } from "next/app";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import siteMetadata from "../components/helper/siteMetadata";
import MainLayout from "../components/layout/MainLayout";
import { SessionProvider } from "next-auth/react";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider session={pageProps.session} refetchInterval={0}>
      <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </SessionProvider>
  );
};

export default App;
