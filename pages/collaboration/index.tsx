import Head from 'next/head'
import '../../app/styles/globals.css'
import Header from '../../app/components/header';
import Footer from '../../app/components/footer';
import Collaboration from '../../app/components/collaboration_projects';

export default function Home() {
  return <>
    <Head>
      <title>Kamil Baraniak - Collaborations</title>
      <meta name='description' content='Portfolio - Kamil Baraniak' />
      <link rel="icon" type="image/png" href="/favicon/users.png" />
    </Head>
    <div>
      <Header />
      <Collaboration/>
      <Footer/>
    </div>
  </>
}

