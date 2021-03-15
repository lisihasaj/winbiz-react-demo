import React, {useState, useEffect} from 'react';
import trainings from './json/trainings.json';
import {Link, useParams} from 'react-router-dom';

const TrainingGroup = ({changeDefaultPage}) => {
    const { trainingsId } = useParams();
    const [groupTrainings, setGroupTrainings] = useState({});

    useEffect(() => {
        let training = trainings?.find(t => t.id === 1);
        if (trainingsId) {
            training = trainings?.find(t => t.item === trainingsId);
            changeDefaultPage();
        }

        setGroupTrainings(training);
    }, [trainingsId, changeDefaultPage]);

    return (
        <div className='trainingGroupContainer col-12 p-0'>
            {
                groupTrainings?.group?.map(({image, title, url}) => (
                    <div className='col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 p-0 imageContainer' key={title}>
                        <Link to={url} className='route'>
                            <div className='imageWrapper'>
                                <h6 className='trainingTitle'>{title}</h6>
                                <div className='gradientLayer' />
                                <img src={image} alt='' className='trainingImage' />
                            </div>
                        </Link>
                    </div>
                ))
            }
        </div>
    );
};

export default TrainingGroup;