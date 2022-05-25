import '../styles/globals.css'
import Layout from '../components/Layout/Layout'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Script id="flowbite-js" src="https://unpkg.com/flowbite@1.4.7/dist/flowbite.js" strategy="beforeInteractive"></Script>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
