import React from 'react';
import emailjs from 'emailjs-com';
import { useRef } from 'react';




const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {


        emailjs.sendForm('service_atc5o2f', 'template_6s2yu7b', form.current, 'DynTbqUfLEHul8rAK')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section id="contact" >
            <h1>Contact Me</h1>
            <div id="contact-wrapper">
                <form ref={form} onSubmit={sendEmail}>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                        <input name ="user_name" type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name" required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input name="user_email" type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Text me</label>
                        <textarea name ="message"className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        </section>
    );
};

export default Contact;