// "Settings" route of Paperless-app

import React, { Component } from 'react';
import { PetersDropboxAccessToken } from '../util/PrivateToken';

export class Settings extends Component {

    componentDidMount() {       
        console.log('In Settings DidMount ' + this.props.dropboxAccessToken);
        this.props.updateDropboxAccessToken( PetersDropboxAccessToken );
    }

    // TODO: Handle having zero lists
    render() {
        return (
        <div>
            <h2>
                Settings
            </h2>
            <div>Dropbox Connection:</div>
            { (this.props.dropboxAccessToken === '') ?
                <div>Not connected</div> :
                <div>Connected as peter</div>
            }
        </div>
    )}
}
