import React, { Component } from "react";
import Header from "./Header";
import Main from "./Main";
import "../stylesheets/css/App.css";

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropboxAccessToken: ""
        };
    }
    // Callback to let child components update my state
    updateDropboxAccessToken = value =>
        this.setState({ dropboxAccessToken: value });

    render() {
        return (
            <div class="app">
                <Header />
                <Main
                    dropboxAccessToken={this.state.dropboxAccessToken}
                    updateDropboxAccessToken={this.updateDropboxAccessToken}
                />
            </div>
        );
    }
}
