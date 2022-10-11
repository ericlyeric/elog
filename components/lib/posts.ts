import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import yaml from 'js-yaml';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export interface PostsListProps {
  posts: PostContent[];
  numberOfPosts: number;
}

export interface PostContent {
  date: string;
  title: string;
  summary?: string;
  slug: string;
  tags: string[];
  fullPath: string;
}

let postCache: PostContent[];

export const fetchPostContent = (): PostContent[] => {
  if (postCache) return postCache;
  // get file names under /posts
  const filenames = fs.readdirSync(postsDirectory);
  const allPostsData = filenames
    .filter((file) => file.endsWith('.mdx'))
    .map((filename) => {
      // read markdown file as string
      const fullPath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(fullPath, 'utf-8');

      // use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents, {
        engines: {
          yaml: (str) => yaml.load(str, { schema: yaml.JSON_SCHEMA }) as object,
        },
      });
      const matterData = matterResult.data as PostContent;
      matterData.fullPath = fullPath;

      const slug = filename.replace(/\.mdx$/, '');

      // validate slug string
      if (matterData.slug !== slug) {
        throw new Error('slug field does not match with the path of its content source');
      }

      return matterData;
    });

  // sorts posts by date
  postCache = allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
  return postCache;
};

export const countPosts = (tag?: string): number => {
  return fetchPostContent().filter((post) => !tag || (post.tags && post.tags.includes(tag))).length;
};

interface allPostContentProps {
  tag?: string;
}

export const allPostContent = ({ tag }: allPostContentProps): PostContent[] => {
  return fetchPostContent().filter((post) => !tag || (post.tags && post.tags.includes(tag)));
};
