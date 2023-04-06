import styles from "./Hero.module.css";
import Image from "next/image"

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image src="/images/site/vrc.png" alt="image showing victor" width={300} height={300}/>
      </div>
      <h1>Hi, I'm Victor</h1>
      <p>This is a blog about web development</p>
    </section>
  );
}
