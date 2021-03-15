import React from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

const ScrollAnimation = () => {
    
    const arrayVariants = {
        animate: {
            y: [-10, 10],
            transition: {
                y: {
                    yoyo: Infinity,
                    duration: 0.5,
                    ease: 'easeIn'
                }
            }
        }
    };

    return (
        <>
            <h6 className='scroll'>scroll down</h6>
            <motion.span
                variants={arrayVariants}
                animate='animate'
                >
                <FiChevronDown className='arrow' />
            </motion.span>
        </>
    );
};

export default ScrollAnimation;