// "TopList" route of Paperless-app, the list-of-lists

import xmljs from "xml-js";
import React, { Component } from "react";
import { Dropbox } from "dropbox";
import { readAsText } from "../util/FileReader";
import TopListItem from "./TopListItem";

export class TopList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            topListArray: []
        };
    }

    componentWillMount() {
        this.dbx = new Dropbox({ accessToken: this.props.dropboxAccessToken });
    }

    componentDidMount() {
        console.log("Loading list from Dropbox", "index.plist");
        // TODO: Handle failure to load XML
        console.log(
            "dropboxAccessToken is found to be ",
            this.props.dropboxAccessToken
        );
        if (this.props.dropboxAccessToken !== "") {
            this.loadTopList();
            // Set up a poller to check if the list updates on Dropbox:
            this.pollingInterval = setInterval(
                () => this.checkUpdateTopList(),
                1000
            );
        }
    }

    componentWillUnmount() {
        if (this.pollingInterval) {
            clearInterval(this.pollingInterval);
        }
    }

    // Load top list from Dropbox:
    loadTopList() {
        // TODO: Handle failure to load XML
        this.dbx
            .filesDownload({ path: "/apps/paperless/index.plist" })
            .then(response => {
                this.setState({ listRev: response.rev });
                return readAsText(response.fileBlob);
            })
            .then(xmltext =>
                xmljs.xml2json(xmltext, { compact: true, spaces: 4 })
            )
            .then(jsondata => JSON.parse(jsondata))
            .then(jsondata => jsondata.plist.array.string)
            //            .then(dump => { console.log(dump); return(dump); })
            .then(list => {
                this.setState({
                    topListArray: list,
                    loading: false
                });
                console.log(
                    "Found: " +
                        this.state.topListArray.length +
                        " lists on Dropbox"
                );
            });
    }

    // Check Dropbox file-revision of top list, and if changed, reload it
    checkUpdateTopList() {
        console.log("Checking Dropbox for list-updates...");
        this.dbx
            .filesGetMetadata({ path: "/apps/paperless/index.plist" })
            .then(response => {
                if (response.rev !== this.state.listRev) {
                    console.log("Reloading list...");
                    this.loadTopList();
                }
            });
    }

    // TODO: Handle having zero lists
    render() {
        return (
            <div>
                <h2>My Paperless Lists</h2>
                <ul>
                    {this.props.dropboxAccessToken === "" ? (
                        <div>
                            Use <em>Settings</em> to connect to Dropbox...
                        </div>
                    ) : this.state.loading ? (
                        <div>Loading...</div>
                    ) : (
                        this.state.topListArray.map((item, i) => (
                            <TopListItem key={i} {...item} />
                        ))
                    )}
                </ul>
            </div>
        );
    }
}
