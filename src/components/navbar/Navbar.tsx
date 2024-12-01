'use client'

import { useChatsContext } from '@/contexts/chatsContext';
import styles from './Navbar.module.css'
import { PiNotePencilLight } from "react-icons/pi";


const Navbar = () => {
  const {handleIsNewChat} = useChatsContext();

  return (
    <nav className={styles.mainContainer}>
      <div className={styles.wrapper}>
        <h1 className={styles.logo}>AI Writer</h1>
        <div className={styles.chat} onClick={handleIsNewChat}>
          <PiNotePencilLight className={styles.icon} />
          <p className={styles.text}>New Chat</p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar