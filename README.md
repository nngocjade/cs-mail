# CoderSchool Mail

This is a documentation of how to create web application in MERN stack **from scratch**. The app allow user to send email to other users within the app platform. This is project is a good excercise for building one of your familiarize with the Mongo database.

## Features

- User management and login flow
- State management with redux
- CRUD for messages
- Error handling and notification
- And more..

## Implementation

### Server side

When developing a full-stack web, it is common to have the web's backend develop prior to front-end. One of the main reason is that it would be easier to have database ready when implementing the front-end logic of the web.

**Project setup**

- [Setup with express-generator](/doc/server/00_setup_project.md)
- [Project structure](/doc/server/01_project_structure.md)
- [Setup app](/doc/server/02_setup_app_js.md)
- [Design the endpoints](/doc/server/03_design_endpoints.md)
- [Design database schema](/doc/server/04_design_database.md)
- [Adding Mongoose middlewares](/doc/server/05_mongoose_middleware.md)

**Basic Features**

- [Register user account ](/doc/server/06_register_user.md)
- [User can log in](/doc/server/07_login.md)
- [Message APIs (Routes, Controllers)](/doc/server/08_messages_apis.md)
- [User APIs (Routes, Controllers)](/doc/server/09_user_apis.md)

### Client side

We will use our newly built Apis from the previous BackEnd instructions:

```
https://localhost:5000
```

**[API Documentation](./doc/api_doc.md)**

Let's get started:

**Project setup**

- [Setup a React App](/doc/client/00_setup_project.md)
- [Project Structure](/doc/client/01_project_structure.md)
- [Redux configuration](/doc/client/02_redux_config.md)
- [Private route setting](/doc/client/03_private_route.md)
  `Redux`
- [Setting up Constant](/doc/client/04_setup_constant.md)
- [Setting up Actions](/doc/client/05_setup_actions.md)
- [Setting up Reducers](/doc/client/06_setup_reducers.md)

**Basic Features**

- [Stateless components](/doc/client/07_components.md)
- [User can log in](/doc/client/08_login.md)
- [Notfound page](/doc/client/09_notfound.md)
- [The register page](/doc/client/10_register_page.md)
