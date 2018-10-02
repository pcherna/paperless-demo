# Peter's notes

# Key Sources

- LinkedIn:
  - React.js Essential Training (Eve Porcello)
  - Learning ECMAScript 6 (Eve Porcello)
  - JavaScript Essential Training (Morten Rand-Hendriksen)
- Other:
  - A Simple React Router v4 Tutorial (Paul Sherman)
  
# Things I've done
- create-react-app, to start fresh
- Model a bit based on ski-counter app from React.js Essential Training
- refactor into components folder
- Updated for react-router 4 based on various tutorials
- Load individual list.xml from local file
- Convert XML->JSON and generate ChecklistItems from JSON
- Use path-to-regexp from routing to handle "any" XML
- Parse index.plist to make the top list (list of lists)
- Connect to dropbox using dev-token, read from there
- Polls Dropbox for changes on individual lists
- Polls Dropbox for changes on top list
- Integrated prettier
- Added relatively-empty onChange handler for checkboxes


# TODO app features
- TopList:
  - Add/delete lists
  - Reorder lists
  - Show list-icon
- Checklist:
  - Add/delete items
  - Reorder items
  - Show list icon
  - Format note-text including hyperlinks
  - Persist changes
- Auth:
  - Use OAuth interface to properly connect to Dropbox

# TODO structural etc.
- Use Redux to manage state
- Switch to Dropbox notification API (notify.dropboxapi.com/2/files/list_folder/longpoll for client-side work, webhooks for server-side)
- Style it in Material
- Move some logic into Node
- Create Electron app
- Switch to https://www.npmjs.com/package/node-sass-chokidar?
- Store something using cookies, e.g. last visited list, username
- Try making it react-native

# General TODO
- Very little error handling
- Lots of untested /unhandled edge cases, e.g. have no lists, bad URL, unexpected errors
- I have promise chains that do very little per step; can be consolidated some. Don't have a strategy on that yet

# WIP
- If I switch to redux, I can move back from <Route render= > to <Route component= >