import React  from 'react';
import '../styling/Community.scss';
import '../styling/responsiveness/RespCommunity.scss';
import Header from '../components/community/Header';
import MediaSection from '../components/community/MediaSection';
import Trainings from '../components/community/Trainings';
import VideosSection from '../components/community/VideosSection';

const CommunityPage = () => {

    return (
        <>
            <div className='community'>
                <Header />
                <MediaSection />
                <Trainings />
                <VideosSection />
            </div>
        </>
    );
};

export default CommunityPage;