import { AppProps } from "next/app";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import siteMetadata from "../components/helper/siteMetadata";
import MainLayout from "../components/layout/MainLayout";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  );
};

export default App;
