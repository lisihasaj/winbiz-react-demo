import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import data from './json/additionalCards.json';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CompletedForm = () => {
    const additionalCards = data.formPage;
    const variants = {
        hidden: {
            opacity: 0,
            scale: 0
        },
        visible: {
            opacity: 1,
            scale: 1
        }
    };

    return (
        <div className='feedbackSection col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10 p-0'>
            <motion.div
                className='messageBox'
                variants={variants}
                initial='hidden'
                animate='visible'
                transition= {{
                    duration: 0.5,
                    delay: 0.3,
                    type: 'spring'
                }}
            >
                <h3 className='messageTitle'>
                    votre inscription a bien été prise en compte.
                </h3>
                <h5 className='messageSubTitle'>
                    Une confirmation d’inscription vous a été envoyée à l’adresse mail indiquée.
                </h5>
                <Link to='/' className='backToHome'>
                    <FiChevronRight />{' '}retour à la page d’accueil
                </Link>
            </motion.div>
            <hr className='col-12 p-0 m-0' />
            <div className='additionals col-12 p-0'>
                <h5 className='additionalsTitle'>Ces formations pourraient aussi vous intéresser:</h5>
                <div className='cardsContainer'>
                    {
                        additionalCards.map((element, key) => {
                            return <motion.div
                                className='col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 p-0 imageContainer'
                                key={key}
                                variants={variants}
                                initial='hidden'
                                animate='visible'
                                transition= {{
                                    duration: 0.5,
                                    delay: 0.5,
                                    type: 'spring'
                                }}
                            >
                                <a href={element.url} className='route'>
                                    <div className='imageWrapper'>
                                        <div className='titleWrapper'>
                                            <h5 className='trainingTitle'>{element.title}</h5>
                                            <p className='subtitle'>{element.subtitle}</p>
                                        </div>
                                        <div className='gradientLayer' />
                                        <img src={element.image} alt='' className='trainingImage' />
                                    </div>
                                </a>
                            </motion.div>
                        })
                    }
                </div>
                <div className='buttonWrapper col-12 p-0'>
                    <Link
                        to='/formations/entrepreneur/comptabilité'
                        className='backToTrainings'
                    >
                        <FiChevronRight />voir toutes les formations disponibles
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CompletedForm;