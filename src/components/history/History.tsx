// 'use client'

import styles from './History.module.css'
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { AiOutlineDelete } from "react-icons/ai";
import { useState } from 'react';
import { useChatsContext } from '@/contexts/chatsContext';

const History = () => {
    const {chats, deleteChat} = useChatsContext();
    const [open, setOpen] = useState(false);

    console.log(chats)
    
  return (
    <div className={styles.mainContainer}>
        <header className={styles.header} onClick={() => setOpen(!open)}>
            <h2>Previous Chats</h2>
            <div>
                { open ? <RiArrowDropUpLine className={styles.icon} />
                 : <RiArrowDropDownLine className={styles.icon} /> }
            </div>
            
        </header>
        <section className={styles.contentsContainer} style={open ? {display: 'flex', flexDirection: 'column'} : {display: 'none'}}>
            {
                chats.map((chat, index) => (
                    <div className={styles.content} key={index}>
                        <p className={styles.text}>{chat.message}</p>
                        <AiOutlineDelete className={styles.deleteIcon} onClick={() => deleteChat(chat.id)} />
                    </div>
                ))
            }
        </section>
    </div>
  )
}

export default History