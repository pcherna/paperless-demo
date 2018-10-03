import React, { Component } from "react";
import Header from "./Header";
import Main from "./Main";
import "../stylesheets/css/App.css";

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropboxAccessToken: "",
            dropboxAccessStatus: "Not connected"
        };
    }
    // Callback to let child components update my state
    updateDropboxState = (token, status) =>
        this.setState({
            dropboxAccessToken: token,
            dropboxAccessStatus: status
        });

    render() {
        return (
            <div className="app">
                <Header />
                <Main
                    dropboxAccessToken={this.state.dropboxAccessToken}
                    dropboxAccessStatus={this.state.dropboxAccessStatus}
                    updateDropboxState={this.updateDropboxState}
                />
            </div>
        );
    }
}
