import React, { Component } from "react";
import Header from "./Header";
import Main from "./Main";
import NavBar from "./NavBar";
import "../stylesheets/css/App.css";
import { CssBaseline } from "@material-ui/core";

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import lightGreen from "@material-ui/core/colors/lightGreen";
import indigo from "@material-ui/core/colors/indigo";

const theme = createMuiTheme({
    palette: {
        primary: lightGreen,
        secondary: indigo
    }
});

export class App extends Component {
    constructor(props) {
        let dAT = localStorage.getItem("dropboxAccessToken");
        if (dAT === null) {
            dAT = "";
        }
        super(props);
        this.state = {
            dropboxAccessToken: dAT,
            dropboxAccessStatus: "Not connected"
        };
    }
    // Callback to let child components update my state
    updateDropboxState = (token, status) => {
        this.setState({
            dropboxAccessToken: token,
            dropboxAccessStatus: status
        });
        localStorage.setItem("dropboxAccessToken", token);
    };

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <React.Fragment>
                    <CssBaseline />
                    <div className="app">
                        <NavBar />
                        <Main
                            dropboxAccessToken={this.state.dropboxAccessToken}
                            dropboxAccessStatus={this.state.dropboxAccessStatus}
                            updateDropboxState={this.updateDropboxState}
                        />
                        <Header />
                    </div>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}
