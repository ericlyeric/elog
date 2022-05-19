// TODO: WIP
import Head from 'next/head';
import { useRouter } from 'next/router';
import metadata from '../lib/metadata';

interface SEOProps {
  title: string;
  description: string;
  ogType: string;
  ogImage:
    | string
    | {
        '@type': string;
        url: string;
      }[];
  twImage: string;
  canonicalUrl?: string;
}

const SEO = ({ title, description, ogType, ogImage, canonicalUrl }: SEOProps) => {
  const router = useRouter();

  return (
    <Head>
      <title>{title}</title>
      <meta name="author" content={metadata.author} />
      <meta name="robots" content="follow, index" />
      <meta name="description" content={description} />
      <meta property="og:url" content={`${metadata.siteUrl}${router.asPath}`} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={metadata.title} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      {Array.isArray(ogImage) ? (
        ogImage.map(({ url }) => <meta property="og:image" content={url} key={url} />)
      ) : (
        <meta property="og:image" content={ogImage} key={ogImage} />
      )}
      <link
        rel="canonical"
        href={canonicalUrl ? canonicalUrl : `${metadata.siteUrl}${router.asPath}`}
      />
    </Head>
  );
};

export default SEO;
