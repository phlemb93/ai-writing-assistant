'use client'

import { useChatsContext } from '@/contexts/ChatsContext';
import styles from './Navbar.module.css'
import { PiNotePencilLight } from "react-icons/pi";
import { useFeaturesContext } from '@/contexts/FeaturesContext';


const Navbar = () => {
  const { handleIsNewChat } = useChatsContext();
  const { features, setFeatures, response, handleExplain } = useFeaturesContext();

  return (
    <nav className={styles.mainContainer}>
      <div className={styles.wrapper}>
        <h1 className={styles.logo}>AI Writer</h1>
        <div className={styles.chat} onClick={handleIsNewChat}>
          <PiNotePencilLight className={styles.icon} />
          <p className={styles.text}>New Chat</p>
        </div>
      </div>
      <div className={styles.features}>
        <div className={styles.featuresContainer}>
            <label htmlFor="tone" className={styles.feature}>
              <p>Select Tone</p>
              <select className={styles.select} name="tone" id="tone" onChange={(e) => setFeatures({ ...features, tone: e.target.value })}>
                  <option value="formal">Formal</option>
                  <option value="casual">Casual</option>
                  <option value="persuasive">Persuasive</option>
              </select>
            </label>
            <label htmlFor="len" className={styles.feature}>
                <p>Select Length</p>
                <select className={styles.select} name="len" id="len" onChange={(e) => setFeatures({ ...features, len: e.target.value })}>
                    <option value="concise">Concise</option>
                    <option value="shorter">Shorter</option>
                    <option value="longer">Longer</option>
                </select>
            </label>
          </div>
             <button style={{visibility: response ? 'visible' : 'hidden'}} className={styles.btn} onClick={handleExplain}>Explain</button>
      </div>
    </nav>
  )
}

export default Navbar