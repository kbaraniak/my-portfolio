import Head from 'next/head'
import '../app/styles/globals.css'
import Header from '../app/components/header';
import Projects from '../app/components/my_projects';

export default function Home() {
  return <>
    <Head>
      <title>Kamil Baraniak - My Projects</title>
      <meta name='description' content='Powered by next.js app' />
    </Head>
    <div>
      <Header />
      <Projects/>
    </div>
  </>
}
