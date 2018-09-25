# Peter's notes

# Key Sources

- LinkedIn, EssentialJS (ski counter app)
- React Router 4 tutorial from medium

# Things I've done

- create-react-app, to start fresh
- Model a bit based on ski-counter app
- refactor into components folder
- Updated for react-router 4
- Load individual list.xml from local
- Convert XML->JSON
- Generate ChecklistItems from JSON
- Use path-to-regexp from routing to handle "any" XML
- Parse index.plist to make list of lists
- Connect to dropbox using dev-token to try reading from there

# Things that still suck / todo
- Very little error handling
- Lots of untested /unhandled edge cases, e.g. have no lists, bad URL, unexpected errors
- I have promise chains that do very little per step; can be consolidated some. Don't have a strategy on that yet
- Use Redux to manage state
- Style it in Material
- Store state of checkbox updates
- Add/delete lists
- Add/delete items
- Check for changes in Dropbox, autoupdate

# WIP
- If I switch to redux, I can move back from <Route render= > to <Route component= >