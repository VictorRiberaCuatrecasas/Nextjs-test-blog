import styles from "./ContactForm.module.css";
import { useRef, useState, useEffect } from "react";
import Notification from "../ui/notification";

export default function ContactForm() {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const messageInputRef = useRef();
  const [requestStatus, setRequestStatus] = useState(); // pending, success, error
  const [requestError, setRequestError] = useState();

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  async function sendContactData(contactDetails) {
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(contactDetails),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "somthing went wrong");
    }
  }

  async function sendMessageHandler(e) {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const enteredMessage = messageInputRef.current.value;

    setRequestStatus("pending");

    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });

      setRequestStatus("success");
      emailInputRef.current.value = null;
      nameInputRef.current.value = null;
      messageInputRef.current.value = null;
    } catch (error) {
      setRequestStatus("error");
      setRequestError(error.message);
    }
  }

  let notification;

  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "sending message..",
      message: "You message is being sent",
    };
  }
  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Success",
      message: "Message sent",
    };
  }
  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Error!",
      message: requestError,
    };
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
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
}
