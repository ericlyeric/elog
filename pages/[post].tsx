import { parseISO } from 'date-fns';
import matter from 'gray-matter';
import yaml from 'js-yaml';
import fs from 'fs';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import PostLayout from '../components/layout/PostLayout';
import { fetchPostContent, PostContent } from '../components/lib/posts';

interface PostProps {
  title: string;
  summary: string;
  dateString: string;
  slug: string;
  tags: string[];
  source: MDXRemoteProps;
}

interface SlugToPostContentProps {
  [key: string]: PostContent;
}

const slugToPostContent = ((postContents) => {
  let hash: SlugToPostContentProps = {};
  postContents.forEach((postContent) => {
    hash[postContent.slug] = postContent;
  });
  return hash;
})(fetchPostContent());

const Post = ({ title, summary, dateString, slug, tags, source }: PostProps) => {
  return (
    <PostLayout title={title} summary={summary} date={parseISO(dateString)} slug={slug} tags={tags}>
      <MDXRemote {...source} />
    </PostLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = fetchPostContent().map((post) => `/${post.slug}`);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.post as string;
  const source = fs.readFileSync(slugToPostContent[slug].fullPath, 'utf8');
  const { content, data } = matter(source, {
    engines: { yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object },
  });
  const mdxSource = await serialize(content, { scope: data });
  return {
    props: {
      title: data.title,
      dateString: data.date,
      summary: data.summary,
      slug: data.slug,
      tags: data.tags,
      source: mdxSource,
    },
  };
};

export default Post;
