/* eslint-disable @next/next/no-sync-scripts */
import { GetStaticProps } from 'next';
import Head from 'next/head';
import PostList from '../components/common/PostList';
import settings from '../components/lib/settings';
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

export const getStaticProps: GetStaticProps = async () => {
  const posts = listPostContent({ page: 1, limit: settings.postsPerPage });
  const pagination = {
    current: 1,
    pages: Math.ceil(countPosts() / settings.postsPerPage),
  };
  return {
    props: {
      posts,
      pagination,
    },
  };
};

export default Home;
