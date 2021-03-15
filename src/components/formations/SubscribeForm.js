import React, { useState } from 'react';
import formData from './json/formInputs.json';
import { useForm } from 'react-hook-form';
import CompletedForm from './CompletedForm';

const SubscribeForm = () => {
    const [message, setMessage] = useState(false);

    const personalData = formData.pdi;
    const addressInput = formData.addi;
    const addressInput2 = formData.twoLast;
    const { register, handleSubmit, errors, reset } = useForm();
    const onSubmit = handleSubmit((data) => {
        console.log(data)//Data displayed on console
        setTimeout(() => {
            setMessage(true);
        }, 1000)
        reset();
    });

    return (
        <>
            <section className='formSection'>
                {
                    !message ?
                        <div className='formWrapper col-12 col-sm-12 col-md-11 col-lg-10 col-xl-10 p-0'>
                            <div className='left col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 p-0'>
                                <h2 className='stepTitle'>étape 1</h2>
                                <h5 className='stepSubtitle'>Renseignez vos informations</h5>
                            </div>
                            <form
                                className='inputContainer form-group col-12 col-sm-12 col-md-8 col-lg-7 col-xl-7 pl-2 pr-0'
                                onSubmit={onSubmit}
                            >
                                <h5 className='formGroupTitle'>Vos informations</h5>
                                <div className='personalDataInput col-12 p-0'>
                                    {
                                        personalData?.map((item, id) => {
                                            return <div className='PDInput col-6 p-0' key={id}>
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
                                                {
                                                    errors.personalData && <span className='error'>
                                                                {item.error}
                                                            </span>
                                                }
                                            </div>
                                        })
                                    }
                                </div>
                                <h5 className='formGroupTitle'>Adresse de facturation</h5>
                                <div className='addressDataInput col-12 p-0'>
                                    {
                                        addressInput.map(item => {
                                            return <div className='addressInput col-12 p-0' key={item.id}>
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
                                                {
                                                    errors.addressInput && <span className='error'>
                                                                {item.error}
                                                            </span>
                                                }
                                            </div>
                                        })
                                    }
                                    {
                                        addressInput2.map(item => {
                                            return <div className='PDInput col-6 p-0' key={item.id}>
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
                                                {
                                                    errors.addressInput2 && <span className='error'>
                                                                {item.error}
                                                            </span>
                                                }
                                            </div>
                                        })
                                    }
                                </div>
                                <div className='btnWrapper col-12 p-0'>
                                    <button className='submit'>valider</button>
                                </div>
                            </form>
                        </div>
                        :
                        <CompletedForm />
                }
            </section>
        </>
    );
};

export default SubscribeForm;