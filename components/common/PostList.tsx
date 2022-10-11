import { useMemo, useState } from 'react';
import SearchBar from './SearchBar';
import { PostsListProps } from '../lib/posts';
import PostItem from './PostItem';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSearchContext } from '../context/SearchContext';

const PostList = ({ posts, numberOfPosts }: PostsListProps) => {
  const [numberOfPostsLoaded, setNumberOfPostsLoaded] = useState(5);
  const { searchValue } = useSearchContext();
  const filterPosts = useMemo(
    () =>
      posts?.filter((content) => {
        const searchContent = content.title + content.summary + content.tags.join(' ');
        return searchContent.toLowerCase().includes(searchValue.toLowerCase());
      }),
    [posts, searchValue]
  );

  const handleLoadMoreData = () => {
    setTimeout(() => {
      setNumberOfPostsLoaded(numberOfPostsLoaded + 5);
    }, 1000);
  };

  const displayPosts = posts && posts?.length > 0 && !searchValue ? posts : filterPosts;

  return (
    <>
      <div className="divide-y">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            All Posts
          </h1>
          <div className="relative min-h-full">
            <SearchBar />
          </div>
        </div>
        <div>
          <ul>
            <InfiniteScroll
              dataLength={numberOfPostsLoaded}
              next={handleLoadMoreData}
              hasMore={numberOfPosts > numberOfPostsLoaded}
              loader={<p className="pt-2 text-center">Loading more posts...</p>}
              endMessage={<p className="pt-2 text-center">No more posts to load</p>}
            >
              {displayPosts?.map((post, index) => {
                if (index < numberOfPostsLoaded) {
                  return <PostItem key={index} post={post} index={index} />;
                }
              })}
            </InfiniteScroll>
          </ul>
        </div>
      </div>
    </>
  );
};

export default PostList;
