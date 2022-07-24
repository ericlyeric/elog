import Head from 'next/head';
import { useRouter } from 'next/router';
import metadata from '../lib/metadata';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
}

const SEO = ({ title, description }: SEOProps) => {
  const router = useRouter();

  return (
    <Head>
      <title>{title}</title>
      <meta name="author" content={metadata.author} />
      <meta name="robots" content="follow, index" />
      <meta name="description" content={description} />
      <meta property="og:url" content={`${metadata.siteUrl}${router.asPath}`} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={metadata.title} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
    </Head>
  );
};

export default SEO;
