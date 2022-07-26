import type { NextPage } from 'next'
import Head from 'next/head'
import Header from "../components/Header"
import Intro from "../components/Intro"
import Welcome from "../components/Welcome"
import WhatWeDo from "../components/WhatWeDo"
import Barbers from "../components/Barbers"
import Work from "../components/Work"
import Map from "../components/Map"
import Footer from "../components/Footer"
import Sidebar from "../components/Sidebar"
import Modal from "../components/Modal"
import {
  RecoilRoot,
  useRecoilState,
} from 'recoil';


const Home: NextPage = () => {

  return (
    <RecoilRoot>
      <div className='font-monserrat'>
        <Head>
          <title>Central Barber Shop</title>
        </Head>
        <Intro />
        <Welcome />
        <WhatWeDo />
        <Barbers />
        <Work />
        <Map />
        <Footer />
        <Sidebar />
        <Modal />
        <Header />
      </div>
    </RecoilRoot>
  )
}

export default Home
