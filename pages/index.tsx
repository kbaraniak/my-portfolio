import Head from 'next/head'
import '../app/styles/globals.css'
import Header from '../app/components/header';
import Footer from '../app/components/footer';
import Projects from '../app/components/my_projects';

export default function Home() {
  return <>
    <Head>
      <title>Kamil Baraniak - My Projects</title>
      <meta name='description' content='Portfolio - Kamil Baraniak' />
      <link rel="icon" type="image/png" href="/favicon/folder.png" />
    </Head>
    <div>
      <Header />
      <Projects/>
      <Footer/>
    </div>
  </>
}
