import './contact.scss';
import ContactForm from "../../contactForm/ContactForm";

const Contact = () => {

    return (
        <div className='contact' id='contact'>
            <div className="left">
                <img src='assets/handshake.svg' alt='Contact'/>
            </div>
            <div className="right">
                <h2>Contact</h2>
                    <ContactForm />
            </div>
        </div>
    );
};

export default Contact;
