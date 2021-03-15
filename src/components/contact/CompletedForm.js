import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CompletedForm = () => {
    
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
        <div className='feedbackSection col-12 col-sm-12 col-md-11 col-lg-10 col-xl-10 p-0'>
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
        </div>
    );
};

export default CompletedForm;