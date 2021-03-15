import React, {useState} from 'react';
import trainingPages from './json/trainings.json';
import {
    Route,
    NavLink,
    useRouteMatch
} from 'react-router-dom';
import TrainingGroup from './TrainingGroup';

const Trainings = () => {
    const { path, url } = useRouteMatch();
    const [defaultPage, setDefaultPage] = useState(true);

    const handleChangeDefaultPage = () => {
        setDefaultPage(false)
    }

    return (
        <section className='trainings'>
            <h1 className='title'>parcourir nos formations</h1>
            <nav className='trainingsNav'>
                {
                    trainingPages.map(({ name, item, id }) => {
                        return <NavLink
                            key={item}
                            className={id === 1 && defaultPage
                                ? 'navLink active' : 'navLink'}
                            activeClassName='active'
                            to={`${url}/${item}`}
                            onClick={id === 1
                                ? () => setDefaultPage(true)
                                : () => setDefaultPage(false)
                            }
                        >
                            {name}
                        </NavLink>
                    })
                }
            </nav>
            <hr className='col-12 p-0 m-0' id='line' />

            { defaultPage ?
                <Route exact path={url} render={() =>
                    <TrainingGroup changeDefaultPage={handleChangeDefaultPage} />}/>
                : <></>
            }
            <Route path={`${path}/:trainingsId`}>
                <TrainingGroup changeDefaultPage={handleChangeDefaultPage} />
            </Route>
        </section>
    );
};

export default Trainings;