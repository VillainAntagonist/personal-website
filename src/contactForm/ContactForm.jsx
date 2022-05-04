import React, {useState} from 'react';
import sendMailFunction from "../services/sendMail";

const ContactForm = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('')
    const [success, setSuccess] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        sendMailFunction(email, message);
        setSuccess(true);
        setEmail('');
        setMessage('')
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   required
                   minLength='6'
                   placeholder='Please type here your Email'
            />
            <textarea value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      minLength='14'
                      placeholder='Please type here your Message'
            ></textarea>
            <button type='submit'>Submit</button>
            {success && <p>Thank you, I'll reply you soon</p>}
        </form>
    );
};

export default ContactForm;
