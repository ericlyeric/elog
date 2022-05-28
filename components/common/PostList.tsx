import { useState } from 'react';
import SearchBar from './SearchBar';
import Pagination from './Pagination';
import { PostsListProps } from '../lib/posts';
import PostItem from './PostItem';

const PostList = ({ posts, pagination }: PostsListProps) => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <>
      <div className="divide-y">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            All Posts
          </h1>
          <div className="relative min-h-full">
            <SearchBar value={searchValue} setValue={setSearchValue} />
          </div>
        </div>
        <ul>
          {/* {!filteredBlogPosts.length && 'No posts found.'} */}
          {posts.map((post, index) => {
            return <PostItem key={index} post={post} index={index} />;
          })}
        </ul>
      </div>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  );
};

export default PostList;
