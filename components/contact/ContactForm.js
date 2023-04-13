import styles from "./ContactForm.module.css";

export default function ContactForm() {
  return (
    <section className={styles.contact}>
      <h1>How can I help you?</h1>
      <form className={styles.form}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="email">Your email</label>
            <input type="email" id="email" required></input>
          </div>
          <div className={styles.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" required></input>
          </div>
          <div className={styles.control}>
            <label htmlFor="message">Your Message</label>
            <textarea id="name" rows="5"></textarea>
          </div>
          <div className={styles.actions}>
            <button>Send message</button>
          </div>
        </div>
      </form>
    </section>
  );
}
