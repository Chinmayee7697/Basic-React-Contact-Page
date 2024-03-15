import React from "react";
import styles from "./ContactHeader.module.css";

function ContactHeader(){

    return (
        <div className={styles.contacthead}>
        <h1>CONTACT US</h1>
        <p>Let's Connect : We're here to help, 
        and we'd love to hear from you!
        Whether you have a question, comment, 
        just want to chat, you can reach out to us
         through the contact form of this page, 
         or by phone, email, or social media.</p>
        </div>
    )
}

export default ContactHeader;