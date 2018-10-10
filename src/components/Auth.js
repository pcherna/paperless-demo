// When the user allows Dropbox OAuth, Dropbox redirects to http://./#/access_token=...
// This component handles that route by extracting the access_token, then redirecting to /settings

import React, { Component } from "react";
import queryString from "query-string";

// Dropbox OAuth redirects to this component
export class Auth extends Component {
    componentDidMount() {
        // Pathname is "/access_token=...&token_type=...&..."
        // Make it parseable by starting with ? instead of /
        const values = queryString.parse(
            "?" + this.props.location.pathname.substr(1)
        );
        if (values.access_token !== undefined) {
            this.props.updateDropboxState(values.access_token, "Connecting...");
        }
        if (values.error_description !== undefined) {
            this.props.updateDropboxState("", values.error_description);
        }
        // Redirect back to Settings
        window.location = "http://localhost:3000/#/settings";
    }

    render() {
        return <div />;
    }
}
