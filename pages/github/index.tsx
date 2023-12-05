import Head from 'next/head'
import '../../app/styles/globals.css'
import Header from '../../app/components/header';
import Footer from '../../app/components/footer';
import Repositories from '../../app/components/repositiories';

export default function Home() {
  return <>
    <Head>
      <title>Kamil Baraniak - Repositories</title>
      <meta name="description" content="Portfolio of my work" />
      <link rel="icon" type="image/png" href="/favicon/github_clean.png" />
    
      <!-- Facebook/Discord Tags -->
      <meta property="og:url" content="https://kbaraniak.vercel.app" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Kamil Baraniak - My Projects" />
      <meta property="og:description" content="Portfolio of my work" />
      <meta property="og:image" content="/favicon/share.png" />
    
      <!-- Twitter Tags -->
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="kbaraniak.vercel.app" />
      <meta property="twitter:url" content="https://kbaraniak.vercel.app" />
      <meta name="twitter:title" content="Kamil Baraniak - My Projects" />
      <meta name="twitter:description" content="Portfolio of my work" />
      <meta name="twitter:image" content="/favicon/share.png" />
    </Head>
    <div>
      <Header />
      <Repositories />
      <Footer/>
    </div>
  </>
}

