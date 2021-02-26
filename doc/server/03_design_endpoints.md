## Design the endpoints

In this step, we are designing REST APIs for our application. The main question is **how to apply REST principles in design process?**

The very first step is identifying the objects which will be presented as resources, which are:

- auth: for authentication process
- message: everything about message (create, read, update, delete)
- user: CRUD of user accounts
  Next, it's time to decide the resource URIs which are endpoints of our RESTful services. Think about the relationship between resources and its sub-resources (e.g. Message, User , Auth). Example

```javascript
/**
* @route POST api/messages/ User can send message
* @route PUT api/messages/ User can update content of message
* @route GET api/messages?page=1&limit=10  User can get a list of messages
* @route GET api/messages/:id User can read message detail

 */
```

Notice: **URIs should be nouns only**, don't use any verb or operation like:

```diff
// don't do this
-@route POST api/messages/create_message - Create a new message
```

**Assign HTTP Methods**: A user can perform browse, create, update, or delete operations. Typically we assign:

- `GET` for browsing
- `POST` for creating
- `PUT` for updating
- `DELETE` for removing

**Authorization**: if there are different roles of users in your system, you should pre-define who can see/do what. Example: we allow everyone to see the list of messages so the endpoint will look like:

```javascript
/**
 * @route GET api/messages?page=1&limit=10
 * @description Get messages with pagination
 * @access Public
 */
```

But if user want to write a message, they need to login, so the endpoint will be defined:

```javascript
/**
 * @route POST api/messages
 * @description Send a messages
 * @access  Public
 */
```

Let's design our endpoints:

- Create `/routes/auth.api.js`:

```javascript
const express = require("express");
const router = express.Router();

/**
 * @route POST api/auth/login
 * @description Login
 * @access Public
 */

module.exports = router;
```

- Create `/routes/message.api.js`:

```javascript
const express = require("express");
const router = express.Router();

/**
 * @route POST api/messages/
 * @description User can send message
 * @access Public
 */

/**
 * @route PUT api/messages/
 * @description update content of message
 * @access Login requied
 */

/**
 * @route GET api/messages?page=1&limit=10
 * @description User can get a list of messages
 * @access Public
 */

/**
 * @route GET api/messages/:id
 * @description User see a message detail
 * @access Public
 */

module.exports = router;
```

- Create `/routes/user.api.js`:

```javascript
const express = require("express");
const router = express.Router();

/**
 * @route POST api/users/
 * @description User can register for a new account
 * @access Public
 */

/**
 * @route GET api/users/me
 * @description Return current user info
 * @access Access Token required
 */

/**
 * @route GET api/users/:id/messages
 * @description Return list of messages sent to current user
 * @access Public
 */

module.exports = router;
```

- Finally, in `/routes/index.js`:

```javascript
const express = require("express");
const router = express.Router();

// userApi
const userApi = require("./user.api");
router.use("/users", userApi);

// authApi
const authApi = require("./auth.api");
router.use("/auth", authApi);

// messageApi
const messageApi = require("./message.api");
router.use("/messages", messageApi);

module.exports = router;
```

We haven't done any coding task yet, but we have a plan to follow and to measure our process.

When you design your own app, remember that it doesn't need to be perfect. You can come back and modify it later on. However, always start with a plan.

Good job! [Back to instructions](/README.md)
