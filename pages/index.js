import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Paper } from '@mui/material';

import large_background from '../public/assets/large_background.jpg'
import largeSubject from '../public/assets/largeSubject.png'
import mobile_background from '../public/assets/mobile_background.jpg'

import Navbar from '../components/Navbar.js';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Paper>
        <Navbar />

        <div className={styles.mobileBack} style={{
          backgroundImage: `url('${mobile_background.src}')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          zIndex: 0,
        }} />

        <div className={styles.back} style={{
          backgroundImage: `url('${large_background.src}')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          zIndex: 0
        }} />
      </Paper>
    </>
  )
}

// Photo assets just added for index.js, next i need to implement parralax