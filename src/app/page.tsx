'use client'

// import Image from "next/image";
import styles from "./page.module.css";
import dynamic from "next/dynamic";

const History = dynamic(() => import("@/components/history/History"), { ssr: false });
const InputForm = dynamic(() => import("@/components/inputForm/InputForm"), { ssr: false });

export default function Home() {
  return (
    <div className={styles.page}>
      <InputForm />
      <History />
    </div>
  );
}
