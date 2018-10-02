// "Checklist" route of Paperless-app, show a single checklist

import xmljs from "xml-js";
import React, { Component } from "react";
import { Dropbox } from "dropbox";
import { readAsText } from "../util/FileReader";
import ChecklistItem from "./ChecklistItem";

export class Checklist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listName: "",
            // listIconName: "",
            loading: true,
            listItems: []
        };
    }
    componentWillMount() {
        this.dbx = new Dropbox({ accessToken: this.props.dropboxAccessToken });
    }

    componentDidMount() {
        console.log(
            "Loading list",
            this.props.match.params.listIdentifier + ".xml"
        );
        this.setState({ listName: this.props.match.params.listIdentifier });

        this.loadChecklist();
        // Set up a poller to check if the list updates on Dropbox:
        this.pollingInterval = setInterval(
            () => this.checkUpdateChecklist(),
            1000
        );
    }

    componentWillUnmount() {
        if (this.pollingInterval) {
            clearInterval(this.pollingInterval);
        }
    }

    // Load checklist from Dropbox
    loadChecklist() {
        // TODO: Handle failure to load XML
        this.dbx
            .filesDownload({
                path:
                    "/apps/paperless/" +
                    this.props.match.params.listIdentifier +
                    ".xml"
            })
            .then(response => {
                this.setState({ listRev: response.rev });
                return readAsText(response.fileBlob);
            })
            .then(xmltext =>
                xmljs.xml2json(xmltext, { compact: true, spaces: 4 })
            )
            .then(jsondata => JSON.parse(jsondata))
            .then(json => json.list)
            .then(list => {
                this.setState({
                    listName: list.listName._text,
                    listItems:
                        typeof list.item !== "undefined"
                            ? Array.isArray(list.item)
                                ? list.item
                                : [list.item]
                            : [],
                    loading: false
                });
            });
    }

    // Check Dropbox file-revision of checklist, and if changed, reload it
    checkUpdateChecklist() {
        console.log("Checking Dropbox for list-updates...");
        this.dbx
            .filesGetMetadata({
                path:
                    "/apps/paperless/" +
                    this.props.match.params.listIdentifier +
                    ".xml"
            })
            .then(response => {
                if (response.rev !== this.state.listRev) {
                    console.log("Reloading list...");
                    this.loadChecklist();
                }
            });
    }

    // render all unchecked items, followed by the completed ones
    renderGroupedList() {
        return (
            <div>
                <div>
                    {this.state.listItems
                        .filter(item => item.itemCompleted._text === "NO")
                        .map((item, i) => (
                            <ChecklistItem key={i} {...item} />
                        ))}
                </div>
                {this.state.listItems.filter(
                    item => item.itemCompleted._text !== "NO"
                ).length > 0 ? (
                    <h3>Completed</h3>
                ) : null}
                <div>
                    {this.state.listItems
                        .filter(item => item.itemCompleted._text !== "NO")
                        .map((item, i) => (
                            <ChecklistItem key={i} {...item} />
                        ))}
                </div>
            </div>
        );
    }

    // Render checklist, showing items to be done and total items,
    // and handling cases of still loading, and empty list
    render() {
        return (
            <div>
                <h2>
                    {this.state.listName}
                    {this.state.listItems.length > 0 ? (
                        <span>
                            {" "}
                            (
                            {
                                this.state.listItems.filter(
                                    item => item.itemCompleted._text !== "NO"
                                ).length
                            }{" "}
                            / {this.state.listItems.length})
                        </span>
                    ) : null}
                </h2>
                <ul>
                    {this.state.loading ? (
                        <div>Loading...</div>
                    ) : typeof this.state.listItems !== "undefined" ? (
                        this.renderGroupedList()
                    ) : (
                        <em>(No items)</em>
                    )}
                </ul>
            </div>
        );
    }
}
