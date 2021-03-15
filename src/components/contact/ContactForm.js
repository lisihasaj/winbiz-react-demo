import React, { useState } from 'react';
import inputs from './json/formInputs.json';
import { useForm } from 'react-hook-form';

const ContactForm = props => {
    const [gender, setGender] = useState('female');
    const { register, handleSubmit } = useForm();

    const personalData = inputs[0];
    const emailData = inputs[1];
    const messageData = inputs[2];

    const onSubmit = handleSubmit((data) => {
        console.log(data) //Data displayed on console
        setTimeout(() => {
            props.setMessage()
            window.scrollTo(0, 0)
        }, 1000)
    });

    return (
        <form className='contactForm form-group col-12 p-0' onSubmit={onSubmit}>
            <label className='radioInputs col-12'>Formule d’appel *
                <label className='label'>
                    <input
                        className='radio'
                        type='radio'
                        id='female'
                        name='female'
                        checked={gender === 'female'}
                        onChange={() => setGender('female')}
                        ref={register}
                    />
                    Madame
                </label>
                <label className='label'>
                    <input
                        className='radio'
                        type='radio'
                        id='male'
                        name='male'
                        checked={gender === 'male'}
                        onChange={() => setGender('male')}
                        ref={register}
                    />
                    Monsieur
                </label>
            </label>
            <div className='personalDataInput col-12 p-0'>
                {
                    personalData.pdi.map((item, key) => {
                        return <div className='PDInput col-6 p-0' key={key}>
                            <label
                                className='label'
                                htmlFor={item.htmlFor}
                            >
                                {item.label}
                            </label>
                            <input
                                className='theInput'
                                type={item.type}
                                name={item.name}
                                placeholder={item.placeholder}
                                ref={register({required: true})}
                            />
                        </div>
                    })
                }
            </div>
            <div className='wideDataInput col-12 p-0'>
                {
                    <div className='emailInput col-12 p-0'>
                        <label
                            className='label'
                            htmlFor={emailData.htmlFor}
                        >
                            {emailData.label}
                        </label>
                        <input
                            className='theInput'
                            type={emailData.type}
                            name={emailData.name}
                            placeholder={emailData.placeholder}
                            ref={register({required: true})}
                        />
                    </div>

                }
                {
                    <div className='messageInput col-12 p-0'>
                        <label
                            className='label'
                            htmlFor={messageData.htmlFor}
                        >
                            {messageData.label}
                        </label>
                        <textarea
                            className='theInput'
                            type={messageData.type}
                            name={messageData.name}
                            placeholder={messageData.placeholder}
                            ref={register({required: true})}
                            rows="3"
                        />
                    </div>
                }
            </div>
            <div className='btnWrapper col-12 p-0'>
                <button className='submit'>envoyer</button>
            </div>
        </form>
    );
};

export default ContactForm;