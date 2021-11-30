import React from 'react';
import HomeServices from '../../Pages/HomeServices/HomeServices';
import Banner from '../Banner/Banner';
import Faq from '../FAQ/Faq';
import PublishedBook from '../publishedBook/PublishedBook';
import SuccessHistory from '../SuccessHistory/SuccessHistory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeServices></HomeServices>
            <SuccessHistory></SuccessHistory>
            <PublishedBook></PublishedBook>
        </div>
    );
};

export default Home;