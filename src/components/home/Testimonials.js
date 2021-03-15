import React, { useState } from 'react';
import content from './json/testimonials.json';
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { wrap } from '@popmotion/popcorn';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
    const [[page, direction], setPage] = useState([0, 0]);
    const [activeSlider, setActiveSlider] = useState(0);

    const textIndex = wrap(0, content.length, page);
    const paginate = newDirection => {
        if (page + newDirection < content.length && page + newDirection >= 0) {
            setPage([page + newDirection, newDirection]);
            setActiveSlider(page + newDirection);
        } else if (page + newDirection === content.length) {
            setPage([0, 0]);
            setActiveSlider(0);
        } else if (page + newDirection === -1) {
            setPage([content.length - 1, newDirection]);
            setActiveSlider(content.length - 1);
        }
    };

    const sliderVariants = {
        hidden: (direction) => {
            return {
                opacity: 0
            };
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                opacity: {
                    duration: 0.5,
                    type: "spring",
                    stiffness: 400,
                    damping: 300,
                    delay: 0.5
                }
            }
        },
        exit: (direction) => {
            return {
                opacity: 0
            };
        }
    };

    return (
        <section className='testimonials'>
            <div className='halfScreenGradience' />
            <div className='contentWrapper'>
                <div className='col-12 col-sm-12 col-md-10 col-lg-6 col-xl-6 p-0 sliderContainer'>
                    <div className='leftWrapper'>
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                className='slider'
                                key={page}
                                custom={direction}
                                variants={sliderVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                dragElastic={1}
                                >
                                <h1 className='content'>
                                    {
                                        content[textIndex].name
                                    }
                                </h1>
                                <h6 className='title'>
                                    {
                                        content[textIndex].title
                                    }
                                </h6>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    <div className='pagination'>
                        <button
                            className='arrowLeft'
                            onClick={() => paginate(-1)}
                        >
                            <FiChevronLeft />
                        </button>
                        <div className='pages'>
                            {
                                content.map(item => {
                                    return <span key={item.id}
                                        className={item.id === activeSlider
                                            ? 'page pageActive'
                                            : 'page'}
                                    />
                                })
                            }
                        </div>
                        <button
                            className='arrowRight'
                            onClick={() => paginate(1)}
                        >
                            <FiChevronRight />
                        </button>
                    </div>
                </div>
                <div className='col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 p-0 rightSlider'>
                    <div className='rightWrapper'>
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                className='slider'
                                key={page}
                                custom={direction}
                                variants={sliderVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                dragElastic={1}
                            >
                                <h4 className='statement'>
                                    {
                                        content[textIndex].statement
                                    }
                                </h4>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;