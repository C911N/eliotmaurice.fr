import Document, { Html, Head, Main, NextScript } from 'next/document'

class CustonDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <Font url="https://fonts.googleapis.com/css2?family=Sarabun:wght@400;800&display=swap" />
          <Font url="https://fonts.cdnfonts.com/css/sansita-one" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

const Font = ({ url }) => {
  return (
    <link
      href={url}
      rel="stylesheet"
    />
  )
}

export default CustonDocument