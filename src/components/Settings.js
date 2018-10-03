// "Settings" route of Paperless-app, where you connect to Dropbox

import React, { Component } from "react";
import { Dropbox } from "dropbox";

const PaperlessDropboxClientId = "x6uynxuh9hbxwjt";
const PaperlessDropboxAuthRedirect = "http://localhost:3000/";

export class Settings extends Component {
    handleAuthClick = () => {
        let dbx = new Dropbox({ clientId: PaperlessDropboxClientId });
        console.log(dbx.getAuthenticationUrl(PaperlessDropboxAuthRedirect));
        // TODO: I'm supposed to pass in a state= string to prevent certain CSRF forgery attacks
        window.location = dbx.getAuthenticationUrl(
            PaperlessDropboxAuthRedirect
        );
    };

    render() {
        return (
            <div>
                <h2>Settings</h2>
                <div>
                    <button onClick={this.handleAuthClick}>
                        Connect to Dropbox...
                    </button>
                </div>
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
