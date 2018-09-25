// "Checklist" route of Paperless-app

import xmljs from 'xml-js';
import React, { Component } from 'react';
import { Dropbox } from 'dropbox';
import { readAsText } from '../util/FileReader'
import ChecklistItem from './ChecklistItem'

export class Checklist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            url: '',
            listName: '',
            listIconName: '',
            listItems: []
        }
    }

    componentDidMount() {       
        console.log('Loading list', this.props.match.params.listIdentifier + '.xml');
        console.log( 'dropboxAccessToken is found to be ', this.props.dropboxAccessToken );
        // TODO: Handle failure to load XML
        var dbx = new Dropbox({ accessToken: this.props.dropboxAccessToken });
        dbx.filesDownload({path: '/apps/paperless/'+this.props.match.params.listIdentifier + '.xml'})
            .then(response => readAsText(response.fileBlob))   
            .then(xmltext => xmljs.xml2json(xmltext, {compact: true, spaces: 4}))
            .then(jsondata => JSON.parse(jsondata))
            .then(json => json.list)
            .then(list => {
                this.setState({
                    listName: list.listName,
                    listItems: list.item
                });
            })
    }

    render() {
        return (
        <div>
            <h2>
                {this.state.listName._text}
            </h2>
            <ul>
                {(typeof this.state.listItems !== "undefined") ?
                    this.state.listItems.map((item, i) =>
                        <ChecklistItem key={i}
                            {...item}/>
                    )
                    : <em>(No items)</em> }
            </ul>
        </div>
    )}
}
