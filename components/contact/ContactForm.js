import styles from "./ContactForm.module.css";
import { useRef } from "react";

export default function ContactForm() {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const messageInputRef = useRef();

  function sendMessageHandler(e) {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const enteredMessage = messageInputRef.current.value;

    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
  return (
    <section className={styles.contact}>
      <h1>How can I help you?</h1>
      <form className={styles.form} onSubmit={sendMessageHandler}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="email">Your email</label>
            <input type="email" id="email" required ref={emailInputRef}></input>
          </div>
          <div className={styles.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" required ref={nameInputRef}></input>
          </div>
          <div className={styles.control}>
            <label htmlFor="message">Your Message</label>
            <textarea id="name" rows="5" ref={messageInputRef}></textarea>
          </div>
          <div className={styles.actions}>
            <button>Send message</button>
          </div>
        </div>
      </form>
    </section>
  );
}
