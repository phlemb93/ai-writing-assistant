'use client'

import styles from './Navbar.module.css'
import { PiNotePencilLight } from "react-icons/pi";


const Navbar = () => {
  return (
    <nav className={styles.mainContainer}>
      <div className={styles.wrapper}>
        <h1 className={styles.logo}>AI Writer</h1>
        <div className={styles.chat}>
          <PiNotePencilLight className={styles.icon} />
          <p className={styles.text}>New Chat</p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar