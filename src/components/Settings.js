// "Settings" route of Paperless-app, where you connect to Dropbox

import React, { Component } from "react";
import { Dropbox } from "dropbox";
import Button from "@material-ui/core/Button";

const PaperlessDropboxClientId = "x6uynxuh9hbxwjt";
const PaperlessDropboxAuthRedirect = "http://localhost:3000/";

export class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authUser: ""
        };
    }

    handleAuthClick = () => {
        let dbx = new Dropbox({ clientId: PaperlessDropboxClientId });
        console.log(dbx.getAuthenticationUrl(PaperlessDropboxAuthRedirect));
        // TODO: I'm supposed to pass in a state= string to prevent certain CSRF forgery attacks
        window.location = dbx.getAuthenticationUrl(
            PaperlessDropboxAuthRedirect
        );
    };

    handleDeauthClick = () => {
        this.props.updateDropboxState("", "Not connected");
        this.setState({ authUser: "" });
    };

    componentDidMount() {
        if (this.props.dropboxAccessToken !== "") {
            let dbx = new Dropbox({
                accessToken: this.props.dropboxAccessToken
            });
            dbx.usersGetCurrentAccount().then(res => {
                this.setState({ authUser: res.email });
                this.props.updateDropboxState(
                    this.props.dropboxAccessToken,
                    "Connected as " + res.email
                );
            });
        }
    }

    render() {
        return (
            <div>
                <h2>Settings</h2>
                <div>
                    {this.state.authUser === "" ? (
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={this.handleAuthClick}
                        >
                            Connect to Dropbox...
                        </Button>
                    ) : (
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={this.handleDeauthClick}
                        >
                            Disconnect from Dropbox
                        </Button>
                    )}
                </div>
                <div>
                    <strong>Dropbox Status: </strong>
                    {this.props.dropboxAccessStatus}
                </div>
            </div>
        );
    }
}
