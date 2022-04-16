import Head from "next/head";
import MainLayout from "../components/layout/MainLayout";

const Home = () => {
  return (
    <div>
      <Head>
        <title>elog</title>
        <meta name="description" content="test" />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <MainLayout>
        <section>test</section>
      </MainLayout>
    </div>
  );
};

export default Home;
