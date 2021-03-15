import React, { useState, useEffect } from 'react';
import trainingTypes from './json/trainingTypes.json';
import {Route, useParams, useRouteMatch} from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

const TrainingText = (props) => {
    const {contentId} = useParams();
    const {url} = useRouteMatch();
    const [content, setContent] = useState({});
    const defaultChildContent = trainingTypes
        .find(t => t.item === props.trainingId).group[0];

    useEffect(() => {
        window.scrollTo(0, 0);

        const trainingType = trainingTypes?.find(t => t.item === props.trainingId)
        let trainingText;
        if (contentId) {
            trainingText = trainingType?.group?.find(t =>
                t.title === contentId.toString());
        }
        setContent(trainingText);

        props.changeChildHeaderImage(contentId);
    }, [contentId, props]);

    const bodyText = (json = content) => {
        return <>{json && json.text1 ?
            <div className='textContainer container p-0'>
                <div className='wrapper col-11 p-0'>
                    <p className='text'>{json.text1}</p>
                    <h2 className='title'>{json.title1}</h2>
                    <p className='justText'>{json.text2}</p>
                    <p className='text'>{json.text3}</p>
                    <h2 className='title'>{json.title2}</h2>
                    <ul className='courseElements'>
                        {json.list ? json.list.map((item, key) => {
                                return <li className='element' key={key}>
                                    <FiChevronRight className='arrow'/>{item}
                                </li>
                            })
                            : <></>
                        }
                    </ul>
                    <h2 className='title'>{json.title3}</h2>
                    <p className='text'>{json.text4}</p>
                </div>
            </div>
            : <></>
        }
        </>
    }

    return (
        <>
            {bodyText()}

            {
                defaultChildContent.id === 1 && !content?.text1 ?
                    <Route exact path={url} render={() => bodyText(defaultChildContent)}/>
                    : <></>
            }
        </>
    );
}

export default TrainingText;