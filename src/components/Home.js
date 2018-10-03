// "Home" route of Paperless-app

import React from "react";
import { TopList } from "./TopList";

const Home = ({ dropboxAccessToken, updateDropboxState }) => (
    <div>
        <TopList
            dropboxAccessToken={dropboxAccessToken}
            updateDropboxState={updateDropboxState}
        />
    </div>
);

export default Home;
