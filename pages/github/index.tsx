import Head from 'next/head'
import '../../app/styles/globals.css'
import Header from '../../app/components/header';
import Repositories from '../../app/components/repositiories';

export default function Home() {
  return <>
    <Head>
      <title>Kamil Baraniak - Repositories</title>
      <meta name='description' content='Powered by next.js app' />
    </Head>
    <div>
      <Header />
      <Repositories />
    </div>
  </>
}

