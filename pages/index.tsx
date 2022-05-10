/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import ListLayout from "../components/layout/ListLayout";

const Home = () => {
  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <ListLayout
        posts={[]}
        title="All Posts"
        pagination={{ currentPage: 1, totalPages: 2 }}
      />
    </>
  );
};

export default Home;
