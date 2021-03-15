import React, { useState, useEffect } from 'react';
import data from './json/videos.json';
import { motion, AnimatePresence } from 'framer-motion';
import FilterVideos from './FilterVideos';

const VideosSection = () => {
    const [items, setItems] = useState([]);
    const [visible, setVisible] = useState(4);

    useEffect(() => {
        setItems(data);
    }, [])

    const showMoreVideos = () => {
        setVisible((preValue) => preValue + 4);
    }

    const cardVariants = {
        hidden: {
            scale: 0,
            opacity: 0
        },
        visible: (id) => ({
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.3,
                delay: id * 0.03
            }
        })
    }

    const handleSort = (sortType) => {
        switch (sortType) {
            case "":
                setItems(data);
                break;
            case "alphabet":
                const sortedItemsByAZ = data.slice().sort((a, b) => {
                    const titleA = a.title.substring(0, 5),
                        titleB = b.title.substring(0, 5);

                    if(titleA < titleB) { return -1; }
                    if(titleA > titleB) { return 1; }
                    return 0;
                });
                setItems(sortedItemsByAZ);
                break;
            case "date":
                const sortedItemsByDate = data.slice().sort((a, b) =>
                    new Date(b.date) - new Date(a.date));
                setItems(sortedItemsByDate);
                break;
            default:
        }
    }

    const handleSearch = (query) => {
        const filteredItems = data.filter(f => f.title.toLowerCase().includes(query.toLowerCase()));
        setItems(filteredItems);
    }

    return (
        <section className='videosSection'>
            <h1 className='title'>toutes nos vidéos</h1>
            <div className='col-12 p-0 resultsBox'>
                <p className='totalVideos'>568 résultats</p>
            </div>
            <hr className='col-12 p-0 m-0' />

            <FilterVideos
                sort={handleSort}
                search={handleSearch}
            />

            <div className='col-12 p-0 cardsContainer'>
                <AnimatePresence>
                    {
                        items.slice(0, visible).map((element, id) => {
                            return <motion.div
                                className='col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 cardWrapper'
                                key={id}
                                variants={cardVariants}
                                initial='hidden'
                                animate='visible'
                                custom={id}
                            >
                                <div className='imageWrapper'>
                                    <img className='logoIcon' src='/assets/w.png' alt='W' />
                                    <img className='image mt-5' src={element.image} alt='' />
                                    <span className='timer'>{element.duration}</span>
                                </div>
                                <div className='elementsWrapper'>
                                    <span className='date'>{element.date}</span>
                                    <h6 className='cardTitle'>{element.title}</h6>
                                    <div className='buttonsContainer'>
                                        {
                                            element.more.map((item, key) => {
                                                return <span className='keyWords' key={key}>
                                                    {item}
                                                </span>
                                            })
                                        }
                                    </div>
                                </div>
                            </motion.div>
                        })
                    }
                </AnimatePresence>
            </div>
            <div className='loadMoreBox col-12 p-0'>
                <button className='lazyLoadButton' onClick={showMoreVideos}>
                    afficher plus de résultats
                </button>
            </div>
        </section>
    );
};

export default VideosSection;