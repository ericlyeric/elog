import tags from '../../config/tags.yml';

export interface TagContent {
  slug: string;
  name: string;
}

const generateTagMap = (): { [key: string]: TagContent } => {
  let result: { [key: string]: TagContent } = {};
  for (const tag of tags.tags) {
    result[tag.slug] = tag;
  }
  return result;
};

const tagMap: { [key: string]: TagContent } = generateTagMap();

export const getTag = (slug: string) => {
  return tagMap[slug];
};
