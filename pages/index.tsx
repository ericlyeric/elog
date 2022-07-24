import { GetStaticProps } from 'next';
import PostList from '../components/common/PostList';
import settings from '../components/lib/settings';
import { countPosts, listPostContent, PostsListProps } from '../components/lib/posts';

const Home = ({ posts, pagination }: PostsListProps) => {
  return <PostList posts={posts} pagination={pagination} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = listPostContent({ page: 1, limit: settings.postsPerPage });
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(countPosts() / settings.postsPerPage),
  };
  return {
    props: {
      posts,
      pagination,
    },
  };
};

export default Home;
