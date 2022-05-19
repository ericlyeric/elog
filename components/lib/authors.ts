import authors from '../../config/authors.yml';

interface AuthorContent {
  slug: string;
  name: string;
  introduction: string;
}

const generateAuthorMap = (): { [key: string]: AuthorContent } => {
  let result: { [key: string]: AuthorContent } = {};
  for (const author of authors.authors) {
    result[author.slug] = author;
  }
  return result;
};

const authorMap: { [key: string]: AuthorContent } = generateAuthorMap();

export const getAuthor = (slug: string) => {
  return authorMap[slug];
};
