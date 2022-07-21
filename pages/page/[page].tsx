/* eslint-disable @next/next/no-sync-scripts */
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import PostList from '../../components/common/PostList';
import { countPosts, listPostContent, PostsListProps } from '../../components/lib/posts';
import settings from '../../components/lib/settings';

interface PageProps extends PostsListProps {
  page: number;
}

// look into adding tags
const Page = ({ posts, pagination, page }: PageProps) => {
  const url = `page/${page}`;

  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <PostList posts={posts} pagination={pagination} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const page = parseInt(params?.page as string);
  const posts = listPostContent({ page, limit: settings.postsPerPage });
  const pagination = {
    currentPage: page,
    totalPages: Math.ceil(countPosts() / settings.postsPerPage),
  };
  return {
    props: {
      page,
      posts,
      pagination,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = Math.ceil(countPosts() / settings.postsPerPage);
  const paths = Array.from(Array(pages - 1).keys()).map((it) => ({
    params: { page: (it + 2).toString() },
  }));
  return {
    paths: paths,
    fallback: false,
  };
};

export default Page;
