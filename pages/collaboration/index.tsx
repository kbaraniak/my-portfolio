import Head from 'next/head'
import '../../app/styles/globals.css'
import Header from '../../app/components/header';
import Collaboration from '../../app/components/collaboration_projects';

export default function Home() {
  return <>
    <Head>
      <title>Kamil Baraniak - Collaborations</title>
      <meta name='description' content='Powered by next.js app' />
    </Head>
    <div>
      <Header />
      <Collaboration/>
    </div>
  </>
}

