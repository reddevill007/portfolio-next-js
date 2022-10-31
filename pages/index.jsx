import Head from 'next/head'
import HomeCont from '../components/Home/HomeCont'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className='layout mt-16 md:mt-0 md:ml-16'>
      <Head>
        <title>Saurabh Pandey</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=''>
        <Navbar />
        <HomeCont />
      </main>
    </div>
  )
}

export default Home
