import Head from 'next/head'
import '../../app/styles/globals.css'
import Header from '../../app/components/header';
import Footer from '../../app/components/footer';
import Repositories from '../../app/components/repositiories';

export default function Home() {
  return <>
    <Head>
      <title>Kamil Baraniak - Repositories</title>
      <meta name='description' content='Portfolio - Kamil Baraniak' />
      <link rel="icon" type="image/png" href="/favicon/github_clean.png" />
    </Head>
    <div>
      <Header />
      <Repositories />
      <Footer/>
    </div>
  </>
}

