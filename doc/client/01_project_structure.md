## Project Structure

How to structure large React apps into folders and files is a highly opinionated topic. There is no right way to do it. However, let set up conventions to structure this React app:

- Put your stateless components in `/src/components/`, because we plan to **"reuse"** these components. Tip: if your component needs to access to the global store, put it in `/src/containers/`
- Keep all the components that manage the states, and logics in `/src/containers/`
- `src/redux/actions`: each file in this folder is related to a set of actions, e.g. `auth.actions.js`. **Rule**: only put API Connection in actions files.
- `src/redux/reducers`: set of reducers for managing the global store. They are combined in `index.js`. Sometimes in smaller app, where only one reducer is used, we could ignore `index.js` file.
- `src/redux/constants`: set of types of actions
- `src/redux/store.js`: configuration of the store

In the end, you will have a project structure like this:

```
|- src\
  |- components\
    |- AlertMsg.js
    |- MessageModal.js
    |- PublicNavbar.js
  |- images\
  |- pages\
    |- NotFoundPage.js
    |- HomePage.js
    |- LoginPage.js
    |- RegisterPage.js
  |- redux\
      |- actions\
        |- auth.actions.js
      |- constants\
        |- auth.constants.js
      |- reducers\
        |- auth.reducer.js
        |- index.js
      |- store.js
  |- App.css
  |- routes
  |- App.js
  |- apiService.js
  |- index.js
|- .env
|- .gitignore
|- package.json
|- README.md
```

- You can use command line to create folders quickly, e.g.

  ```bash
  $ mkdir src/components src/containers src/containers/Routes src/redux src/redux/actions src/redux/constants src/redux/reducers
  ```

Good job! [Back to instructions](/README.md)
