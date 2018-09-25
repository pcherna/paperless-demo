// "Settings" route of Paperless-app

import React, { Component } from 'react';
import { PetersDropboxAccessToken } from '../util/PrivateToken';

export class Settings extends Component {

    constructor(props) {
        super(props);
        this.state = {
            foo: [],
            dropboxAccessToken: '',
        }
    }

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
            <ul>
                {this.state.foo.map((item, i) =>
                    <li key={i}>Dropbox list: {item._text}</li>
                )}
            </ul>
        </div>
    )}
}
