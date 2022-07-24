import { GetStaticPaths, GetStaticProps } from 'next';
import PostList from '../../components/common/PostList';
import { countPosts, listPostContent, PostsListProps } from '../../components/lib/posts';
import settings from '../../components/lib/settings';

const Page = ({ posts, pagination }: PostsListProps) => {
  return <PostList posts={posts} pagination={pagination} />;
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
