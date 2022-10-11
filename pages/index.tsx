import { GetStaticProps } from 'next';
import PostList from '../components/common/PostList';
import { allPostContent, countPosts, PostsListProps } from '../components/lib/posts';
import SEO from '../components/helper/SEO';
import metadata from '../components/lib/metadata';

const Home = ({ posts, numberOfPosts }: PostsListProps) => {
  return (
    <>
      <SEO title={metadata.title} description={metadata.description} />
      <PostList posts={posts} numberOfPosts={numberOfPosts} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = allPostContent({});
  const numberOfPosts = countPosts();
  return {
    props: {
      posts,
      numberOfPosts,
    },
  };
};

export default Home;
