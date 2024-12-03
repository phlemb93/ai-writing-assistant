'use client'

import styles from './History.module.css'
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { AiOutlineDelete } from "react-icons/ai";
import { useState } from 'react';
import { useChatsContext } from '@/contexts/ChatsContext';

const History = () => {
    const { chats, deleteChat, handleDownloadHistory } = useChatsContext();
    const [open, setOpen] = useState(false);

    return (
        <div className={styles.mainContainer}>
            <header className={styles.header} onClick={() => setOpen(!open)}>
                <h3>Previous Chats</h3>
                <div>
                    { open ? <RiArrowDropUpLine className={styles.icon} />
                     : <RiArrowDropDownLine className={styles.icon} /> }
                </div>
            </header>
            <section className={styles.contentsContainer} style={open ? { display: 'flex', flexDirection: 'column' } : { display: 'none' }}>
                {
                    chats && chats.map((chat, index) => (
                        <div className={styles.content} key={index}>
                            <div className={styles.textContainer}>
                                <p className={styles.text}>{chat.message.length < 40 ? chat.message : `${chat.message.slice(0, 40)}...`}</p>
                                <span className={styles.response}>Re-written: {chat.response.length < 50 ? chat.response : `${chat.response.slice(0, 50)}...`}</span>
                            </div>
                            <AiOutlineDelete className={styles.deleteIcon} onClick={() => deleteChat(chat.id)} />
                        </div>
                    ))
                }
                <button onClick={handleDownloadHistory} className={styles.downloadButton}>Download History</button>
            </section>
        </div>
    )
}

export default History;