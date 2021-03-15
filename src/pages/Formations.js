import React, { useState, useEffect } from 'react';
import '../styling/Formations.scss';
import '../styling/responsiveness/RespFormations.scss';
import trainingTypes from '../components/formations/json/trainingTypes.json';
import { FiChevronLeft } from 'react-icons/fi';
import {
    Route,
    NavLink,
    useRouteMatch,
    useParams, Link
} from 'react-router-dom';
import TrainingText from '../components/formations/TrainingText';
import AdditionalCards from '../components/formations/AdditionalCards';
import trainings from "../components/community/json/trainings.json";

///
/// Ketu eshte faqja e trajnimeve e cila i merr te dhenat nga JSON i vecante.
/// Komponenta e pare perfshine The Header me elementet e saj statike dhe NavBarin e grupeve te trajnimeve
/// Komponenta e dyte i perfshine te gjitha trajnimet te ndara vec e vec.
/// Tek komponenta e dyte permes React-Router lidhet faqja TrainingText.js e cila e permban kontentin.
///

const Formations = () => {
    const { path, url } = useRouteMatch();
    const [defaultPage, setDefaultPage] = useState(true);
    const [headerImage, setHeaderImage] = useState('/winbiz/assets/coverTraining1.webp');

    const handleChangeDefaultPage = () => {
        setDefaultPage(false)
    }

    const handleSetHeaderImage = (imagePath) => {
        setHeaderImage(imagePath);
    }

    return (
        <>
            <div className='groupTrainings'>
                <header className='groupTrainingsHeader'>
                    <button className='backBtn'>
                        <a href='/community/entrepreneur' className='link'>
                            <FiChevronLeft />retour à la communauté
                        </a>
                    </button>
                    <div className='headingsContainer'>
                        <h1 className='title'>nos formations</h1>
                        <h5 className='subTitle'>Parcourez les différentes formations que nous mettons à votre disposition.</h5>
                    </div>
                    <nav className='trainingsNav container p-0'>
                        {
                            trainingTypes.map(({ name, item, id }) => (
                                <NavLink
                                    to={`${url}/${item}`}
                                    className={id === 1 && defaultPage
                                        ? 'navLink active' : 'navLink'}
                                    activeClassName='active'
                                    key={item}
                                    onClick={id === 1
                                        ? () => setDefaultPage(true)
                                        : () => setDefaultPage(false)
                                    }
                                >
                                    {name}
                                </NavLink>
                            ))
                        }
                    </nav>
                    <img src={headerImage} className='cover' alt='cover' />
                </header>

                <Route exact path={url} render={() =>
                    <Formation
                        changeDefaultPage={handleChangeDefaultPage}
                        changeHeaderImage={handleSetHeaderImage}
                    />}/>
                <Route path={`${path}/:trainingId`}>
                    <Formation
                        changeDefaultPage={handleChangeDefaultPage}
                        changeHeaderImage={handleSetHeaderImage}
                    />
                </Route>
                <AdditionalCards />
            </div>
        </>
    );
};

export const Formation = (props) => {
    const { trainingId } = useParams();
    const { path, url } = useRouteMatch();
    const [groupTrainings, setGroupTrainings] = useState({});
    const [childActivePage, setChildActivePage] = useState(1)

    useEffect(() => {
        const trainingType = trainingTypes?.find(t => t.item === trainingId);
        setGroupTrainings(trainingType);

        if (trainingId) {
            props.changeDefaultPage(true);
        }

        const training = trainings.find(t => t.item === trainingId);
        const content = training.group.find(c =>
            c.url.includes(window.location.href.substring(40)));
        if (content)
            setChildActivePage(content.id)

        handleSetHeaderImage()
    }, [trainingId, props]); // eslint-disable-line react-hooks/exhaustive-deps

    const handleSetHeaderImage = (title) => {
        let content;
        if (groupTrainings !== null)
            content = trainingTypes[0].group.find(c => title ? c.title === title : c.id === 1);
        else
            content = trainingTypes.group.find(c => title ? c.title === title : c.id === 1);
        if (content)
            props.changeHeaderImage(content.cover);
    }

    const handleSetChildActivePage = (id) => {
        setChildActivePage(id);
    }

    return (
        <div className='trainingType'>
            <div className='buttonsContainer container p-0'>
                {
                    groupTrainings?.group?.map(({ title, id }) => (
                        <NavLink
                            to={`${url}/${title}`}
                            className={childActivePage === id
                                ? 'training activeTraining' : 'training'}
                            activeClassName='activeTraining'
                            key={title}
                            onClick={() => {
                                handleSetChildActivePage(id)
                                handleSetHeaderImage(title)
                            }}
                        >
                            {title}
                        </NavLink>
                    ))
                }
            </div>

            <Route exact path={url} render={() =>
                <TrainingText
                    trainingId={trainingId}
                    changeChildHeaderImage={handleSetHeaderImage}
                    changeActivePage={handleSetChildActivePage}
                />}
            />

            <Route path={`${path}/:contentId`}>
                <TrainingText
                    trainingId={trainingId}
                    changeChildHeaderImage={handleSetHeaderImage}
                    changeActivePage={handleSetChildActivePage}
                />
            </Route>

            <div className='subscriptionSection col-10 p-0'>
                <hr className='col-12 p-0 m-0' />
                <h6 className='question'>Vous souhaitez participer à cette formation ?</h6>
                <Link to={'/subscribe'} className='subscribe'>s’inscrire</Link>
                <hr className='col-12 p-0 m-0' />
            </div>
        </div>
    );
};

export default Formations;