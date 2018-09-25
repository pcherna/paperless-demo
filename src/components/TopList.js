// "TopList" route of Paperless-app

import xmljs from 'xml-js';
import React, { Component } from 'react';
import { Dropbox } from 'dropbox';
import { readAsText } from '../util/FileReader'
import TopListItem from './TopListItem'

export class TopList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            topListArray: []
        }
    }

    componentDidMount() {       
        console.log('Loading list from Dropbox', 'index.plist');
        // TODO: Handle failure to load XML
        console.log( 'dropboxAccessToken is found to be ', this.props.dropboxAccessToken );

        var dbx = new Dropbox({ accessToken: this.props.dropboxAccessToken });
        dbx.filesDownload({path: '/apps/paperless/index.plist'})
            .then(response => readAsText(response.fileBlob))
            .then(xmltext => xmljs.xml2json(xmltext, {compact: true, spaces: 4}))
            .then(jsondata => JSON.parse(jsondata))
            .then(jsondata => jsondata.plist.array.string)
//            .then(dump => { console.log(dump); return(dump); })
            .then(list => {
                this.setState({
                    topListArray: list
                })
                console.log('Found: ' + this.state.topListArray.length + ' lists on Dropbox');
            })
    }

    // TODO: Handle having zero lists
    render() {
        return (
        <div>
            <h2>
                My Paperless Lists
            </h2>
            <ul>
                {this.state.topListArray.map((item, i) =>
                    <TopListItem key={i}
                        {...item}/>
                )}
            </ul>
        </div>
    )}
}


