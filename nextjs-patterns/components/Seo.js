import Head from "next/head";

export default function Seo({ title }) {
  const titleString = `${title} | Next Movies`;
  return (
    <Head>
      <title>{titleString}</title>
    </Head>
  );
}
