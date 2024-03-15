import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdOutlineMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";

function ContactForm(){

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [text,setText] = useState("");

    function onSubmit(event){
        event.preventDefault();

        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setText(event.target[2].value);
        console.log("name",event.target[0].value);
        console.log("email",event.target[1].value);
        console.log("text",event.target[2].value);
    }

    return (
        <section className={styles.container}>
        
        <div className={styles.contact_form}>

        <div className={styles.top_btn}>
        <Button
            text="VIA SUPPORT CHAT"
            icon={<MdOutlineMessage fontSize="24px"/>}
             />
               <Button 
            text="VIA CALL"
            icon={<MdCall fontSize="24px"/>}
             />
        </div>
            
        <Button
            text="VIA EMAIL FORM"
            icon={<MdEmail fontSize="24px"/> }
            isOutline={true}
             />
    
    <form onSubmit={onSubmit}>
    <div className={styles.form_control}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name"/> 
    </div>
    <div className={styles.form_control}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email"/> 
    </div>
    <div className={styles.form_control}>
        <label htmlFor="text">Text</label>
        <textarea name="text" rows="8"/> 
    </div>
    <div style={{
        display:"flex",
        justifyContent: "end"
    }}>
    <Button  text="SUBMIT" />
    </div>

    <div>{name+ " "+ email+ " "+ text}</div>
    </form>
        </div>

        <div className={styles.contact_image}>
            <img src="/images/contact.svg" alt="contact image" />
        </div>

        </section>
    )
}

export default ContactForm;