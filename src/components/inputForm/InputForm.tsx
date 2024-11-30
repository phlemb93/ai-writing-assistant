// 'use client'

import styles from './InputForm.module.css'
import { AiOutlineSend } from "react-icons/ai";

const InputForm = () => {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.contentContainer}>
            <div className={styles.userText}>
                <p>You can start a new conversation here</p>
            </div>
            <div className={styles.botText}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis distinctio totam accusamus, eaque facere sit ullam quod temporibus explicabo suscipit?</p>
            </div>
            <div className={styles.userText}>
                <p>You can start a new conversation here</p>
            </div>
            <div className={styles.botText}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis distinctio totam accusamus, eaque facere sit ullam quod temporibus explicabo suscipit?</p>
            </div>
        </div>
        <form action="" className={styles.textForm}>
            <label htmlFor="newChat" className={styles.textLabel}>
                <textarea className={styles.textInput} name="newChat" id="newChat"  placeholder='Talk to AI Writer'/>
                <AiOutlineSend className={styles.icon} />
            </label>
        </form>
    </div>
  )
}

export default InputForm