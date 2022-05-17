/* eslint-disable @next/next/no-sync-scripts */
import { GetStaticProps } from 'next';
import Head from 'next/head';
import PostList from '../components/common/PostList';
import siteMetadata from '../components/helper/siteMetadata';
import { countPosts, listPostContent, PostsListProps } from '../components/lib/posts';

const Home = ({ posts, pagination }: PostsListProps) => {
  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <PostList posts={posts} pagination={pagination} />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const posts = listPostContent({ page: 1, limit: siteMetadata.postsPerPage });
  const pagination = {
    current: 1,
    pages: Math.ceil(countPosts() / siteMetadata.postsPerPage),
  };
  return {
    props: {
      posts,
      pagination,
    },
  };
};
