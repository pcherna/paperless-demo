// "Settings" route of Paperless-app, where you connect to Dropbox

import React, { Component } from "react";
import { Delay } from "../util/Delay";

// PrivateToken.js contains
//     export const PetersDropboxAccessToken = '<Dropbox dev-token>';
// and is not committed to git
import { PetersDropboxAccessToken } from "../util/PrivateToken";

export class Settings extends Component {
    componentDidMount() {
        console.log("In Settings DidMount " + this.props.dropboxAccessToken);
        // Delay is just to simulate that true OAuth authentication is not instantaneous
        Delay(500).then(() =>
            this.props.updateDropboxAccessToken(PetersDropboxAccessToken)
        );
    }

    render() {
        return (
            <div>
                <h2>Settings</h2>
                <div>
                    <strong>Dropbox Connection: </strong>
                    {this.props.dropboxAccessToken === "" ? (
                        <span>Not connected</span>
                    ) : (
                        <span>Connected as peter</span>
                    )}
                </div>
            </div>
        );
    }
}
