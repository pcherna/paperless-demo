// "Home" route of Paperless-app

import React from 'react';
import { TopList } from './TopList'

const Home = ({dropboxAccessToken, updateDropboxAccessToken}) => (
    <div>
        <TopList dropboxAccessToken={dropboxAccessToken} updateDropboxAccessToken={updateDropboxAccessToken}/>
    </div>
)

export default Home;
