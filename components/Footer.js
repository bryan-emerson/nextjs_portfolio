import * as React from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import styles from '@/styles/Footer.module.css'
import { Link } from '@mui/material';

let navObjects = [
  {
    name: 'About',
    url: '/',
    target: null,
    key: 1,
  },
  {
    name: 'Projects',
    url: '/projects',
    target: null,
    key: 2,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/bryanemerson-/',
    target: '_blank',
    key: 3,
  },
  {
    name: 'Github',
    url: 'https://github.com/bryan-emerson',
    target: '_blank',
    key: 4,
  },
  {
    name: 'Resume',
    url: 'https://docs.google.com/document/d/12CYUXDHy1HpexCoWimkxkHj8vrJjY78ds-yaDTRAZXU/edit',
    target: '_blank',
    key: 5,
  },
  {
    name: 'Photo & Design',
    url: 'https://skifaster22.myportfolio.com',
    target: '_blank',
    key: 6,
  },
]

export default function footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerColumnOne}>
        <Typography variant='h5' align='left'>Bryan Emerson</Typography>
        <Typography className={styles.subtitle} variant='subtitle1' align='left'>Frontend Developer</Typography>
      </div>
      <Divider className={styles.divider} orientation="vertical" flexItem />
      <div className={styles.footerColumnTwo}>
        <Typography variant='subtitle1'>
            <ul className={styles.list}>
              <li className={styles.lowNav}><Link href={navObjects[0].url} target={navObjects[0].target} className={styles.lowNav} underline='hover'>About</Link></li>
              <li className={styles.lowNav}><Link href={navObjects[1].url} target={navObjects[1].target} className={styles.lowNav} underline='hover'>Projects</Link></li>
              <li className={styles.lowNav}><Link href={navObjects[2].url} target={navObjects[2].target} className={styles.lowNav} underline='hover'>LinkedIN</Link></li>
              <li className={styles.lowNav}><Link href={navObjects[3].url} target={navObjects[3].target} className={styles.lowNav} underline='hover'>Github</Link></li>
              <li className={styles.lowNav}><Link href={navObjects[4].url} target={navObjects[4].target} className={styles.lowNav} underline='hover'>Resume</Link></li>
              <li className={styles.lowNav}><Link href={navObjects[5].url} target={navObjects[5].target} className={styles.lowNav} underline='hover'>Photo & Design</Link></li>
            </ul>
        </Typography>
      </div >
    </div >
  )
}

