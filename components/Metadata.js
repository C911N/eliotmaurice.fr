import Head from 'next/head'

const Metadata = ({title, description, keywords, icon = 'favicon.ico'}) => {
  return (
    <Head>
      <title>{title}</title>
      {description ? <meta name="description" content={description} /> : null}
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      <link rel="icon" href={`/${icon}`} />
    </Head>
  )
}

export default Metadata
