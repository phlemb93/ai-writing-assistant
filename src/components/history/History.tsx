// 'use client'

import styles from './History.module.css'
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { AiOutlineDelete } from "react-icons/ai";
import { useState } from 'react';


const History = () => {

  const [open, setOpen] = useState(false);
    
  return (
    <div className={styles.mainContainer}>
        <header className={styles.header} onClick={() => setOpen(!open)}>
            <h2>Previous Chats</h2>
            <div>
                { open ? <RiArrowDropUpLine className={styles.icon} />
                 : <RiArrowDropDownLine className={styles.icon} /> }
            </div>
            
        </header>
        <section className={styles.contentsContainer} style={open ? {display: 'flex'} : {display: 'none'}}>
            <div className={styles.content}>
                <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur...</p>
                <AiOutlineDelete className={styles.deleteIcon} />
            </div>
            <div className={styles.content}>
                <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur...</p>
                <AiOutlineDelete className={styles.deleteIcon} />
            </div>
            <div className={styles.content}>
                <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur...</p>
                <AiOutlineDelete className={styles.deleteIcon} />
            </div>
            <div className={styles.content}>
                <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur...</p>
                <AiOutlineDelete className={styles.deleteIcon} />
            </div>
        </section>
    </div>
  )
}

export default History