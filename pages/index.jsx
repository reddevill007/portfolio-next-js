import Head from 'next/head'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Saurabh Pandey</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
      </main>
    </div>
  )
}

export default Home
