import React, { Component } from 'react';
import '../styling/Contact.scss';
import '../styling/responsiveness/RespContact.scss';
import ContactForm from '../components/contact/ContactForm';
import Etape1 from '../components/contact/Etape1';
import Etape2 from '../components/contact/Etape2';
import Etape3 from '../components/contact/Etape3';
import CompletedForm from '../components/contact/CompletedForm';


class ContactPage extends Component {
    state = {
        etape1: -1,
        etape2: -1,
        etape3: -1,
        hideEtape2: true,
        hideEtape3: true,
        hideForm: true,
        form: '',
        message: false
    };

    setMessage = () => {
        this.setState({
            ...this.state,
            message: true
        });
    };

    handleClickEtape1 = (id) => {
        this.setState({
            ...this.state,
            etape1: id,
            hideEtape2: false
        })
    }

    handleClickEtape2 = (id) => {
        this.setState({
            ...this.state,
            etape2: id,
            hideEtape3: false
        })
    }
    handleClickEtape3 = (id) => {
        this.setState({
            ...this.state,
            etape3: id,
            hideForm: false
        })
    }

    //Change Nav items color
    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.setNavItems(true)
    };
    componentWillUnmount() {
        this.props.setNavItems(false)
    };
    
    render() {
        return (
            <div className='contact'>
                <header className='contactHeader'>
                    <div className='headingsContainer'>
                        <h1 className='title'>Contact</h1>
                        <h5 className='subTitle'>Nous sommes toujours disponibles, peu importe votre demande.</h5>
                    </div>
                </header>
                <div className='mainWrapper col-12 col-sm-12 col-md-10 col-lg-7 col-xl-7'>
                    {
                        !this.state.message ?
                        <>
                            <Etape1
                                setEtape1={this.handleClickEtape1}
                                selected={this.state.etape1}
                            />
                            <hr className='col-12 p-0 m-0' />
                           
                            {
                                this.state.hideEtape2
                                ? <></>
                                : <>
                                    <Etape2
                                        setEtape2={this.handleClickEtape2}
                                        selected={this.state.etape2}
                                    />
                                    <hr className='col-12 p-0 m-0' />
                                </>
                            }
                           
                            {
                                this.state.hideEtape3
                                ? <></>
                                : <Etape3
                                        setEtape3={this.handleClickEtape3}
                                        selected={this.state.etape3}
                                    />
                            }
                           
                            {
                                this.state.hideForm
                                ? <></>
                                : <>
                                    <ContactForm setMessage={this.setMessage} />
                                </>
                            }
                        </>
                        : <CompletedForm />
                    }
                </div>
            </div>
        );
    };
};

export default ContactPage;