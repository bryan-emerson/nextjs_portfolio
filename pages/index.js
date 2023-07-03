import * as React from 'react';
import styles from '@/styles/Home.module.css';
import { Paper } from '@mui/material';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import large_background from '../public/assets/large_background.jpg';
import largeSubject from '../public/assets/brightSubject.png';
import mobile_background from '../public/assets/mobile_background.jpg';

import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';



export default function Home() {
  return (

    <Paper>
      <div className={styles.parallax}>
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

        <h1 className={styles.title}>Frontend Developer</h1>

        <Image className={styles.subject} src={largeSubject} alt="photo of Bryan" width='650' height='400' priority='true' quality='100' />
        <div >
          <div className={styles.scrollDown}></div>
        </div>
        <div className={styles.box}>
          <Typography variant="h4" align='center' gutterBottom>
            My Name Is Bryan Emerson! I&apos;m a Frontend Software Engineer with a penchant for clean code and user friendly solutions.
          </Typography>
          <br className={styles.break}></br>
          <Divider />
          <Typography variant="body1" gutterBottom className={styles.box2}>
            In my previous role I was one of two PLM Software Developers for Laborie Medical Technologies; a global corporation operating in 110 countries and dedicated to empowering clinicians worldwide with cutting-edge technology for critical care. In this role I was part of a cross functional team including two electrical engineers, two mechanical engineers, and one design verification engineer. My primary responsibilities revolved around facilitating seamless integration between Laborie devices and hospital electronic medical record (EMR) systems. This involved conducting video conferences with client IT departments, where I would provide in-depth explanations of our software&apos;s functionality, carefully document their requirements, and subsequently implement the necessary integrations. Additionally, my colleague and I were entrusted with the task of maintaining legacy device software and embedded firmware. We also collaborated closely with the cross-functional team to integrate Bluetooth devices and consumable RFID tags/scanners into Laborie&apos;s medical devices. Beyond my core responsibilities, I actively supported the sales team as a sales engineer and offered assistance to the design verification engineer during periods of high workload. These experiences further enhanced my understanding of the product lifecycle and the importance of delivering exceptional service to both internal and external stakeholders.
          </Typography>
          <br className={styles.break}></br>
          <Divider />
          <Typography variant="body1" gutterBottom className={styles.box2}>
            My technical foundation was built on eleven years of aircraft maintenance while working as a Crew Chief in the United States Air Force.  Throughout my military service, I honed my skills in meticulous aircraft maintenance, ensuring the highest standards of safety and performance. This experience instilled in me a strong sense of discipline, attention to detail, and a commitment to excellence that are essential traits for a software engineer. In addition to my technical background, I have also amassed extensive experience in the hospitality sector, where I held various positions ranging from bartender to consultant to owner/operator. These roles allowed me to develop exceptional communication skills and a deep understanding of the importance of fostering positive customer and team relations. I thrived in creating welcoming environments and delivering top-notch service, which further strengthened my ability to effectively communicate and collaborate with diverse individuals and teams. The combination of my technical maintenance expertise and my proficiency in customer relations has provided me with a unique advantage as a software engineer. I bring a meticulous approach to problem-solving, a keen eye for detail, and a strong commitment to delivering exceptional results. Moreover, my outstanding communication skills enable me to effectively translate complex technical concepts to both technical and non-technical stakeholders, ensuring smooth collaboration and project success.
          </Typography>
          <br className={styles.break}></br>
          <Divider />
          <Typography variant="body1" gutterBottom className={styles.box2}>
            When I&apos;m not focused on work, you can find me outside hiking, biking, surfing, or collecting stamps in my passport! I am also passionate about photography and design!
          </Typography>
          <br className={styles.break}></br>
          <Divider />
          <div>
            <Footer />
          </div>

        </div>
      </div>
    </Paper>

  )
}

// just rendered text and implemented parallax next need to format text on index route to look niceeeeee