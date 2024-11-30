'use client'

import styles from './Footer.module.css'
import { MdOutlineCopyright } from "react-icons/md";


const Footer = () => {
  return (
    <footer className={styles.mainContainer}>
      <MdOutlineCopyright className={styles.icon} />
      <p>Copyright AI Writing Assistant 2024. All right reserved</p>
    </footer>
  )
}

export default Footer